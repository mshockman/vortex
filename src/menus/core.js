export const PREFIX = 'menus.',
    CONTROLLER = `${PREFIX}menu`;


export const SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};


SELECTORS.all = `${SELECTORS.menu}, ${SELECTORS.item}, ${SELECTORS.dropdown}`;
SELECTORS.menuitem = `${SELECTORS.item}, ${SELECTORS.dropdown}`;


export const CLASSNAMES = {
    open: 'open',
    active: 'active',
    disabled: 'disabled'
};


export const EVENTS = {
    select: `${PREFIX}select`,
    activate: `${PREFIX}activate`,
    deactivate: `${PREFIX}deactivate`,
    open: `${PREFIX}open`,
    close: `${PREFIX}close`
};


export function addRole(element, ...roles) {
    element = $(element);
    let r = getRoles(element);

    for(let item of roles) {
        let i = r.indexOf(item);

        if(i === -1) {
            r.push(item);
        }
    }

    r = r.join(' ');
    element.attr("data-role", r);
    return r;
}


export function removeRole(element, ...roles) {
    element = $(element);
    let r = getRoles(element);

    for(let item of roles) {
        let i = r.indexOf(item);

        if(i !== -1) {
            r.splice(i, 1);
        }
    }

    r = r.join(' ');
    element.attr("data-role", r);
    return r;
}


export function hasRoles(element, ...roles) {
    element = $(element);
    let r = getRoles(element);

    for(let item of roles) {
        let i = r.indexOf(item);

        if(i === -1) {
            return false;
        }
    }

    return true;
}


export function getRoles(element) {
    element = $(element);
    let r = element.attr("data-role");

    if(!r) {
        r = [];
    } else {
        r = r.split('/s+/');
    }

    return r;
}
