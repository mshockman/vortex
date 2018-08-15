import {addRoles, autoActivateType, menuProperty, toggleType} from "./core";
import MenuNode from './MenuNode';
import {parseBooleanValue, parseIntegerValue, choiceType} from "../../common/types";


/**
 * @class
 *
 * @property {Boolean} autoDeactivate
 * If true, the menu will deactivate any active child items when it closes.
 *
 * @property {Boolean} selectableItems
 * If true child items are selectable by default.
 *
 * @property {Number} delayItems
 * If activateEvent is mouseover then property add a delay between when the user mouses over the item and when the item
 * will activate.
 *
 * @property {String} toggle
 * Controls what event the item will toggle of on.  Can either be blank for no toggle or click or dblclick.
 *
 * @property {Number} autoActivateItems
 * If the value is an integer greater then or equal to 0, the item will activate automatically on mouse over
 * if the parent menu is already active.
 *
 * @property {Number} submenuOpenDelay
 * Add a delay between when the active activate and the submenu opens.
 *
 * @property {String} activateEvent
 * Controls the event that the item will activate the menu.  Can be either click, mouseover or dblclick.
 *
 * @property {boolean} disabled
 * If true the item is disabled.
 *
 * @property {boolean} isActive
 * A flag that is true when the item is active.
 *
 * @property parent
 * Pointer to the menus parent item.
 *
 * @property {Array} children
 * An array of all the menus children.
 *
 * @property {Boolean} multiple
 * If true multiple child item can be active at the same time.
 */
export default class Menu extends MenuNode {
    @menuProperty(parseBooleanValue, true) autoDeactivate;

    @menuProperty(parseBooleanValue, true) selectableItems;

    @menuProperty(parseIntegerValue, 0) delayItems;

    @menuProperty(toggleType, false) toggle;

    @menuProperty(autoActivateType, 0) autoActivateItems;

    @menuProperty(parseIntegerValue, 0) submenuOpenDelay;

    @menuProperty(choiceType('click', 'dblclick', 'mouseover'), 'mouseover') activateEvent;

    @menuProperty(parseBooleanValue, false) multiple;

    constructor(selector, root) {
        super(selector, root);

        addRoles(this.$element, 'menu');
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    activate() {
        if(!this.isActive) {
            this.$element.addClass('active');

            const parent = this.getParent();

            if(parent && !parent.isActive) {
                parent.activate();
            }

            this.$element.trigger('activate', this);
        }
    }

    deactivate() {
        if(this.isActive) {
            this.$element.removeClass('active');

            for(let item of this.getActiveItems()) {
                item.deactivate();
            }

            this.$element.trigger('deactivate', this);
        }
    }

    open() {
        if(!this.isOpen) {
            this.showFX(this);

            this.$element.trigger("open", this);
        }
    }

    // noinspection JSUnusedGlobalSymbols
    close() {
        if(this.isOpen) {
            this.hideFX(this);

            this.$element.trigger("close", this);

            if(this.isActive && this.autoDeactivate) {
                this.deactivate();
            }
        }
    }

    /**
     * Handles showing the menu.  Can be overridden if needed.
     * @param self
     */
    showFX(self) {
        this.$element.addClass('open');
    }

    /**
     * Handles hiding the menu.  Can be overridden if needed.
     * @param self
     */
    hideFX(self) {
        this.$element.removeClass('open');
    }

    //------------------------------------------------------------------------------------------------------------------
    // Events

    onMouseOver(event) {

    }

    onMouseOut(event) {

    }

    onClick(event) {

    }

    onDBLClick(event) {

    }

    //------------------------------------------------------------------------------------------------------------------
    //

    getActiveItems() {
        return this.getChildren('menuitem').filter(i => i.isActive);
    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties

    // noinspection JSUnusedGlobalSymbols
    get children() {
        return this.getChildren('menuitem');
    }

    get isOpen() {
        return this.$element.hasClass('open');
    }

    // noinspection JSUnusedGlobalSymbols
    get parent() {
        if(this.root === this) {
            return null;
        } else {
            return this.getParent('dropdown');
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Private methods

    _addActiveItem(item) {
        const activeItems = this.getActiveItems();

        if(!this.multiple) {
            for(let i of activeItems) {
                if(!i.is(item)) {
                    i.deactivate();
                }
            }
        }

        if(!this.isActive) {
            this.activate();
        }
    }

    /**
     * @param item The item that was removed.
     * @private
     */
    _removeActiveItem(item) {
        if(this.isActive && this.getActiveItems().length === 0) {
            this.deactivate();
        }
    }
}
