import Loader from '../../loader';
import MenuView from './MenuView';
import Menu from './Menu';
import MenuItem from './MenuItem';
import DropDown from './DropDown';


Loader.register('menu', (element) => {
    return new MenuView(element);
});


Loader.register('dropdown', (element) => {
    return new DropDown(element);
});


window.MenuView = MenuView;
window.Menu = Menu;
window.MenuItem = MenuItem;
