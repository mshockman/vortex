import Loader from '../loader';
import Resizeable from './resizeable';
import $ from 'jquery';
import {clamp, parseInteger} from "../utility";


export default class Panes {
    constructor(element, {pane='x'}) {
        this.$element = $(element);
        this.pane = pane;

        this.$element.on(Resizeable.EVENTS.resizing, (event, ui) => {
            let $target = $(event.target),
                space = this.getPaneSpace($target);

            if(this.pane === 'x' || this.pane === 'x y') {
                ui.to[0] = clamp(ui.to[0], 0, Math.max(0, this.innerWidth - space.width));
            }

            if(this.pane === 'y' || this.pane === 'x y') {
                ui.to[1] = clamp(ui.to[1], 0, Math.max(0, this.innerHeight - space.height));
            }
        });
    }

    getPaneSpace(exclude) {
        let children = this.$element.children();

        if(exclude) {
            children = children.not(exclude);
        }

        let r = {
            width: 0,
            height: 0
        };

        children.each((x, element) => {
            element = $(element);
            let grow = parseInt(element.css('flex-grow'), 10);

            if(grow === 0) {
                r.width += parseInteger(element.css('width'), 0, 10);
                r.height += parseInteger(element.css('height'), 0, 10);
            }
        });

        return r;
    }

    get innerWidth() {
        return this.$element.innerWidth();
    }

    get innerHeight() {
        return this.$element.innerHeight();
    }

    getElementBounds(element) {
        element = $(element);

        return {
            minWidth: parseInteger(element.css('min-width'), 0, 10),
            maxWidth: parseInteger(element.css('max-width', Infinity, 10)),
            minHeight: parseInteger(element.css('min-height', 0, 10)),
            maxHeight: parseInteger(element.css('max-height'), Infinity, 10)
        };
    }
}


Loader.register('panes', (target, config) => {
    let p = new Panes(target, config);
    window.p = p;
    return p;
});
