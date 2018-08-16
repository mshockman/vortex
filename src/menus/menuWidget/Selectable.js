import $ from 'jquery';
import {events, boundProperty} from './core';
import {choiceType, parseBooleanValue, parseIntegerValue} from "../../common/types";
import MenuView from './MenuView';


export default class Selectable {
    @boundProperty(parseBooleanValue, false) multiSelect;

    @boundProperty(parseIntegerValue, 3) maxLabels;

    @boundProperty(null, ', ') labelDelimiter;

    @boundProperty(null, undefined) name;

    @boundProperty(null, 'form') export;
    @boundProperty(null, ', ') delimiter;

    @boundProperty(choiceType('change', 'select'), 'select') selectEvent;

    constructor(selector, config) {
        this.$element = $(selector);

        this._onSelect = this.onSelect.bind(this);
        this.$element.on(events.select, this._onSelect);
        this.$element.data('select-widget', this);

        if(config) {
            this.$element.data(config);
        }

        this.render();
    }

    onSelect(event) {
        if(this.multiSelect) {
            if(this.isSelected(event.target)) {
                this.deselect(event.target);
            } else {
                this.select(event.target);
            }
        } else {
            for(let item of this.getSelectedItems().toArray()) {
                if(item !== event.target) {
                    this.deselect(item);
                }
            }

            if(!this.isSelected(event.target)) {
                this.select(event.target);
            }
        }

        this.render();
    }

    deselect(item) {
        $(item).removeClass('selected');
    }

    select(item) {
        $(item).addClass('selected');
    }

    isSelected(item) {
        return $(item).hasClass('selected');
    }

    getSelectedItems() {
        return this.$element.find("[data-role='item'].selected");
    }

    render() {
        let r = [],
            values = [];

        for(let item of this.getSelectedItems().toArray()) {
            item = $(item);
            let label = item.find("[data-label]");

            if(label.length) {
                r.push(label.html());
            } else {
                r.push(item.html());
            }
            values.push(item.data('value'));
        }

        if(r.length > this.maxLabels) {
            r = `${r.length} Selected`
        } else {
            r = r.join(this.labelDelimiter);
        }

        this.$element.children("[data-role='chosen']").html(r);

        if(this.name) {
            if(this.export === 'form') {
                this.$element.children(`[name="${this.name}"]`).remove();

                for (let value of values) {
                    if (value) {
                        let i = $(`<input type="hidden" value="${value}" name="${this.name}" />`);
                        this.$element.append(i);
                    }
                }
            } else if(this.export === 'csv') {
                this.$element.children(`[name="${this.name}"]`).remove();
                let v = values.join(this.delimiter || ',');
                let i = $(`<input type="hidden" value="${v}" name="${this.name}" />`);
                this.$element.append(i);
            }
        }
    }
}
