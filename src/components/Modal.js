import $ from 'jquery';
import Loader from '../loader';


const PREFIX = 'models.';


const EVENTS = {
    OPEN: `${PREFIX}open`,
    CLOSE: `${PREFIX}.close`
};


export default class Modal {
    constructor(target) {
        this.$element = $(target);
        this.$element.attr('data-role', 'modal');

        this._onClick = this.onClick.bind(this);
        this.$element.on('click', this._onClick);
        this.$element.data('modal', this);
    }

    onClick(event) {
        const $target = $(event.target);

        let $dismiss = $target.closest('[data-action="dismiss"]');

        if($target.is("[data-role='modal']") || $dismiss.length) {
            this.close();
        }
    }

    open() {
        this.$element.addClass('open');
        this.$element.trigger(EVENTS.OPEN, this);
    }

    close() {
        this.$element.removeClass('open');
        this.$element.trigger(EVENTS.CLOSE, this);
    }

    get isOpen() {
        return this.$element.hasClass('open');
    }

    toggle() {
        if(this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}


Loader.register('modal', (target) => {
    return new Modal(target);
});


window.Modal = Modal;