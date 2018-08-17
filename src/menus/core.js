import $ from 'jquery';
import {parseInteger} from "../utility";


export const PREFIX = 'menus-';


export const SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};


SELECTORS.all = `${SELECTORS.menu}, ${SELECTORS.item}, ${SELECTORS.dropdown}`;
SELECTORS.menuitem = `${SELECTORS.item}, ${SELECTORS.dropdown}`;


export const events = {
    activate: `${PREFIX}activate`,
    deactivate: `${PREFIX}deactivate`,
    open: `${PREFIX}open`,
    close: `${PREFIX}close`,
    select: `${PREFIX}select`
};


export function getRoles(element) {
    let $element = $(element);
    return ($element.attr("data-role") || "").split(/\s+/);
}


export function hasRole(element, role) {
    return getRoles(element).indexOf(role) !== -1;
}


export function addRoles(element, ...roles) {
    let $element = $(element),
        r = getRoles($element);

    for(let role of roles) {
        if(r.indexOf(role) === -1) {
            r.push(role);
        }
    }

    r = r.join(" ").trim();
    $element.attr('data-role', r);
    return r;
}


// noinspection JSUnusedGlobalSymbols
export function removeRoles(element, ...roles) {
    let $element = $(element),
        current = getRoles($element),
        r = [];

    for(let role of current) {
        if(roles.indexOf(role) === -1) {
            r.push(role);
        }
    }

    r = r.join(" ").trim();
    $element.attr('data-role', r);
    return r;
}


export function getAttributeProperty(target, name, type, defaultValue) {
    let data = [target.$element.data()],
        keys = [name];

    for(let i = 0, l = data.length; i < l; i++) {
        let datum = data[i],
            key = keys[i],
            value = datum[key];

        if(value !== undefined) {
            if (type) {
                try {
                    return type(value);
                } catch (e) {
                    if (!(e instanceof TypeError)) {
                        throw e;
                    }
                }
            } else {
                return value;
            }
        }
    }

    return defaultValue;
}


export function getMenuItemProperty(target, propName, parentPropName, type, defaultValue) {
    let data = [
        target.$element.data(),
        target.parent
    ];

    let keys = [propName, parentPropName];

    for(let i = 0, l = data.length; i < l; i++) {
        let key = keys[i],
            datum = data[i];

        if(!key || !datum) continue;

        let value = datum[key];

        if(value !== undefined) {
            try {
                if(type) {
                    return type(value);
                } else {
                    return value;
                }
            } catch (e) {
                if(!(e instanceof TypeError)) {
                    throw e;
                }
            }
        }
    }

    return defaultValue;
}


export function menuProperty(type, defaultValue) {
    return function(target, name, descriptor) {
        return {
            descriptor,

            get() {
                return getAttributeProperty(this, name, type, defaultValue);
            },

            set(value) {
                this.$element.data(name, value);
            }
        }
    }
}


export function menuItemProperty(menuProperty, type, defaultValue) {
    return function(target, name, descriptor) {
        return {
            descriptor,

            get() {
                return getMenuItemProperty(this, name, menuProperty, type, defaultValue);
            },

            set(value) {
                this.$element.data(name, value);
            }
        }
    }
}


export function boundProperty(type, defaultValue) {
    return function(target, name, descriptor) {
        return {
            descriptor,

            get() {
                return getAttributeProperty(this, name, type, defaultValue);
            },

            set(value) {
                this.$element.data(name, value);
            }
        }
    }
}


export function toggleType(value) {
    if(value === 'false' || value === 'true') {
        value = value === 'true';
    }

    if(typeof value === 'boolean') {
        return "";
    } else if(value === 'click' || value === 'dblclick') {
        return value;
    } else {
        throw new TypeError("Invalid value.");
    }
}


export function autoActivateType(value) {
    if(typeof value === 'string') {
        value = value.toLowerCase();

        if(value === 'true') {
            return 0;
        } else if(value === 'false') {
            return -1;
        } else {
            value = parseInteger(value, 10);

            if(!Number.isNaN(value)) {
                return value;
            }
        }
    } else if(typeof value === 'boolean') {
        return value ? 0 : -1;
    } else if(typeof value === 'number' && !Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Invalid value.");
}