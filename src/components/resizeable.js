import $ from 'jquery';
import Loader from './loader';
import {clamp} from './util';


const PREFIX = 'resizeable.',
    CONTROLLER = `${PREFIX}controller`;


const EVENTS = {
    start: `${PREFIX}start`,
    stop: `${PREFIX}stop`,
    resize: `${PREFIX}resize`,
    beforeResize: `${PREFIX}beforeResize`
};


export default class Resizeable {
    static EVENTS = EVENTS;
    static CONTROLLER = CONTROLLER;

    static getInstance(element) {
        return $(element).data(this.CONTROLLER);
    }

    constructor({target, resizeable}) {
        this._onMouseDown = this.onMouseDown.bind(this);

        if(element) {
            this.setElement(element);
            this.$handle = this.$element.children('.resize-handle');

            if(!this.$handle.length) {
                this.$handle = $('<div class="resize-handle"></div>');
                this.$element.append(this.$handle);
            }
        }
    }

    setElement(element) {
        if(this.$element) {
            this.destroy();
        }

        this.$element = $(element);
        this.$element.data(CONTROLLER, this).on("mousedown", this._onMouseDown);
    }

    destroy() {
        if(this.$element) {
            this.$element.data(CONTROLLER, null).off("mousedown", this._onMouseDown);
            this.$element = null;
        }
    }

    onMouseDown(event) {
        if(!this.$handle[0].contains(event.target) || this.$element.hasClass('no-resize')) {
            return;
        }

        this.startResizing(event);
    }

    startResizing(event) {
        const element = this.$element;

        const startX = event.pageX,
            startY = event.pageY,
            $doc = $(document),
            xProperty = this.resizeX,
            yProperty = this.resizeY,
            startWidth = xProperty ? parseInt(this.width, 10) : false,
            startHeight = yProperty ? parseInt(this.height, 10) : false;

        const mouseUp = (event) => {
            $doc.off('mousemove', mouseMove);

            // We remove the class in a requestAnimationFrame
            // so that the class is only removed after click events are run.
            window.requestAnimationFrame(() => {
                element.removeClass('resizing');
            });
        };

        const mouseMove = (event) => {
            if(element.hasClass('resizing')) {
                element.addClass('resizing');
            }

            const dX = event.pageX - startX,
                dY = event.pageY - startY;

            let newWidth = null, newHeight = null;

            if(xProperty === '+') {
                newWidth = clamp(startWidth + dX, this.minWidth, this.maxWidth);
            } else if(xProperty === '-') {
                newWidth = clamp(startWidth - dX, this.minWidth, this.maxWidth);
            }

            if(yProperty === '+') {
                newHeight = clamp(startHeight + dY, this.minHeight, this.maxHeight);
            } else if(yProperty === '-') {
                newHeight = clamp(startHeight - dY, this.minHeight, this.maxHeight);
            }

            window.requestAnimationFrame(() => {
                if(newWidth !== null) element.css('width', newWidth);
                if(newHeight !== null) element.css('height', newHeight);
            });

            element.trigger(EVENTS.resize, {
                to: {
                    width: newWidth !== null ? newWidth : startWidth,
                    height: newHeight !== null ? newHeight : startHeight,
                },
                from: {
                    width: newWidth,
                    height: newHeight,
                },
                controller: this,
                xDirection: xProperty,
                yDirection: yProperty,
                startX: startX,
                startY: startY,
                positionX: event.pageX,
                positionY: event.pageY,
                dX: dX,
                dY: dY
            }, event);

            event.preventDefault();
        };

        $doc.one('mouseup', mouseUp);
        $doc.on('mousemove', mouseMove);
    }

    get resizeX() {
        const v = this.resize;

        if(v.indexOf("-x") !== -1) {
            return '-';
        } else if(v.indexOf('x') !== -1) {
            return '+';
        } else {
            return false;
        }
    }

    get resizeY() {
        const v = this.resize;

        if(v.indexOf("-y") !== -1) {
            return '-';
        } else if(v.indexOf('y') !== -1) {
            return '+';
        } else {
            return false;
        }
    }

    get minWidth() {
        const v = parseInt(this.$element.css("minWidth"), 10);
        return Number.isNaN(v) ? 0 : v;
    }

    get maxWidth() {
        const v = parseInt(this.$element.css("maxWidth"), 10);
        return Number.isNaN(v) ? Infinity : v;
    }

    get minHeight() {
        const v = parseInt(this.$element.css("minHeight"), 10);
        return Number.isNaN(v) ? 0 : v;
    }

    get maxHeight() {
        const v = parseInt(this.$element.css("maxHeight"), 10);
        return Number.isNaN(v) ? Infinity : v;
    }

    get width() {
        return this.$element.outerWidth();
    }

    get height() {
        return this.$element.outerHeight();
    }

    get resize() {
        return this.$element.data('resizeable') || 'xy';
    }
}


Loader.register('resizeable', (element) => new Resizeable(element));


$(function() {
    $('[data-resizeable]').each((x, element) => new Resizeable(element));
});