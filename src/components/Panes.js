import Loader from '../loader';
import Resizeable from './resizeable';


export default class Panes {
    constructor(element, {pane='x'}) {
        this.$element = $(element);
        this.pane = pane;

        this.$element.on(Resizeable.EVENTS.resizing, (event, ui) => {
            console.dir(ui.to);
        });
    }

    getPanesWidth(panes) {
        // current width
        // min width
    }
}


Loader.register('panes', (target, config) => {
    return new Panes(target, config);
});
