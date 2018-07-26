import $ from 'jquery';
import ObjectEvents from "../common/ObjectEvents";


export class FilterBase {
    constructor(name, label) {
        this.label = label;
        this.name = name;

        this.$label = $(`<label class="filter-label">${this.label}:</label>`);
        this.$element = $(`<div class="filter-container"></div>`);
        this.$filter = $(`<div class="filter-group"></div>`);

        this.$element.append(this.$label);
        this.$element.append(this.$filter);

        this.$element.data("filter-control", this);
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * @abstract
     */
    getValue() {}

    // noinspection JSUnusedGlobalSymbols
    /**
     * @abstract
     * @param value
     */
    setValue(value) {}

    // noinspection JSUnusedGlobalSymbols
    /**
     * @abstract
     */
    clear() {}

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}


export class InputFilter extends FilterBase {
    constructor(name, label, type='text') {
        super(name, label);

        this.$input = $(`<input type="${type}" />`);
        this.$filter.append(this.$input);
        this.$filter.addClass('input-filter');
    }

    getValue() {
        return this.$input.val();
    }

    setValue(value) {
        this.$input.val(value);
    }

    clear() {
        this.$input.val('');
    }
}


export class RangeInputFilter extends FilterBase {
    constructor(name, label, type='number') {
        super(name, label);

        this.$rangeContainer = $(`<div class="hbox align-middle"></div>`);
        this.$start = $(`<input type="${type}" />`);
        this.$stop = $(`<input type="${type}" />`);
        this.$rangeContainer.append(this.$start);
        this.$rangeContainer.append('<div class="pl-1 pr-1">to</div>');
        this.$rangeContainer.append(this.$stop);
        this.$rangeContainer.appendTo(this.$filter);
        this.$filter.addClass('range-filter');
    }

    getValue() {
        return {
            start: this.$start.val(),
            stop: this.$stop.val()
        }
    }

    setValue(value) {
        this.$start.val(value.start);
        this.$stop.val(value.stop);
    }

    clear() {
        this.$start.val('');
        this.$stop.val('');
    }
}


export class SelectFilter extends FilterBase {
    constructor(name, label, options, placeholder="Select") {
        super(name, label);

        this.$select = $(`<select><option value="">${placeholder}</option></select>`);

        for(let option of options) {
            let value = option.value,
                label = option.label,
                $option = $(`<option value="${value}">${label}</option>`);

            this.$select.append($option);
        }

        this.$filter.append(this.$select);
        this.$filter.addClass('select-filter');
    }

    getValue() {
        return this.$select.val();
    }

    setValue(value) {
        this.$select.val(value);
    }

    clear() {
        this.$select.val("");
    }
}


export class FiltersWidget extends ObjectEvents {
    constructor() {
        super();
        this.$element = $(`<form class="filters-component"></form>`);
        this.$filters = $(`<div class="filters-container"></div>`);
        this.$controls = $(`<div class="filters-controls"></div>`);
        this.$submit = $(`<button type="submit" class="filter-btn">Filter</button>`);
        this.$clear = $(`<button type="button" class="clear-btn mr-1">Clear</button>`);

        this.$element.append(this.$filters);
        this.$element.append(this.$controls);
        this.$controls.append(this.$clear);
        this.$controls.append(this.$submit);
        this.$element.data('filters-control', this);

        this.$element.on('submit', (event) => {
            event.preventDefault();
            this.trigger('submit', this.getFilters());
        });

        this.$clear.on('click', () => {
            this.clear();
        });
    }

    addFilter(...filters) {
        for(let filter of filters) {
            let $filter = $(`<div class='filter' data-filter='${filter.name}'>`);
            filter.appendTo($filter);
            $filter.appendTo(this.$filters);
            $filter.data('filter', filter);
        }
    }

    getFilters() {
        let r = {};

        this.$filters.find('[data-filter]').each((x, element) => {
            let filter = $(element).data('filter');
            r[filter.name] = filter.getValue();
        });

        return r;
    }

    // noinspection JSUnusedGlobalSymbols
    setFilters(filters) {
        for(let key in filters) {
            if(filters.hasOwnProperty(key)) {
                let $filter = this.$filters.find(`[data-filter='${key}']`);

                if($filter.length) {
                    let filter = $filter.data('filter');
                    filter.setValue(filters[filter]);
                }
            }
        }
    }

    clear() {
        this.$filters.find('[data-filter]').each((x, element) => {
            let filter = $(element).data('filter');
            filter.clear();
        });
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}
