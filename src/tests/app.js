import Application from '../apps';


window.app = new Application({
   'paginator-test': () => import('./pages/paginator-test.js')
});
