import ObjectEvents from "../common/ObjectEvents";
import $ from 'jquery';


export default class PageLengthChooser extends ObjectEvents {
    constructor(model, choices=[25, 50, 100, 500], id=null, classes=null, name=null) {
        super();
        this.model = model;
        this.choices = choices;
        this._onChange = this.onChange.bind(this);

        this.$element = $(`<select>`);

        if(name) {
            this.$element.attr('name', name);
        }

        if(id) {
            this.$element.attr('id', id);
        }

        if(classes) {
            this.$element.addClass(classes);
        }

        for(let choice of this.choices) {
            let label, value;

            if(Array.isArray(choice)) {
                label = choice[1];
                value = choice[0];
            } else {
                value = choice;
            }

            label = label || value;

            let $option = $(`<option name='${value}'>${label}</option>`);
            this.$element.append($option);
        }

        this.$element.val(this.model.pageLength);
        this.$element.on('change', this._onChange);
    }

    getValue() {
        return parseInt(this.$element.val(), 10);
    }

    onChange() {
        this.model.setPageLength(this.getValue());
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}