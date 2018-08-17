import {SELECTORS, events, menuProperty, autoActivateType, getRoles} from "./core";
import Menu from './Menu';
import MenuItem from './MenuItem';
import $ from "jquery";
import {parseBooleanValue} from "../../common/types";
import {isMouseEnter, isMouseLeave} from '../../utility';
import ObjectEvents from "../../common/ObjectEvents";


export default class MenuView extends ObjectEvents {
    @menuProperty(parseBooleanValue, true) closeOnSelect;

    @menuProperty(parseBooleanValue, true) closeOnBlur;

    @menuProperty(autoActivateType, -1) timeout;

    constructor(selector, config) {
        super();

        if(typeof selector === 'function') {
            this.$element = $(selector());
        } else {
            this.$element = $(selector);
        }

        if(config) {
            Object.assign(this, config);
        }

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

    static getController(target) {
        target = $(target);

        while(target && target.length) {
            if(target.data('menu-controller')) {
                return target;
            }

            target = target.parent();
        }

        return null;
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
        let node = this._getInstance(this.$element);

        if(!node.isActive) {
            node.activate();
        }

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
        let node = this._getInstance(this.$element);

        if(node.isActive) {
            node.deactivate();
        }

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

        this.trigger('click', event, target);
    }

    handleMouseOverEvent(event) {
        let target = this._getClosestNode(event.target);

        this.clearTimer('rootTimer');

        if(target && isMouseEnter(target.$element, event) && target.onMouseOver && !this.disabled && !target.disabled) {
            target.onMouseOver(event);
        }

        this.trigger('mouseover', event, target);
    }

    handleMouseOutEvent(event) {
        let target = this._getClosestNode(event.target);

        this.clearTimer('rootTimer');

        if(isMouseLeave(this.$element[0], event) && typeof this.timeout === 'number' && this.timeout >= 0 && !this.disabled && !target.disabled) {
            this.startTimer('rootTimer', this.deactivate.bind(this), this.timeout);
        }

        if(target && !target.$element[0].contains(event.relatedTarget) && target.onMouseOut) {
            target.onMouseOut(event);
        }

        this.trigger('mouseout', event, target);
    }

    handleDBLClickEvent(event) {
        let target = this._getClosestNode(event.target);

        if(target && target.onDBLClick && !this.disabled && !target.disabled) {
            target.onDBLClick(event);
        }

        this.trigger('dblclick', event, target);
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

    startTimer(name, fn, time) {
        // Don't create a timer of time < 0 or Infinite.
        if(time < 0 || !Number.isFinite(time)) return;

        let _timer = this.$element.data(name);

        if(_timer) {
            clearTimeout(_timer);
            this.$element.data(name, null);
        }

        _timer = setTimeout(() => {
            this.$element.data(name, null);
            fn();
        }, time);

        this.$element.data(name, _timer);
    }

    clearTimer(name) {
        let _timer = this.$element.data(name);

        if(_timer) {
            clearTimeout(_timer);
            this.$element.data(name, null);
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties

    get disabled() {
        return this.$element.hasClass('disabled');
    }

    get isActive() {
        return this.$element.hasClass('active');
    }
}


MenuView.prototype.MenuClass = Menu;
MenuView.prototype.MenuItemClass = MenuItem;