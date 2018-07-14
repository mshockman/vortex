import $ from "jquery";
import ObjectEvents from "../common/ObjectEvents";


/**
 * Creates a detached header that can stand alone from the main table.
 * @returns {string}
 */
export function dataTableHeaderTemplate() {
    return `
        <table class="data-table-header">
            <thead></thead>
        </table>
    `;
}


/**
 * Creates a inline header that should be prepended to the same table as the view.
 * @returns {string}
 */
export function inlineDataTableHeaderTemplate() {
    return `<thead></thead>`;
}



export default class DataTableHeader extends ObjectEvents {
    constructor(table, id, classes, template=dataTableHeaderTemplate) {
        super();
        this.table = table;
        this.$element = $(template());

        if(classes) {
            this.$element.addClass(classes);
        }

        if(id) {
            this.$element.attr('id', id);
        }

        this.$thead = this.$element.find('thead');

        if(!this.$thead.length) {
            this.$thead = this.$element;
        }

        this._render = this.render.bind(this);
        this._resize = this.resize.bind(this);

        // Queue a rerender on col-change, col-resize and refresh events from the table.
        this.table.on('render', this._render);
        this.table.on('resize', this._resize);
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    /**
     * Renders the components nodes.
     */
    render() {
        if(this._queueId) {
            window.cancelAnimationFrame(this._queueId);
            this._queueId = null;
        }

        this.$thead.empty();
        let width = 0;

        let $tr = $("<tr>");

        for(let column of this.table.columns) {
            width += column.width;
            let $th = this.columnRenderer(column);
            $tr.append($th);
        }

        this.$element.css('width', width);
        this.$thead.append($tr);
        this.trigger('render', this);
    }

    /**
     * Queue a rerender of the component.
     */
    refresh() {
        if(this._queueId) return;

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;
            this.render();
        });
    }

    resize() {
        if(this._resizeQueueId) return;

        this._resizeQueueId = window.requestAnimationFrame(() => {
            this._resizeQueueId = null;
            let width = 0;

            this.$thead.find('td, th').each((x, element) => {
                element = $(element);
                let column = element.data('column');
                element.css('width', column.width);
                width += column.width;
            });

            this.$element.css('width', width);
        });
    }

    columnRenderer(column) {
        let $th;

        if(column.renderer) {
            $th = column.renderer(this);
        } else {
            $th = $('<th>');
            $th.html(column.label);
        }

        $th.css("width", column.width);

        $th.data({
            column: column
        });

        if(column.id) {
            $th.attr('id', column.id);
        }

        if(column.classes) {
            $th.addClass(column.classes);
        }

        return $th;
    }

    getColumns() {
        return this.$element.find('td, th');
    }
}