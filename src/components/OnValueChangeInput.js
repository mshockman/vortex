import $ from 'jquery';
import ObjectEvents from "../common/ObjectEvents";


export default class OnValueChangeInput extends ObjectEvents {
    constructor(selector, delay=500) {
        super();
        this.$element = $(selector);
        this.delay = delay;

        this._onEvent = this.onKeyUp.bind(this);
        this.$element.on('change', this._onEvent);
        this.$element.on('keyup', this._onEvent);
        this.value = this.$element.val();
    }

    onKeyUp(event) {
        if(this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }

        if(typeof this.delay === 'number' && this.delay >= 0) {
            this._timer = setTimeout(() => {
                this._timer = null;
                this.onChange();
            }, this.delay);
        } else {
            this.onChange();
        }
    }

    onChange() {
        if(this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }

        const value = this.$element.val();

        if(value !== this.value) {
            this.value = value;
            this.trigger('value-change', this.value);
        }
    }
}
