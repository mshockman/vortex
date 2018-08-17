import Loader from '../loader';
import MenuView from './MenuView';
import DropDown from './DropDown';
import Selectable from './Selectable';
import {buildFromSelect} from "./Selectable";
import AccordionMenu from './AccordionMenu';


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


Loader.register('accordion-menu', (element) => {
    return new AccordionMenu(element);
});
