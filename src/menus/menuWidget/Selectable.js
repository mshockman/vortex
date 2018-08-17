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

    @boundProperty(choiceType('check', 'click'), 'click') selectEvent;

    @boundProperty(null, "Select...") placeholder;

    constructor(selector, config) {
        this.$element = $(selector);

        this._onClick = this.onClick.bind(this);
        this._onChange = this.onChange.bind(this);
        this.$element.on(events.select, this._onClick);
        this.$element.on('change', this._onChange);
        this.$element.data('select-widget', this);

        if(config) {
            this.$element.data(config);
        }

        this.render();
    }

    onClick(event) {
        const $target = this._getClosestItem(event.target);

        if(!$target || this.selectEvent !== 'click') {
            return;
        }

        if(this.multiSelect) {
            if(this.isSelected($target)) {
                this.deselect($target);
            } else {
                this.select($target);
            }
        } else {
            for(let item of this.getSelectedItems().toArray()) {
                if(item !== $target[0]) {
                    this.deselect(item);
                }
            }

            if(!this.isSelected($target)) {
                this.select($target);
            }
        }

        this.render();
    }

    onChange(event) {
        const $target = this._getClosestItem(event.target);

        if(!$target || this.selectEvent !== 'check') {
            return;
        }

        const input = $(event.target),
            checked = input.is(':checked'),
            isSelected = this.isSelected($target);

        if(this.multiSelect) {
            if(checked && !isSelected) {
                this.select($target);
            } else if(!checked && isSelected) {
                this.deselect($target);
            }
        } else {
            if(checked) {
                for (let item of this.getSelectedItems().toArray()) {
                    if (item !== $target[0]) {
                        this.deselect(item);
                    }
                }

                if(!isSelected) {
                    this.select($target);
                }
            } else if(!checked && isSelected) {
                this.deselect($target);
            }
        }

        this.render();
    }

    deselect(item) {
        item = $(item);
        item.removeClass('selected');
        item.find('input[type="checkbox"]').prop('checked', false);
    }

    select(item) {
        item = $(item);
        item.addClass('selected');

        item.find('input[type="checkbox"]').prop('checked', true);
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
        } else if(r.length) {
            r = r.join(this.labelDelimiter);
        } else {
            r = this.placeholder || "";
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

    _getClosestItem(target) {
        let r = $(target).closest("[data-role='item']", this.$element);

        if(r.length) {
            return r;
        }
    }
}
