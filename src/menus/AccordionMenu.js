import MenuView from "./MenuView";
import Menu from "./Menu";
import {autoActivateType, menuProperty, toggleType} from "./core";
import {choiceType, parseBooleanValue, parseIntegerValue} from "../common/types";


export class AccordionSubMenu extends Menu {
    @menuProperty(toggleType, 'click') toggle;

    @menuProperty(autoActivateType, -1) autoActivateItems;

    @menuProperty(choiceType('click', 'dblclick', 'mouseover'), 'click') activateEvent;

    @menuProperty(parseBooleanValue, true) multiple;
}


export default class AccordionMenu extends MenuView {
    @menuProperty(parseBooleanValue, false) closeOnSelect;

    @menuProperty(parseBooleanValue, false) closeOnBlur;
}


AccordionMenu.prototype.MenuClass = AccordionSubMenu;
