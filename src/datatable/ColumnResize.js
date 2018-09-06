import $ from 'jquery';
import Mouse from "../common/Mouse";
import {matrixSub} from "../common/matricies";


export default class ColumnResize extends Mouse {
    constructor(header, helper=false) {
        super();
        this.header = header;
        this._render = this.render.bind(this);
        this._onMouseDown = this.onMouseDown.bind(this);

        if(helper) {
            this.helper = $(helper);
        } else {
            this.helper = helper;
        }

        this.header.on('render', this._render);
        this.header.$element.on("mousedown", this._onMouseDown);
    }

    render() {
        this.header.getColumns().each((x, element) => {
            element = $(element);
            const column = element.data('column');

            if(column && column.resizeable === true) {
                element.addClass('resize-right col-resize');
                element.append(`<div class='resize-handle'></div>`);
            }
        });
    }

    onMouseDown(event) {
        event.preventDefault();

        let $target = $(event.target).closest('.resize-handle', this.header.$element);
        if(!$target.length) return;
        $target = $target.closest('td, th', this.header.$element);

        const column = $target.data('column');

        let start = [event.pageX, event.pageY],
            startingWidth = column.width,
            finalWidth = startingWidth;

        if(this.helper) {
            this.helper.addClass('resizing');

            this.helper.offset({
                left: start[0] - (this.helper.outerWidth()/2)
            });
        }

        let tracker = this.trackMousePosition((event, pos) => {
            event.preventDefault();
            let offset = [pos[0] - start[0], pos[1] - start[1]];
            finalWidth = startingWidth + offset[0];

            if(this.helper) {
                let width = this.helper.outerWidth();
                this.helper.offset({
                    left: pos[0] - (width/2)
                });
            } else {
                this.header.table.setColumnWidth(column, finalWidth);
            }
        });

        tracker.$doc.on('mouseup', () => {
            tracker.untrack();
            this.header.table.setColumnWidth(column, finalWidth);

            if(this.helper) {
                this.helper.removeClass('resizing');
            }
        });
    }
}