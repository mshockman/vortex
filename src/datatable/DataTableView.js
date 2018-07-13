/**
 * Used to display data from the DataModel class in a tabular view.
 *
 * Example column descriptor.
 *
 * {
 *      name: 'test_column',      // The name of the column must be unique to the table.
 *      key: 'test_column',      // The key used to lookup the value.
 *      label: 'Test Column,
 *      cellRenderer: null, // Use default.  Should be a callable(column, row, dataTable)
 *      renderer: null, // Renders the column itself in the head. null use default. Should be a callable(column, dataTable)
 *      width: 200, // Renders as 200px
 *
 *      resizeable: true, // The column is resizeable.
 *      maxWidth: 50,   // The minimum width is 50px
 *      minWidth: 500, // The maximum width is 500px
 *
 *      orderable: true // The column can be clicked on to set toggle ordering on that column.
 *
 *      id: null,           // id to add to the column
 *      classes: '',       // class string to the column.
 *      cellClasses: '',  // class string to add to every cell.
 * }
 */
import $ from 'jquery';
import ObjectEvents from "../common/ObjectEvents";
import DataTableHeader from './DataTableHeader';
import {inlineDataTableHeaderTemplate} from './DataTableHeader';


function dataTableTemplate() {
    return `
        <table class="data-table-view">
            <tbody></tbody>
        </table>
    `;
}


/**
 * Events
 *  col-change - The columns have changed.
 *  col-resize - The column widths have changed.
 *  refresh - The table ui is refreshing.
 */
export default class DataTableView extends ObjectEvents {
    constructor(data=null, columns=null, header=true, pk=null) {
        super();
        this.registry = {columns:{}};
        this.columns = [];
        this.data = data;
        this.$element = $(dataTableTemplate());
        this.pk = pk;
        this.$tbody = this.$element.find('tbody');
        this._render = this.render.bind(this);

        if(header) {
            this.header = new DataTableHeader(this, null, null, inlineDataTableHeaderTemplate);
            this.$element.prepend(this.header.$element);
        }

        if(columns) {
            this.setVisibleColumns(columns);
        }

        this.data.on('data-change', this._render);
    }

    registerColumn(...columns) {
        for(let column of columns) {
            this.registry.columns[column.name] = column;
        }
    }

    render() {
        if(this._queueId) return;

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;

            this.$tbody.children("td, th").each((x, element) => {
                const column = $(element).data('column');

                // Call destroy function of all current columns.
                if(column && column.destroy) {
                    column.destroy();
                }
            });

            this.$tbody.empty();

            let width = 0;

            for(let column of this.columns) {
                width += column.width;
            }

            this.$element.css('width', width);

            for(let row of this.data) {
                let $tr = $("<tr>");

                if(this.pk) {
                    let pk;

                    if(typeof this.pk === 'function') {
                        pk = this.pk(row);
                    } else {
                        pk = row[this.pk];
                    }

                    $tr.attr('data-pk', pk);
                }

                for(let column of this.columns) {
                    let $td = this.cellRenderer(column, row);
                    $td.attr('data-name', column.name);
                    $tr.append($td);
                }

                this.$tbody.append($tr);
            }

            this.trigger('render', this);

            for(let column of this.columns) {
                if(column.init) {
                    column.init(this);
                }
            }
        });

        this.trigger('refresh', this);
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    cellRenderer(column, row) {
        let $td;

        if(column.cellRenderer) {
            $td = column.cellRenderer(column, row, this);
        } else {
            $td = $('<td>');
            $td.html(row[column.key]);
        }

        if(typeof column.width === 'number') {
            $td.css("width", column.width);
        }

        if(column.cellClasses) {
            $td.addClass(column.cellClasses);
        }

        $td.data({
            column: column
        });

        return $td;
    }

    setVisibleColumns(columns) {
        let _columns = [];

        for(let column of columns) {
            if(typeof column === 'string') {
                _columns.push(this.registry.columns[column]);
            } else {
                _columns.push(column);
            }
        }

        this.columns = _columns;
        this.trigger('col-change', this);
        this.render();
    }
}