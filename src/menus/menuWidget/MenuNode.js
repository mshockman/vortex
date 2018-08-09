import $ from 'jquery';

import ObjectEvents from "../../common/ObjectEvents";
import Menu from './Menu';


export const SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};


SELECTORS.all = `${SELECTORS.menu}, ${SELECTORS.item}, ${SELECTORS.dropdown}`;
SELECTORS.menuitem = `${SELECTORS.item}, ${SELECTORS.dropdown}`;


export function getRoles(element) {
    let roles = $(element).attr('data-role');

    if(roles) {
        return roles.split(/\s+/);
    } else {
        return [];
    }
}


export function hasRole(element, role) {
    return getRoles(element).indexOf(role) !== -1;
}


export function addRoles(element, ...roles) {
    let current = getRoles(element);

    for(let role of roles) {
        role = role.split(/\s+/);

        for(let r of role) {
            if(current.indexOf(r) === -1) {
                current.push(r);
            }
        }
    }

    $(element).attr('data-role', current.join(" "));
}


export function removeRoles(element, ...roles) {
    let current = this.getRoles();

    for(let role of roles) {
        role = role.split(/\s+/);

        for(let r of role) {
            if(current.indexOf(r) === -1) {
                current.push(r);
            }
        }
    }

    this.$element.attr('data-role', current.join(" "));
}


export function getNodeType(element) {
    const roles = getRoles(element);

    if(roles.indexOf('menu') !== -1) {
        return 'menu';
    } else if(roles.indexOf('item') !== -1) {
        return 'item';
    } else if(roles.indexOf('dropdown') !== -1) {
        return 'dropdown';
    }
}


export function getClosestNode(target) {
    let r = $(target).closest(SELECTORS.all, this.getRoot().$element);

    if(r.length) {
        return this.getNodeInstance(r);
    }
}


export function getClosestItem(target) {

}


export function getClosestMenu(target) {

}


export function getRoot(target) {

}


export default class MenuNode extends ObjectEvents {
    constructor(selector) {
        super();
        this.$element = $(selector);
    }

    init() {
        this._handleOnClickEvent = this.handleOnClickEvent.bind(this);
        this._handleOnMouseOverEvent = this.handleOnMouseOverEvent.bind(this);
        this._handleOnMouseOutEvent = this.handleOnMouseOutEvent.bind(this);
        this._handleOnDocumentClickEvent = this.handleOnDocumentClickEvent.bind(this);

        this.$element.on('click', this._handleOnClickEvent);
        this.$element.on('mouseover', this._handleOnMouseOverEvent);
        this.$element.on('mouseout', this._handleOnMouseOutEvent);
        this.$element.data('menuController', this);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Global Event handlers.

    handleOnClickEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target.onClick) {
            target.onClick(event);
        }
    }

    handleOnMouseOverEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target.$element[0].contains(event.relatedTarget)) {
            return;
        }

        if(target.onMouseOver) {
            target.onMouseOver(event);
        }
    }

    handleOnMouseOutEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target.$element[0].contains(event.relatedTarget)) {
            return;
        }

        if(target.onMouseOut) {
            target.onMouseOut(event);
        }
    }

    handleOnDocumentClickEvent(event) {

    }

    //------------------------------------------------------------------------------------------------------------------
    // Private Functions

    _getClosestNode(target) {
        let r = $(target).closest(SELECTORS.all, this._getRootElement(target));

        if(r.length) {
            return this._getNodeInstance(r);
        }
    }

    _getClosestMenu(target) {
        let r = $(target).closest(SELECTORS.menu, this._getRootElement(target));

        if(r.length) {
            return this.MenuClass.getInstance(r);
        }
    }

    _getClosestItem(target) {
        let r = $(target).closest(SELECTORS.menuitem, this._getRootElement(target));

        if(r.length) {
            return this.MenuItemClass.getInstance(r);
        }
    }

    _getRootElement(target) {
        let o = this.$element;

        while(o.length) {
            let menuController = o.data('menuController');

            if(menuController) {
                return menuController.$element;
            }

            o = o.parent();
        }
    }

    _getNodeInstance(node) {
        const type = getNodeType(node);

        if(type === 'menu') {
            return this.MenuClass.getInstance(node);
        } else if(type === 'dropdown' || type === 'item') {
            return this.MenuItemClass.getInstance(node);
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Navigation

    getParent() {
        let r = this.$element.parent().closest(SELECTORS.all, this.getRoot().$element);

        if(r.length) {
            return this._getNodeInstance(r);
        }
    }

    getParentMenu() {
        let r = this.$element.parent().closest(SELECTORS.menu, this.getRoot().$element);

        if(r.length) {
            return this.MenuClass.getInstance(r);
        }
    }

    getParentItem() {
        let r = this.$element.parent().closest(SELECTORS.menuitem, this.getRoot().$element);

        if(r.length) {
            return this.MenuItemClass.getInstance(r);
        }
    }

    getRoot() {
        let o = this.$element;

        while(o.length) {
            let menuController = o.data('menuController');

            if(menuController) {
                return menuController;
            }

            o = o.parent();
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties
}


MenuNode.SELECTORS = SELECTORS;
