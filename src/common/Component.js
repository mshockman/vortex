import $ from 'jquery';


export default class Component {
    constructor(element) {
        this.$element = $(element);
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}