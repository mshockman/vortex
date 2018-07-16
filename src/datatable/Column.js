import $ from 'jquery';


export default class Column {
    constructor(config) {
        this.name = null;
        this.key = null;
        this.label = null;

        this.width = null;
        this.maxWidth = null;
        this.minWidth = null;
        this.resizeable = null;

        this.orderable = null;
        this.id = null;
        this.classes = null;
        this.cellClasses = null;
        this.required = false;

        Object.assign(this, config);
    }

    renderer() {
        this.$element = $('<th>');
        this.$element.html(this.label);

        return this.$element;
    }

    cellRenderer(row) {
        let $td = $('<td>');
        $td.html(row[this.key]);
        return $td;
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}
