import $ from 'jquery';
import {firstValue, parseBoolean, parseBooleanOrNumber, parseBooleanString, parseInteger} from '../utility';


const PREFIX = 'menus.',
    CONTROLLER = `${PREFIX}menu`;


const SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};
SELECTORS.all = `${SELECTORS.menu}, ${SELECTORS.item}, ${SELECTORS.dropdown}`;
SELECTORS.menuitem = `${SELECTORS.item}, ${SELECTORS.dropdown}`;


const CLASSNAMES = {
    open: 'open',
    active: 'active',
    disabled: 'disabled'
};


const EVENTS = {
    select: `${PREFIX}select`,
    activate: `${PREFIX}activate`,
    deactivate: `${PREFIX}deactivate`,
    open: `${PREFIX}open`,
    close: `${PREFIX}close`
};


function menuTemplate() {
    return `<div class='menu' data-role='menu'>`;
}


/**
 * A grouping of items that act in sync together.
 */
export default class Menu {
    constructor({target=menuTemplate, timeout=1000, closeOnBlur=true, closeOnSelect=true}) {
        this.timeout = timeout;
        this.closeOnBlur = closeOnBlur;
        this.closeOnSelect = closeOnSelect;

        this._onMouseOver = this.onMouseOver.bind(this);
        this._onMouseOut = this.onMouseOut.bind(this);
        this._onClick = this.onClick.bind(this);
        this._onSelect = this.onSelect.bind(this);
        this._onDocumentClick = this.onDocumentClick.bind(this);

        if(typeof target === 'function') {
            this.setElement(target(this));
        } else {
            this.setElement(target);
        }
    }

    setElement(element) {
        if(this.$element) {
            this.destroy();
        }

        this.$element = $(element);
        this.$element.data(CONTROLLER, this);
        this.$element.on('click', this._onClick);
        this.$element.on('mouseover', this._onMouseOver);
        this.$element.on('mouseout', this._onMouseOut);
        this.$element.on(EVENTS.select, this._onSelect);
    }

    destroy() {
        this.$element.off('click', this._onClick);
        this.$element.off('mouseover', this._onMouseOver);
        this.$element.off('mouseout', this._onMouseOut);
        this.$element.off(EVENTS.select, this._onSelect);

        if(this.$doc) {
            this.$doc.off('click', this._onDocumentClick);
            this.$doc = null;
        }

        this.$element.data(CONTROLLER, null);
        this.$element = null;
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    activate(node, delay=false) {
        node = $(node, this.$element);

        const activate = () => {
            const parent = this.getParentNode(node),
                type = this.getNodeType(node);

            // Clear _activateTimer reference.
            node.data('_activateTimer', null);

            // If parent exists activate it if it is not.
            if(parent.length && !this.isActive(parent)) {
                this.activate(parent);
            }

            // Add class and trigger events.
            node.addClass(CLASSNAMES.active);
            node.trigger(EVENTS.activate, this);

            // Clear other active items if multiple is not true.
            if(parent.length) {
                let multiple = parseBoolean(parent.data("multiple"), false);

                if(!multiple) {
                    this.getActiveChildren(parent).not(node).each((x, item) => this.deactivate(item));
                }
            }

            // If it is a dropdown the menu should be shown.
            if(type === 'dropdown') {
                const submenu = this.getItemSubMenu(node),
                    menuDelay = parseInteger(submenu.data('delay'), false, 10);

                if(submenu.length) {
                    this.openMenu(submenu, menuDelay);
                }
            }

            // If activating the root node attach document click handler to document to watch
            // for clicks outside the root element.
            if(node.is(this.$element) && this.closeOnBlur && !this.$doc) {
                this.$doc = $(document);
                this.$doc.on('click', this._onDocumentClick);
            }
        };

        let activateTimer = node.data("_activateTimer");

        if(activateTimer) {
            clearTimeout("_activateTimer");
            node.data("_activateTimer", null);
        }

        if(typeof delay === 'number' && Number.isFinite(delay) && delay >= 0) {
            node.data('_activateTimer', setTimeout(activate, delay));
        } else {
            activate();
        }
    }

    deactivate(node) {
        node = $(node);
        const type = this.getNodeType(node);
        let activateTimer = node.data("_activateTimer");

        if(activateTimer) {
            clearTimeout(activateTimer);
            node.data("_activateTimer", null);
        }

        if(this.isActive(node)) {
            node.removeClass(CLASSNAMES.active);
            node.trigger(EVENTS.deactivate, this);

            if(node.is(this.$element) && this.$doc) {
                this.$doc.off('click', this._onDocumentClick);
                this.$doc = null;
            }

            this.getActiveChildren(node).each((x, child) => this.deactivate(child));

            if(type === 'dropdown') {
                this.closeMenu(this.getItemSubMenu(node));
            }
        }
    }

    openMenu(menu, delay=false) {
        menu = $(menu, this.$element);

        if(!this.isOpen(menu)) {
            const open = () => {
                menu.data("_openTimer", null);
                menu.addClass(CLASSNAMES.open);
                menu.trigger(EVENTS.open, this);
            };

            let openTimer = menu.data("_openTimer");

            if(openTimer) {
                clearTimeout("_openTimer");
                menu.data("_openTimer", null);
            }

            if(typeof delay === 'number' && delay >= 0 && Number.isFinite(delay)) {
                openTimer = setTimeout(open, delay);
                menu.data("_openTimer", openTimer);
            } else {
                open();
            }
        }
    }

    closeMenu(menu) {
        menu = $(menu, this.$element);
        let openTimer = menu.data("_openTimer");

        if(openTimer) {
            clearTimeout(openTimer);
            menu.data("_openTimer", null);
        }

        if(this.isOpen(menu)) {
            menu.removeClass(CLASSNAMES.open);
            menu.trigger(EVENTS.close, this);
        }
    }

    select(node) {
        return $(node, this.$element).trigger(EVENTS.select, this);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Node Transversing

    getChildren(node) {
        const type = this.getNodeType(node);

        if(type === 'dropdown') {
            return this.getItemSubMenu(node);
        } else if(type === 'menu') {
            return this.getChildMenuItems(node);
        }
    }

    getChildMenuItems(node) {
        node = $(node, this.$element);
        let children = node.find(SELECTORS.menuitem);

        return children.filter((x, item) => this.getParentNode(item).is(node));
    }

    getChildMenus(node) {
        node = $(node, this.$element);
        const type = this.getNodeType(node);
        let children = node.find(SELECTORS.menu);

        if(type === 'dropdown') {
            return children.filter((x, item) => this.getParentNode(item).is(node));
        } else if(type === 'menu') {
            return children.filter((x, item) => this.getParentNode(item).is(node));
        } else {
            return $();
        }
    }

    getItemSubMenu(item) {
        return $(item, this.$element).children(SELECTORS.menu).eq(0);
    }

    getParentNode(node, type='all') {
        return $(node, this.$element).parent().closest(SELECTORS[type], this.$element);
    }

    getClosestNode(node, type='all') {
        const selector = SELECTORS[type];
        node = $(node, this.$element);
        return node.closest(selector, this.$element);
    }

    getActiveChildren(node) {
        node = $(node, this.$element);
        return node.find(SELECTORS.all).filter((x, child) => this.getParentNode(child).is(node) && $(child).hasClass(CLASSNAMES.active));
    }

    //------------------------------------------------------------------------------------------------------------------
    // State testing

    isActive(node) {
        return $(node, this.$element).hasClass(CLASSNAMES.active);
    }

    isOpen(node) {
        return $(node, this.$element).hasClass(CLASSNAMES.open);
    }

    isDisabled(node) {
        return !!$(node).closest(`.${CLASSNAMES.disabled}`, this.$element).length;
    }

    getNodeType(node) {
        node = $(node, this.$element);

        if(!node.length) {
            return null;
        } else if(node.is(SELECTORS.menu)) {
            return 'menu';
        } else if(node.is(SELECTORS.dropdown)) {
            return 'dropdown';
        } else if(node.is(SELECTORS.item)) {
            return 'item';
        }
    }

    isMenuItem(node) {
        const type = this.getNodeType(node);
        return type === 'dropdown' || type === 'item';
    }

    isDropDown(node) {
        return this.getNodeType(node) === 'dropdown';
    }

    isMenu(node) {
        return this.getNodeType(node) === 'menu';
    }

    //------------------------------------------------------------------------------------------------------------------
    // Events

    onClick(event) {
        const $target = this.getClosestNode(event.target);

        if(this.isMenuItem($target)) {
            return this._onClickMenuItem(event);
        } else if(this.isMenu($target)) {
            return this._onClickMenu(event);
        }
    }

    onMouseOver(event) {
        let $target = this.getClosestNode(event.target);

        if(this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }

        if($target[0].contains(event.relatedTarget)) return;

        if(this.isMenuItem($target)) {
            return this._onMouseOverMenuItem(event);
        } else if(this.isMenu($target)) {
            return this._onMouseOverMenu(event);
        }
    }

    onMouseOut(event) {
        // If the mouse leaves the root item and timeout is set start the timer.
        if(!this._timer && typeof this.timeout === 'number' && this.timeout >= 0 && !this.$element[0].contains(event.relatedTarget)) {
            this._timer = setTimeout(() => {
                this._timer = null;
                this.deactivate(this.$element);
            }, this.timeout);
        }

        const $target = this.getClosestNode(event.target);

        if($target[0].contains(event.relatedTarget)) return;

        if(this.isMenuItem($target)) {
            return this._onMouseOutMenuItem(event);
        } else if(this.isMenu($target)) {
            return this._onMouseOutMenu(event);
        }
    }

    onDocumentClick(event) {
        if(!this.$element[0].contains(event.target)) {
            this.$doc.off('click', this._onDocumentClick);
            this.$doc = null;
            this.deactivate(this.$element);
        } else if(!this.isActive(this.$element)) {
            this.$doc = null;
            this.deactivate(this.$element);
        }
    }

    onSelect() {
        if(this.isActive(this.$element) && this.closeOnSelect) {
            this.deactivate(this.$element);
        }
    }

    _onClickMenuItem(event) {
        const $target = this.getClosestNode(event.target),
            type = this.getNodeType($target),
            isActive = this.isActive($target),
            $parent = this.getParentNode($target, 'menu');

        let toggle = parseBooleanString(firstValue([
            $target.data('toggle'),
            $parent.data('toggleItems'),
            'both'
        ]));

        if(type === 'item') {
            this.select($target);
        } else {
            if(!isActive && (toggle === 'both' || toggle === true || toggle === 'on')) {
                this.activate($target);
            } else if(isActive && (toggle === 'off' || toggle === 'both' || toggle === true)) {
                this.deactivate($target);
            }
        }
    }

    _onMouseOverMenuItem(event) {
        const $target = this.getClosestNode(event.target),
            $parent = this.getParentNode($target, 'menu'),
            parentIsActive = this.isActive($parent);

        let autoActivate = firstValue(
                [
                    $target.data('autoActivate'),
                    $parent.data('autoActivate'),
                    0
                ]
            ),
            delay = firstValue(
                [
                    parseInteger($target.data('delay'), null, 10),
                    false
                ]
            );

        if(autoActivate === 'true' || autoActivate === 'false') {
            autoActivate = autoActivate === 'true';
        } else {
            autoActivate = parseInteger(autoActivate, autoActivate, 10);
        }

        // If the item is already active or it doesn't activate on this
        // event return.
        if(this.isActive($target)) return;

        let activate;

        if(!parentIsActive) {
            activate = autoActivate;
        } else {
            activate = parseBooleanOrNumber(delay, false, 10);

            if(typeof activate === 'boolean') {
                activate = !activate;
            }
        }

        if(typeof activate === 'number' && activate >= 0) {
            let cancel,
                timer;

            timer = setTimeout(() => {
                $target.off('mouseout', cancel);
                this.activate($target);
            }, activate);

            cancel = (event) => {
                if(!event.target.contains(event.relatedTarget)) {
                    clearTimeout(timer);
                    $target.off('mouseout', cancel);
                }
            };

            $target.on('mouseout', cancel);
        } else if(activate === true) {
            this.activate($target);
        }
    }

    _onMouseOutMenuItem(event) {
        const $target = this.getClosestNode(event.target);

        if(!this.isDropDown($target)) {
            this.deactivate($target);
        }
    }

    _onClickMenu(event) {
        const $target = this.getClosestNode(event.target),
            toggle = parseBooleanString($target.data('menuToggle'));

        if(this.isActive($target)) {
            if(toggle === 'off' || toggle === 'both' || toggle === true) {
                this.deactivate($target);
            }
        } else {
            if(toggle === 'on' || toggle === 'both' || toggle === true) {
                this.activate($target);
            }
        }
    }

    _onMouseOverMenu(event) {

    }

    _onMouseOutMenu(event) {

    }
}
