import Loader from '../../loader';
import MenuView from './MenuView';
import Menu from './Menu';
import MenuItem from './MenuItem';


Loader.register('menu', (element, context) => {
    const m = new MenuView(element);
    window.testMenu = m;
    return m;
});


window.MenuView = MenuView;
window.Menu = Menu;
window.MenuItem = MenuItem;
