import Paginator from '../../components/Paginator';
import {DummyPagedData} from '../../common/Data';


export default class PaginatorTest {
    constructor(context) {
        this.service = new DummyPagedData(500, 2222, 1000);
        this.paginator = new Paginator(this.service);
    }

    load() {
        this.paginator.appendTo('#paginator-container');
        this.service.refresh();
    }
}