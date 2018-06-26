import Loader from '../loader';
import Menu from './Menu';
import {setDefaultValues} from '../utility';


Loader.register('menu', (config) => {
    return new Menu(config);
});


Loader.register('dropdown', (config) => {
    config.role = "dropdown";
    let r = new Menu(config);

    setDefaultValues(r.$element.data(), {
        timeout: false,
        closeOnBlur: true,
        closeOnSelect: true,
        toggle: true,
        autoActivate: false
    });

    return r;
});
