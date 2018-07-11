import {Application} from '../index';


window.app = new Application({
    'paginator-test': () => import('./pages/paginator-test.js'),
    'data-table-test': () => import('./pages/data-table-test.js'),
});
