import Loader from '../../loader';
import MenuView from './MenuView';
import Menu from './Menu';
import MenuItem from './MenuItem';


Loader.register('menu', (element) => {
    return new MenuView(element);
});


Loader.register('dropdown', (element) => {
    const dropdown = new MenuView(element);
    let config = {
        timeout: -1,
        closeOnSelect: true,
        activateEvent: 'click',
        // toggle: 'click'
    };

    config = Object.assign(config, dropdown.$element.data());
    dropdown.$element.data(config);

    return dropdown;
});


window.MenuView = MenuView;
window.Menu = Menu;
window.MenuItem = MenuItem;
