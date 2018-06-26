import $ from 'jquery';
import Loader from '../loader';


export default class Toggle {
    constructor({target}) {
        this.$element = $(target);

        this._onClick = this.onClick.bind(this);
        this.$element.on('click', this._onClick);
    }

    onClick(event) {
        let $target = $(event.target).closest("[data-toggle]", this.$element);

        if($target.length) {
            let [selector, key] = $target.attr('data-toggle').split(/\s*->\s*/),
                element = $(selector),
                object = element.data(key);

            object.toggle();
        }
    }
}


Loader.register('toggle', (config) => {
    return new Toggle(config);
});
