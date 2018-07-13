import ObjectEvents from "../common/ObjectEvents";
import $ from 'jquery';


export default class Viewport extends ObjectEvents {
    constructor(viewport) {
        super();
        this.$element = $(viewport);
        this.left = 0;
        this.top = 0;

        this._onScroll = this.onScroll.bind(this);
        this.$element.on("scroll", this._onScroll);
    }

    onScroll() {
        this.left = this.$element.scrollLeft();
        this.top = this.$element.scrollTop();
        this.trigger("scroll", this);
    }

    mirror(element, padding=0) {
        const $element = $(element);

        const fn = () => {
            const width = this.$element[0].scrollWidth + padding;
            $element.find('.viewport-body').css('width', width);
            $element.scrollLeft(this.left);
            $element.scrollTop(this.top);
        };

        fn.$element = $element;

        this.on('scroll', fn);
    }
}
