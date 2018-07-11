import {DataModel} from "../../common/Data";
import DataTableView from '../../datatable/DataTableView';
import DataTableHeader from '../../datatable/DataTableHeader';
import Paginator from "../../components/Paginator";


export default class DataTableTest {
    constructor() {
        this.model = this.buildDataModel(2222);
        this.table = new DataTableView(this.model, null, false, 'id');
        this.paginator = new Paginator(this.model);

        this.table.registerColumn(
            {
                'name': 'name',
                'label': 'Name',
                'width': 200,
                'classes': 'column-name',
                'cellClasses': 'cell-name'
            },

            {
                'name': 'random',
                'label': 'Random',
                'width': 200,
                'classes': 'column-random',
                'cellClasses': 'cell-random'
            },

            {
                'name': 'price',
                'label': 'Price',
                'width': 200,
                'classes': 'column-price',
                'cellClasses': 'cell-price'
            }
        );
    }

    buildDataModel(size) {
        let r = [];

        for(let i = 0; i < size; i++) {
            r.push({
                id: i,
                name: `Test Item ${i}`,
                random: Math.round(Math.random()*1000),
                price: '$' + (Math.random()*1000).toFixed(2)
            });
        }

        return new DataModel({rows:r}, 1, 100);
    }

    load() {
        this.table.setVisibleColumns(['name', 'random', 'price']);
        this.table.appendTo("#dataview-container");
        this.paginator.appendTo('#paginator-container');
        this.table.render();
    }
}
