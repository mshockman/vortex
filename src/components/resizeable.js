import Mouse from '../common/Mouse';
import {matrixSub, matrixProduct, privotRow, getColumnVertex, matrixAdd} from "../common/matricies";
import Loader from '../loader';
import {clamp, parseInteger} from '../utility';


const PREFIX = 'resizeable.';


const EVENTS = {
    'resizing': `${PREFIX}resizing`,
    'resized': `${PREFIX}resized`
};


export default class Resizeable extends Mouse {
    constructor(element, {resize='x y', minWidth=0, maxWidth=null, minHeight=0, maxHeight=null, handle=null, exclude=null}) {
        super();

        this.$element = $(element);
        this.resize = resize;
        this.minWidth = parseInteger(minWidth, parseInteger(this.$element.css('minWidth'), 0));
        this.minHeight = parseInteger(minHeight, parseInteger(this.$element.css('minHeight'), 0));
        this.maxWidth = parseInteger(maxWidth, parseInteger(this.$element.css('maxWidth'), null));
        this.maxHeight = parseInteger(maxHeight, parseInteger(this.$element.css('maxHeight'), null));
        this.handle = handle;
        this.exclude = exclude;

        this._onMouseDown = this.onMouseDown.bind(this);
        this._width = null;
        this._height = null;

        this.$element.on('mousedown', this._onMouseDown);
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    onMouseDown(event) {
        console.log("here");
        let $target = $(event.target);

        if(this.handle && !$target.closest(this.handle, this.$element).length) {
            return;
        } if(this.exclude && $target.closest(this.exclude, this.$element).length) {
            return;
        } else if(this.isDisabled) {
            return;
        }

        let originMatrix = [[event.pageX], [event.pageY]],
            start = [[this.width], [this.height]];

        // Start tracking mouse position on mouse move.
        let tracker = this.trackMousePosition((event, cords) => {
            cords = matrixSub(privotRow(cords), originMatrix); // Offset cordinents so the origin is the starting position.
            cords = matrixProduct(this._getTransformationMatrix(), cords); // Transform the matrix.

            let size = getColumnVertex(matrixAdd(start, cords), 0);

            this._setCords(size);

            $("#test-output").text(`${this.width}, ${this.height}`);
        });

        // Add event listeners to untrack mouse on mouse up.
        const onMouseUp = (event) => {
            tracker.untrack();
            tracker.callback(event, [event.pageX, event.pageY]);
            tracker.$doc.off('mouseup', onMouseUp);
        };

        tracker.$doc.on('mouseup', onMouseUp);
    }

    _getTransformationMatrix() {
        let resize = this.resize.split(/\s+/),
            matrix = [[1, 0], [0, 1]];

        if(resize.indexOf('-x') !== -1) {
            matrix[0] = [-1, 0];
        }

        if(resize.indexOf('-y') !== -1) {
            matrix[1] = [0, -1];
        }

        return matrix;
    }

   _setCords(cords) {
        let width = this.width,
            height = this.height;

        this.width = cords[0];
        this.height = cords[1];

        if(this.width !== width || this.height !== height) {
            let event = {
                controller: this,
                from: [width, height],
                to: [this.width, this.height],
            };

            this.$element.trigger(EVENTS.resizing, event);

            this.width = event.to[0];
            this.height = event.to[1];

            this.render();
        }
   }

   get width() {
        if(this._width === null) {
            this.width = parseInt(this.$element.css('width'), 10);
        }

        return this._width;
   }

   set width(value) {
        if(this.isWidthResizeable) {
            this._width = clamp(value, this.minWidth, this.maxWidth);
        }
   }

   get height() {
        if(this._height === null) {
            this.height = parseInt(this.$element.css('height'), 10);
        }

        return this._height;
   }

   set height(value) {
        if(this.isHeightResizeable) {
            this._height = clamp(value, this.minHeight, this.maxHeight);
        }
   }

   render() {
        if(this._animationId) return;

        this._animationId = window.requestAnimationFrame(() => {
            this._animationId = null;
            let r = {};

            if(this.isWidthResizeable) {
                r.width = this.width;
            }

            if(this.isHeightResizeable) {
                r.height = this.height;
            }

            this.$element.css(r);

            this.$element.trigger(EVENTS.resized, {
                controller: this,
                size: {
                    width: this.width,
                    height: this.height
                }
            });
        });
   }

   get isWidthResizeable() {
       let resize = this.resize.split(/\s+/);
       return resize.indexOf('x') !== -1 || resize.indexOf('-x') !== -1;
   }

    get isHeightResizeable() {
        let resize = this.resize.split(/\s+/);
        return resize.indexOf('y') !== -1 || resize.indexOf('-y') !== -1;
    }
}


Resizeable.EVENTS = EVENTS;
Resizeable.PREFIX = PREFIX;


window.Resizeable = Resizeable;


Loader.register('resizeable', (target, config) => {
    return new Resizeable(target, config);
});
