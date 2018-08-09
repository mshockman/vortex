import $ from 'jquery';
import MenuNode from './MenuNode'
import {hasRole, addRoles} from './MenuNode';


export default class Menu extends MenuNode {
    constructor(selector) {
        super(selector);

        if(!hasRole('menu')) {
            addRoles('menu');
        }
    }

    static getInstance(node) {
        node = $(node);
        let r = node.data('controller');

        if(r) {
            return r;
        } else {
            return new this(node);
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    open() {

    }

    close() {

    }

    //------------------------------------------------------------------------------------------------------------------
    // Properties

    get isDisabled() {
        return !!this.$element.hasClass('disabled');
    }

    set isDisabled(value) {
        if(value) {
            this.$element.addClass('disabled');
        } else {
            this.$element.removeClass('disabled');
        }
    }
}


MenuNode.prototype.MenuClass = Menu;
