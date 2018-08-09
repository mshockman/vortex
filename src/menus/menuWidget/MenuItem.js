import $ from "jquery";
import MenuNode from './MenuNode';


export default class MenuItem extends MenuNode {
    constructor(element) {
        super(element);
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

    onClick(event) {
        console.log('click ' + this.$element.text());
    }

    onMouseOver(event) {
        console.log('mouseover ' + this.$element.text());
    }

    onMouseOut(event) {
        console.log('mouseout ' + this.$element.text());
    }
}


MenuNode.prototype.MenuItemClass = MenuItem;
