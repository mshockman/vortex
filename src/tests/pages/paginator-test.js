import Paginator from '../../components/Paginator';
import {DataModel} from '../../common/Data';


export default class PaginatorTest {
    constructor(context) {
        this.model = this.buildDataModel(5221);
        this.paginator = new Paginator(this.model);
    }

    buildDataModel(size) {
        let r = [];

        for(let i = 0; i < size; i++) {
            r.push({
                id: i,
                name: `Test Item ${i}`,
                random: Math.round(Math.random()*1000),
                price: '$' + (Math.random()*1000).toFixed(2)
            })
        }

        return new DataModel({rows:r}, 1, 100);
    }

    load() {
        this.paginator.appendTo('#paginator-container');
        this.service.refresh();
    }
}