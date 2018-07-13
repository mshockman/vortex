/**
 * Creates a checkbox column for each row.
 *
 * The checkbox in the header allows the user to check / uncheck all visible columns on the current page.
 * When checked a checked class will be added to the row.
 */


import $ from 'jquery';


export default class RowCheckboxColumn {
    constructor(name) {
        this.name = name;
        this.resizeable = false;
        this.width = 25;
        this.sortable = false;
        this.orderable = false;
        this.required = true;
        this.priority = 0;
        this.$column = $(`<td><input type="checkbox" /></td>`);

        this._onChange = this.onChange.bind(this);
    }

    renderer() {
        return this.$column;
    }

    cellRenderer() {
        return $(`<td><input type="checkbox" data-role="checkbox" /></td>`);
    }

    init(table) {
        this.table = table;

        this.$column.on('change', () => {
            let value = this.$column.find("[type='checkbox']").prop('checked');

            this.table.$element.find("[data-role='checkbox']").each((x, checkbox) => {
                checkbox.checked = value;
                let $tr = $(checkbox).closest('tr', this.table.$element);

                if(value) {
                    $tr.addClass('checked');
                } else {
                    $tr.removeClass('checked');
                }
            });
        });

        this.table.$element.on('change', this._onChange);
    }

    destroy() {
        this.table.$element.off('change', this._onChange);
    }

    onChange(event) {
        const $target = $(event.target).closest("[data-role='checkbox']", this.table.$element);

        if($target.length) {
            let value = $target.prop('checked'),
                $row = $target.closest('tr', this.table.$element);

            if(value === false) {
                this.checkbox.prop('checked', false);
                $row.removeClass('checked');
            } else {
                $row.addClass('checked');

                if(this.allChecked()) {
                    this.checkbox.prop('checked', true);
                }
            }
        }
    }

    get checkbox() {
        return this.$column.find("[type='checkbox']");
    }

    allChecked() {
        let checkboxes = this.table.$element.find("[data-role='checkbox']");

        for(let i = 0, l = checkboxes.length; i < l; i++) {
            if(!checkboxes[i].checked) return false;
        }

        return true;
    }
}