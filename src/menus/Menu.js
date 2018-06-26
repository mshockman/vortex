/**
 * Package for create menus.
 *
 * Menus are defined and controlled using their dom structure.  Attributes are stored on the individual nodes and are
 * accessed and retrieved using jQueries data method.  So you can use manual data-attribute html attributes in your code
 * or programmically assign attributes using the data method.
 *
 * All events are attached to the root element of the menu.  Any incoming events are delegated from their to the
 * necessary menu nodes if needed.
 *
 * The data-role attribute determines what kind of menu node an element is.  When looking for child and parent nodes
 * any element that isn't marked with a data-role attribute is ignored.  Their are three types of nodes in the menu.
 * Those nodes are:
 *
 * - menu;
 * - item;
 * - dropdown;
 *
 * A menu is a collection of dropdown items and items.  A dropdown will add another layer to the menu tree.  An item
 * is a selectable item and shouldn't have a submenu.
 *
 * There are three places where attributes can be set.  On the root element, on the menu elements or on the item elements.
 * Each of these nodes have different attributes that can be modified.  Some attributes are inherited from their parents
 * if they are not manually set on child element.  All attributes come with sensible defaults.
 *
 * Root attribute
 * - closeOnSelect
 * - closeOnBlur
 * - timeout
 *
 * Menu attributes
 * - openDelay {Number} Default 0
 *   Adds a delay after an item activates before it shows it's menu.
 * - multiple {boolean} Default false
 *   If true multiple items can be active at the same time for the menu.
 * - autoActivate {Number|boolean} Default true
 *   Controls if child items activate when the mouse moves over them when the menu is not active.  This is mostly used
 *   for root elements because most of the time menus are hidden when they are not active so child items cannot be hovered
 *   over.  If a number greater than or equal to 0 The item will activate after the given amount of time in milliseconds.
 *   If true if item will activate instantly.  If anything else the item will never activate on mouse over.
 *   This can be overidden by autoActivate at the item level.
 * - itemDelay {Number|boolean} Default 0
 *   Controls if child items activate when the mouse moves over them when the menu is already active.  If >= 0 the item
 *   will activate after the given amount of time.  If true if item will never activate.  This attribute can be overridden
 *   at the item level by setting the delay attribute.
 * - toggleItems {boolean|'on'|'off'|'both'}
 *   Controls how the menu's child items behave when clicked.  This can be overridden by the items toggle property.
 *   If true or 'both' the item will toggle on and off when clicked.  If 'on' the item will only toggle on.  If 'off'
 *   the item will only toggle off.  If false the item will never toggle on or off.  This is primarly used by dropdown
 *   items as items will be selected when clicked and turn off the menu if close on select is true.
 * - menuToggle
 *
 * Item attributes
 * - selectable
 * - autoActivate
 * - toggle
 */

import $ from 'jquery';
import {firstValue, parseBoolean, parseBooleanString, parseInteger} from '../utility';


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

        this.$element.data({
            timeout: timeout,
            closeOnBlur: closeOnBlur,
            closeOnSelect: closeOnSelect
        });
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

    // noinspection JSUnusedGlobalSymbols
    /**
     * Appends the menu to the selector.
     * @param selector
     * @return {*}
     */
    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    activate(node, delay=false) {
        node = $(node, this.$element);

        if(delay === true) {
            return;
        }

        const activate = () => {
            const parent = this.getParentNode(node),
                type = this.getNodeType(node);

            // Clear _activateTimer reference.
            node.data('_cancelActivationTimer', null);

            // If parent exists activate it if it is not.
            if(parent.length && !this.isActive(parent)) {
                this.activate(parent);
            }

            // Add class and trigger events.
            node.addClass(CLASSNAMES.active);
            node.trigger(EVENTS.activate, this);

            // Clear other active items if multiple is not true.
            if(parent.length && !this.getMultiple(parent)) {
                this.getActiveChildren(parent).not(node).each((x, item) => this.deactivate(item));
            }

            // If it is a dropdown the menu should be shown.
            if(type === 'dropdown') {
                const submenu = this.getItemSubMenu(node);

                if(submenu.length) {
                    this.openMenu(submenu, this.getMenuOpenDelay(submenu));
                }
            }

            // If activating the root node attach document click handler to document to watch
            // for clicks outside the root element.
            if(node.is(this.$element) && this.closeOnBlur && !this.$doc) {
                this.$doc = $(document);
                this.$doc.on('click', this._onDocumentClick);
            }
        };

        let activateTimer = node.data("_cancelActivationTimer");

        if(activateTimer) {
            activateTimer();
        }

        let cancel = null;

        let r = new Promise(resolve => {
            if(typeof delay === 'number' && Number.isFinite(delay) && delay >= 0) {
                let timer = setTimeout(() => {
                    activate();
                    resolve('activated');
                }, delay);

                cancel = () => {
                    if(timer) {
                        node.data('_cancelActivationTimer', null);
                        clearTimeout(timer);
                        timer = null;
                        resolve('canceled');
                    }
                };

                node.data('_cancelActivationTimer', cancel);
            } else {
                activate();
                resolve('activated');
            }
        });

        r.cancel = cancel;

        return r;
    }

    deactivate(node) {
        node = $(node);
        const type = this.getNodeType(node);
        let activateTimer = node.data("_cancelActivationTimer");

        if(activateTimer) {
            activateTimer();
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

            if(type === 'item' || type === 'dropdown') {
                const $parentMenu = this.getParentNode(node, 'menu');

                if(this.isActive($parentMenu) && !this.getActiveChildren($parentMenu).length) {
                    this.deactivate($parentMenu);
                }

            }
        }
    }

    openMenu(menu, delay=false) {
        menu = $(menu, this.$element);

        if(!this.isOpen(menu)) {
            const open = () => {
                menu.data("_cancelOpenTimer", null);
                menu.addClass(CLASSNAMES.open);
                menu.trigger(EVENTS.open, this);
            };

            let openTimer = menu.data("_cancelOpenTimer");

            if(openTimer) {
                openTimer();
            }

            let cancel = null;

            let r = new Promise(resolve => {
                if(typeof delay === 'number' && delay >= 0 && Number.isFinite(delay)) {
                    let timer = setTimeout(() => {
                        timer = null;
                        open();
                        resolve('opened');
                    }, delay);

                    cancel = () => {
                        if(timer) {
                            clearTimeout(timer);
                            timer = null;
                            resolve("canceled");
                        }
                    };

                    menu.data("_cancelOpenTimer", cancel);
                } else {
                    open();
                    resolve("opened");
                }
            });

            r.cancel = cancel;
            return r;
        }
    }

    closeMenu(menu) {
        menu = $(menu, this.$element);
        let openTimer = menu.data("_cancelOpenTimer");

        if(openTimer) {
            openTimer();
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

    // noinspection JSUnusedGlobalSymbols
    /**
     * Returns the child items for menu nodes and the submenu for dropdown nodes.
     * @param node
     * @return {*}
     */
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

    // noinspection JSUnusedGlobalSymbols
    /**
     * Returns the direct child menus for the node.
     * @param node
     * @return {*}
     */
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

    /**
     * Return the type of the given node.
     * @param node {{length, is}}
     * @return {null|'menu'|'dropdown'|'item'}
     */
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
        if(this.isDisabled(event.target)) return;

        const $target = this.getClosestNode(event.target);

        if(this.isMenuItem($target)) {
            return this._onClickMenuItem(event);
        } else if(this.isMenu($target)) {
            return this._onClickMenu(event);
        }
    }

    onMouseOver(event) {
        if(this.isDisabled(event.target)) return;

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
        if(this.isDisabled(event.target)) return;

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
            $parent = this.getParentNode($target, 'menu'),
            toggle = this.getItemToggle($parent, $target);

        if(type === 'item') {
            if(this.getSelectable($target)) {
                this.select($target);
            }
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
            $parent = this.getParentNode($target, 'menu');

        if(!this.isActive($target)) {
            let delay = this.getItemActivationDelay($parent, $target);
            let timer = this.activate($target, delay);

            if(timer && timer.cancel) {
                let cancel = (event) => {
                    if(!$target[0].contains(event.relatedTarget)) {
                        timer.cancel();
                    }
                };

                $target.on('mouseout', cancel);

                timer.then(() => {
                    $target.off('mouseout', cancel);
                });
            }
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

    //------------------------------------------------------------------------------------------------------------------
    // Getter functions

    getItemToggle(menu, item) {
        menu = $(menu);
        item = $(item);

        let toggle = firstValue([
            item.data('toggle'),
            menu.data('toggleItems'),
            'both'
        ]);

        if(toggle === 'true' || toggle === 'false') {
            return toggle === 'true';
        } else {
            return toggle;
        }
    }

    getMenuOpenDelay(menu) {
        menu = $(menu);
        let value = menu.data('openDelay');

        if(value === 'true' || value === 'false') {
            return value === 'true';
        } else if(typeof value === 'number') {
            return parseInteger(value, null, 10);
        } else {
            return value;
        }
    }

    getItemActivationDelay(menu, item) {
        menu = $(menu);
        item = $(item);

        let isParentActive = this.isActive(menu);

        if(!isParentActive) {
            let value = firstValue([
                item.data('autoActivate'),
                menu.data('autoActivate'),
                0
            ]);

            if(value === 'true' || value === 'false') {
                return value !== 'true';
            } else if(typeof value === 'string') {
                return parseInt(value, 10);
            } else if(typeof value === 'boolean') {
                return !value;
            } else {
                return value;
            }
        } else {
            let delay = firstValue(
                [
                    item.data('delay'),
                    menu.data('itemDelay'),
                    false
                ]
            );

            if(delay === 'true' || delay === 'false') {
                return delay === 'true';
            } else if(typeof delay === 'string') {
                return parseInt(delay, 10);
            } else {
                return delay;
            }
        }
    }

    getMultiple(menu) {
        return parseBoolean($(menu).data("multiple"), false);
    }

    getSelectable(item) {
        let value = $(item).data("selectable");

        if(value === undefined || value === null) {
            return true;
        } else if(value === 'true' || value === 'false') {
            return value === 'true';
        } else {
            return value;
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties

    get timeout() {
        let value = this.$element.data("timeout");

        if(typeof value === 'string') {
            value = parseInt(value, 10);

            if(!Number.isNaN(value) && value >= 0) {
                return value;
            }
        } else if(typeof value === 'number') {
            if(value >= 0 && !Number.isNaN(value)) {
                return value;
            }
        }
    }

    get closeOnBlur() {
        let value = this.$element.data("closeOnBlur");

        if(value === 'true' || value === 'false') {
            return value === 'true';
        } else {
            return value;
        }
    }

    get closeOnSelect() {
        let value = this.$element.data("closeOnSelect");

        if(value === 'true' || value === 'false') {
            return value === 'true';
        } else {
            return value;
        }
    }
}
