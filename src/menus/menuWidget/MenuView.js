import {SELECTORS, events, menuProperty, autoActivateType} from "./core";
import Menu from './Menu';
import MenuItem from './MenuItem';
import $ from "jquery";
import {parseBooleanValue} from "../../common/types";
import {getRoles} from "../core";


export default class MenuView extends Menu {
    @menuProperty(parseBooleanValue, true) closeOnSelect;

    @menuProperty(parseBooleanValue, true) closeOnBlur;

    @menuProperty(autoActivateType, -1) timeout;

    constructor(selector) {
        super(selector);
        // noinspection JSUnusedGlobalSymbols
        this.root = this;

        this._handleClickEvent = this.handleClickEvent.bind(this);
        this._handleMouseOverEvent = this.handleMouseOverEvent.bind(this);
        this._handleMouseOutEvent = this.handleMouseOutEvent.bind(this);
        this._handleDBLClickEvent = this.handleDBLClickEvent.bind(this);
        this._handleSelectEvent = this.handleSelectEvent.bind(this);

        this.$element.on('click', this._handleClickEvent);
        this.$element.on('mouseover', this._handleMouseOverEvent);
        this.$element.on('mouseout', this._handleMouseOutEvent);
        this.$element.on('dblclick', this._handleDBLClickEvent);
        this.$element.data('menu-controller', this);
        this.$element.on(events.select, this._handleSelectEvent);
    }

    destroy() {
        this.$element.off('click', this._handleClickEvent);
        this.$element.off('mouseover', this._handleMouseOverEvent);
        this.$element.off('mouseout', this._handleMouseOutEvent);
        this.$element.off('dblclick', this._handleDBLClickEvent);
        this.$element.data('menu-controller', null);
        this.$element.off(events.select, this._handleSelectEvent);
    }

    activate() {
        super.activate();

        // If closeOnBlur is is true attach the necessary events to the document to track outside
        // mouse clicks.
        if(this.isActive && this.closeOnBlur && !this._handleDocumentClickEvent) {
            const $doc = $(document);

            this._handleDocumentClickEvent = (event) => {
                if(!this.$element[0].contains(event.target)) {
                    this._handleDocumentClickEvent.remove();
                    this._handleDocumentClickEvent = null;
                    this.deactivate();
                }
            };

            this._handleDocumentClickEvent.remove = () => {
                $doc.off('click', this._handleDocumentClickEvent);
            };

            this._handleDocumentClickEvent.$doc = $doc;

            $doc.on('click', this._handleDocumentClickEvent);
        }
    }

    deactivate() {
        super.deactivate();

        // Remove click tracking from the document.
        if(this._handleDocumentClickEvent && !this.isActive) {
            this._handleDocumentClickEvent.remove();
            this._handleDocumentClickEvent = null;
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Methods

    // noinspection JSUnusedGlobalSymbols
    findNodes(selector) {
        if(SELECTORS[selector]) {
            selector = SELECTORS[selector];
        }

        const r = [];

        this.$element.find(selector).each((x, element) => {
            r.push(this._getInstance(element));
        });

        return r;
    }

    //------------------------------------------------------------------------------------------------------------------
    // Event Handlers

    handleClickEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target && target.onClick && !this.disabled && !target.disabled) {
            target.onClick(event);
        }
    }

    handleMouseOverEvent(event) {
        let target = this._getClosestNode(event.target);

        this.clearTimer('rootTimer');

        if(target && target.onMouseOver && !this.disabled && !target.disabled) {
            target.onMouseOver(event);
        }
    }

    handleMouseOutEvent(event) {
        let target = this._getClosestNode(event.target);

        if(this._timeoutTimer) {
            clearTimeout(this._timeoutTimer);
            this._timeoutTimer = null;
        }

        if(typeof this.timeout === 'number' && this.timeout >= 0 && !this.disabled && !target.disabled) {
            this.startTimer('rootTimer', this.deactivate.bind(this), this.timeout);
        }

        if(target && target.onMouseOut) {
            target.onMouseOut(event);
        }
    }

    handleDBLClickEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target && target.onDBLClick && !this.disabled && !target.disabled) {
            target.onDBLClick(event);
        }
    }

    /**
     *
     * @param event
     * @param target
     */
    handleSelectEvent(event, target) {
        if(this.isActive && this.closeOnSelect) {
            this.deactivate();
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Private functions

    _getClosestNode(target) {
        let $target = $(target).closest(SELECTORS.all, this.$element);

        if($target.length) {
            return this._getInstance($target);
        }
    }

    _getInstance(node) {
        const $node = $(node),
            type = this.getComponentType(node);

        if($node[0] === this.$element[0]) {
            return this;
        }

        if(type === "menu") {
            return new this.MenuClass($node, this);
        } else if(type === 'item' || type === 'dropdown') {
            return new this.MenuItemClass(node, this);
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Test methods

    getComponentType(node) {
        const roles = getRoles(node);

        if(roles.indexOf('menu') !== -1) {
            return 'menu';
        } else if(roles.indexOf('item') !== -1) {
            return 'item';
        } else if(roles.indexOf('dropdown') !== -1) {
            return 'dropdown';
        }
    }
}


MenuView.prototype.MenuClass = Menu;
MenuView.prototype.MenuItemClass = MenuItem;