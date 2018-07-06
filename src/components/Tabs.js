import $ from 'jquery';
import Loader from '../loader';


export default class Tabs {
    constructor(target) {
        this.$element = $(target);
        this._onClick = this.onClick.bind(this);

        this.$element.on('click', this._onClick);
    }

    onClick(event) {
        const $target = $(event.target).closest('[data-tab]', this.$element);

        if(!$target.length) {
            return;
        }

        this.activate($target);
    }

    activate(tab) {
        this.$element.children('[data-tab]').not(tab).each((index, element) => {
            this.deactivate(element);
        });

        tab = $(tab);

        tab.addClass('active');
        let tabPane = $(tab.attr('data-tab'));
        tabPane.addClass('open');
    }

    deactivate(tab) {
        tab = $(tab);

        tab.removeClass('active');
        let tabPane = $(tab.attr('data-tab'));
        tabPane.removeClass('open');
    }
}


Loader.register('tabs', (target, config) => {
    return new Tabs(target, config);
});
