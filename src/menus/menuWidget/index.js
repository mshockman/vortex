import Loader from '../../loader';
import Menu from './Menu';
import MenuNode from './MenuNode';
import MenuItem from './MenuItem';


Loader.register('menu', (element, context) => {
    const m = new Menu(element, context);
    m.init();
    window.testMenu = m;
    return m;
});


window.Menu = Menu;
window.MenuItem = MenuItem;
window.MenuNode = MenuNode;