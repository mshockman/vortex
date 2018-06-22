import $ from 'jquery';


function menuTemplate() {
    return `<div class='menu' data-role='menu'>`;
}


/**
 * A grouping of items that act in sync together.
 */
export default class Menu {
    constructor({element=menuTemplate, multiple=false, timeout=1000, menuToggle=false, positioner=null, closeOnBlur=false, closeOnSelect=false, data=null}) {
        this.multiple = multiple;
        this.timeout = timeout;
        this.menuToggle = menuToggle;
        this.positioner = positioner;
        this.closeOnBlur = closeOnBlur;
        this.closeOnSelect = closeOnSelect;
        this.data = data;

        if(!element) {
            this.$element = $(this.template());
        } else if(typeof element === 'function') {
            this.$element = $(element(this));
        } else {
            this.$element = $(element);
        }
    }

    show() {

    }

    hide() {

    }

    activate() {

    }

    deactivate() {

    }

    getParent() {

    }

    getChildren() {

    }

    isChildItem(item) {

    }

    isChildMenu(menu) {

    }
}