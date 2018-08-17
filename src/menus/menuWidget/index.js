import Loader from '../../loader';
import MenuView from './MenuView';
import Menu from './Menu';
import MenuItem from './MenuItem';
import DropDown from './DropDown';
import Selectable from './Selectable';
import {buildFromSelect} from "./Selectable";


Loader.register('menu', (element) => {
    return new MenuView(element);
});


Loader.register('dropdown', (element) => {
    return new DropDown(element);
});


Loader.register('selectable', (element) => {
    return new Selectable(element);
});


Loader.register('select', (element) => {
    return buildFromSelect(element);
});


window.MenuView = MenuView;
window.Menu = Menu;
window.MenuItem = MenuItem;
