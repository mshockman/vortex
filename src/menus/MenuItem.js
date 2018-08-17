import MenuNode from "./MenuNode";
import {parseBooleanValue, parseIntegerValue, choiceType} from "../common/types";
import {hasRole, menuItemProperty, toggleType, events} from "./core";


/**
 * @property activateEvent
 * Controls the event that the item will activate the menu.  Can be either click, mouseover or dblclick.
 *
 * @property {Number} submenuOpenDelay
 * Add a delay between when the active activate and the submenu opens.
 *
 * @property {Number} autoActivate
 * If the value is an integer greater then or equal to 0, the item will activate automatically on mouse over
 * if the parent menu is already active.
 *
 * @property {String} toggle
 * Controls what event the item will toggle of on.  Can either be blank for no toggle or click or dblclick.
 *
 * @property {Number} delay
 * If activateEvent is mouseover then property add a delay between when the user mouses over the item and when the item
 * will activate.
 *
 * @property {boolean} selectable
 * If true the item is selectable.
 *
 * @property {boolean} disabled
 * If true the item is disabled.
 *
 * @property {boolean} isDropDown
 * If true the item is a drop down item and has a submenu.
 *
 * @property {boolean} isActive
 * A flag that is true when the item is active.
 *
 * @property parent
 * Pointer to the item parent menu.
 *
 * @property submenu
 * If the item is a dropdown item, this is a pointer to the item sub menu.
 */
export default class MenuItem extends MenuNode {
    @menuItemProperty('activateEvent', choiceType('click', 'mouseover', 'dblclick'), 'click') activateEvent;

    @menuItemProperty('submenuOpenDelay', parseIntegerValue, 0) submenuOpenDelay;

    @menuItemProperty('autoActivateItems', parseIntegerValue, 0) autoActivate;

    @menuItemProperty('toggle', toggleType, true) toggle;

    @menuItemProperty('delayItems', parseIntegerValue, 0) delay;

    @menuItemProperty('selectableItems', parseBooleanValue, true) selectable;

    constructor(selector, controller) {
        super(selector, controller);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Event Listeners

    onMouseOver() {
        if(this.disabled) return;

        if(!this.isActive) {
            if(this.parent && this.parent.isActive) {
                if(this.autoActivate >= 0) {
                    this.startTimer('activateTimer', this.activate.bind(this), this.autoActivate);
                }
            } else if(this.activateEvent === 'mouseover') {
                this.startTimer('activateTimer', this.activate.bind(this), this.delay);
            }
        }
    }

    onMouseOut() {
        this.clearTimer('activateTimer');

        if(this.disabled) return;

        if(this.isActive) {
            if(!this.isDropDown) {
                this.deactivate();
            }
        }
    }

    onClick() {
        if(this.disabled) return;

        if(this.isDropDown) {
            if(this.isActive && this.toggle === 'click') {
                this.deactivate();

                if(this.parent && this.parent.isActive && !this.parent.getActiveItems().length) {
                    this.parent.deactivate();
                }
            } else if(!this.isActive && this.activateEvent === 'click') {
                this.activate();
            }
        } else {
            if(this.selectable) {
                this.select();
            }
        }
    }

    onDBLClick() {
        if(this.disabled) return;

        if(this.isDropDown) {
            if(!this.isActive && this.activateEvent === 'dblclick') {
                this.activate();
            } else if(this.isActive && this.toggle === 'dblclick') {
                this.deactivate();
            }
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    activate() {
        if(!this.isActive) {
            this.$element.addClass('active');

            this.clearTimer('openDelay');

            if(this.isDropDown && this.submenu) {
                this.startTimer('openDelay', this.submenu.open.bind(this.submenu), this.submenuOpenDelay);
            }

            if(this.parent) {
                this.parent._addActiveItem(this);
            }

            if(this.controller.$element.is(this.$element)) {
                this.controller.activate();
            }

            this.$element.trigger(events.activate, this);
        }
    }

    deactivate() {
        this.clearTimer('openDelay');

        if(this.isActive) {
            this.$element.removeClass('active');

            if(this.isDropDown && this.submenu && this.submenu.isOpen) {
                this.submenu.close();
            }

            if(this.parent) {
                this.parent._removeActiveItem(this);
            }

            if(this.controller.$element.is(this.$element)) {
                this.controller.deactivate();
            }

            this.$element.trigger(events.deactivate, this);
        }
    }

    select() {
        this.$element.trigger(events.select, this);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties

    get parent() {
        if(this._parent === undefined) {
            this._parent = this.getParent('menu');
        }

        return this._parent;
    }

    get submenu() {
        if(this._submenu === undefined && this.isDropDown) {
            this._submenu = this.getChildren('menu')[0];
        }

        return this._submenu;
    }

    // noinspection JSUnusedGlobalSymbols
    get children() {
        if(this.submenu) {
            return [this.submenu];
        } else {
            return [];
        }
    }

    get isDropDown() {
        return hasRole(this.$element, 'dropdown');
    }
}
