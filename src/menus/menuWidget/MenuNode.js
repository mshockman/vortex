import $ from "jquery";
import ObjectEvents from "../../common/ObjectEvents";
import {SELECTORS} from "./core";


export default class MenuNode extends ObjectEvents {
    constructor(selector, controller) {
        super();
        this.controller = controller;

        if(typeof selector === 'function') {
            this.$element = $(selector());
        } else {
            this.$element = $(selector);
        }
    }

    getParent(type='all') {
        let $parent = this.$element.parent(SELECTORS[type], this.controller.$element);

        if($parent.length) {
            return this.controller._getInstance($parent);
        } else {
            return null;
        }
    }

    getChildren(type='all') {
        const nodeType = this.componentType;
        return this.getDescendants(type).filter(item => item.getParent(nodeType).is(this));
    }

    getDescendants(type='all') {
        const r = [];

        this.$element.find(SELECTORS[type], this.controller.$element).each((x, element) => {
            r.push(this.controller._getInstance(element));
        });

        return r;
    }

    is(item) {
        if(item.jquery || item.nodeType) {
            return this.$element.is(item);
        } else if(item === this) {
            return true;
        } else if(item.$element) {
            return this.$element.is(item.$element);
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

    get componentType() {
        return this.controller.getComponentType(this.$element);
    }

    get isActive() {
        return this.$element.hasClass('active');
    }

    get disabled() {
        return this.$element.hasClass('disabled');
    }
}