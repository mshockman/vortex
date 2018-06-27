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
                initialized = element.data('initialized');

            if(key) {
                initialized[key].toggle();
            } else if(initialized) {
                for(let key in initialized) {
                    if(initialized.hasOwnProperty(key)) {
                        if(initialized[key].toggle) {
                            initialized[key].toggle();
                        }
                    }
                }
            }
        }
    }
}


Loader.register('toggle', (config) => {
    return new Toggle(config);
});
