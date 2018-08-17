import $ from 'jquery';
import {events, boundProperty} from './core';
import {choiceType, parseBooleanValue, parseIntegerValue} from "../../common/types";
import DropDown from "./DropDown";


export default class Selectable {
    @boundProperty(parseBooleanValue, false) multiSelect;

    @boundProperty(parseIntegerValue, 3) maxLabels;

    @boundProperty(null, ', ') labelDelimiter;

    @boundProperty(null, undefined) name;

    @boundProperty(null, 'form') export;

    @boundProperty(null, ', ') delimiter;

    @boundProperty(choiceType('check', 'click'), 'click') selectEvent;

    @boundProperty(null, "Select...") placeholder;

    @boundProperty(parseBooleanValue, true) activateSelected;

    constructor(selector, config) {
        this.$element = $(selector);

        this._onClick = this.onClick.bind(this);
        this._onChange = this.onChange.bind(this);
        this._onOpen = this.onOpen.bind(this);
        this.$element.on(events.select, this._onClick);
        this.$element.on('change', this._onChange);
        this.$element.data('select-widget', this);
        this.$element.on(events.open, this._onOpen);

        if(config) {
            this.$element.data(config);
        }

        this.render();
    }

    onOpen() {
        if(this.activateSelected && !this.multiSelect) {
            this.getSelectedItems().addClass('active');
        }
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


export function buildFromSelect(element) {
    let dom = $(`
        <div class="dropdown select-widget" data-role="dropdown">
            <span class="select" data-role="chosen"></span>
            <ul class="menu list-group" data-role="menu"></ul>
        </div>
    `);

    let $menu = dom.find('.menu');
    element = $(element);
    dom.data(element.data());

    let name = element.attr('name'),
        multiple = element[0].hasAttribute('multiple');

    if(name) {
        dom.data('name', name);
    }

    if(multiple) {
        dom.data({
            'closeOnSelect': false,
            'selectEvent': 'check',
            'multiSelect': true
        });
    }

    element.find('option').each((x, option) => {
        option = $(option);
        let value = option.attr('value'),
            label = option.text(),
            $option;

        if(multiple) {
            $option = $(`<li class="menuitem list-item" data-role="item" data-value="${value}"><label><input type="checkbox" /><a data-label>${label}</a></label></li>`);
        } else {
            $option = $(`<li class="menuitem list-item" data-role="item" data-value="${value}"><a data-label>${label}</a></li>`);
        }

        $option.data(option.data());
        $menu.append($option);
    });

    let d = new DropDown(dom);
    new Selectable(dom);
    element.replaceWith(d.$element);
    return d;
}
