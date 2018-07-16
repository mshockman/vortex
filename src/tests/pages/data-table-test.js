import {DataModel} from "../../common/Data";
import DataTableView from '../../datatable/DataTableView';
import DataTableHeader from '../../datatable/DataTableHeader';
import Paginator from "../../components/Paginator";
import {randomChoice} from "../../utility";
import Viewport from '../../components/Viewport';
import PageLengthChooser from "../../datatable/PageLengthChooser";
import DataPositionView from "../../datatable/DataPositionView";
import RowCheckboxColumn from "../../datatable/RowCheckboxColumn";
import ColumnResize from "../../datatable/ColumnResize";
import ColumnPicker from '../../datatable/ColumnPicker';
import 'jquery';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/sortable';
import Column from "../../datatable/Column";


const names = [
    'Matthew Shockman',
    'Tyler Shockman',
    'Brianna Shockman',
    'Robert Puffe',
    'Adrew Ryan',
    'Chris Sandvik',
    'Tonya Shockman',
    'Patrick Shockman',
    'Anothony Holen',
    'Daniel Smith',
    'Tony Hawks'
];


const colors = [
    'Red',
    'Green',
    'Blue',
    'Orange',
    'Pink',
    'Camo'
];


export default class DataTableTest {
    constructor() {
        this.model = this.buildDataModel(2222);
        this.table = new DataTableView(this.model, null, false, 'id');
        this.paginator = new Paginator(this.model);
        this.header = new DataTableHeader(this.table, null, 'data-table-weld br-1');
        this.pageLengthChooser = new PageLengthChooser(this.model);
        this.dataPositionView = new DataPositionView(this.model);
        this.columnResizer = new ColumnResize(this.header, "#data-view-resize-helper");

        this.table.registerColumn(
            new RowCheckboxColumn('checkbox'),

            new Column(
                {
                    'name': 'name',
                    'key': 'name',
                    'label': 'Name',
                    'width': 400,
                    'classes': 'column-name',
                    'cellClasses': 'cell-name',
                    'resizeable': true
                }
            ),

            new Column(
                {
                    'name': 'random',
                    'key': 'random',
                    'label': 'Random',
                    'width': 400,
                    'classes': 'column-random',
                    'cellClasses': 'cell-random',
                    'resizeable': true
                }
            ),

            new Column(
                {
                    'name': 'price',
                    'key': 'price',
                    'label': 'Price',
                    'width': 400,
                    'classes': 'column-price',
                    'cellClasses': 'cell-price',
                    'resizeable': true
                }
            ),

            new Column(
                {
                    'name': 'full_name',
                    'key': 'full_name',
                    'label': 'Full Name',
                    'width': 400,
                    'classes': 'column-full-name',
                    'cellClasses': 'cell-full-name',
                    'resizeable': true
                }
            ),

            new Column(
                {
                    'name': 'color',
                    'key': 'color',
                    'label': 'Rope Color',
                    'width': 400,
                    'classes': 'column-color',
                    'cellClasses': 'cell-color',
                    'resizeable': true
                }
            )
        );

        this.columnPicker = new ColumnPicker([

        ], this.table);
    }

    buildDataModel(size) {
        let r = [];

        for(let i = 0; i < size; i++) {
            r.push({
                id: i,
                name: `Test Item ${i}`,
                random: Math.round(Math.random()*1000),
                price: '$' + (Math.random()*1000).toFixed(2),
                full_name: randomChoice(names),
                color: randomChoice(colors)
            });
        }

        return new DataModel({rows:r}, 1, 100);
    }

    load() {
        this.table.setVisibleColumns(['checkbox', 'name', 'random', 'price', 'full_name', 'color']);
        this.table.appendTo("#dataview-container");
        this.paginator.appendTo('#paginator-container');
        this.header.appendTo("#header-container");
        this.viewport = new Viewport("#dataview-container");
        this.viewport.mirror("#header-viewport", 100);
        this.pageLengthChooser.appendTo("#paginator-container");
        this.dataPositionView.appendTo("#data-position-container");
        this.columnPicker.appendTo(document.body);
        this.columnPicker.modal.open();
        this.table.render();
    }
}
