import Modal from "../components/Modal";


const TEMPLATE = `
<div class="modal column-picker">
    <div class="modal-window modal-static-1">
           <div class="modal-head">Choose Columns</div>
           <div class="modal-body">
                <div><input type="text" placeholder="filter" /></div>
                <div class="hbox"><div class="pane-1">Available</div><div class="pane-1">Selected</div></div>
                <div class="hbox">
                    <ul class="list-group sortable available pane-1"></ul> 
                    <ul class="list-group sortable selected pane-1"></ul> 
                </div>
            </div>
           <div class="modal-footer">
                <button type="button">Close</button>
                <button type="button">Save</button>
           </div>
    </div>
</div>
`;


export default class ColumnPicker {
    constructor(columns, table) {
        this.modal = new Modal(TEMPLATE);
        this.table = table;

        this.$available = this.modal.$element.find(".available");
        this.$selected = this.modal.$element.find('.selected');

        this.modal.$element.find('.sortable').sortable({
            connectWith: '.sortable'
        });

        for(let column of columns) {
            let $li = $(`<li data-name="${column.name}" class="list-group sortable">${column.label}</li>`);
            this.$available.append($li);
        }
    }

    appendTo(selector) {
        return this.modal.appendTo(selector);
    }

    getSelected() {

    }

    setSelected(columns) {

    }
}
