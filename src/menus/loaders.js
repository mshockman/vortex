import Loader from '../loader';
import Menu from './Menu';
import {setDefaultValues} from '../utility';


Loader.register('menu', (target, config) => {
    config.target = target;
    return new Menu(config);
});


Loader.register('dropdown', (target, config) => {
    config.role = "dropdown";
    config.target = target;
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
