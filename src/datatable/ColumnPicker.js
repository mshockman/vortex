import Modal from "../components/Modal";


const TEMPLATE = `
<div class="modal column-picker">
    <div class="modal-window modal-static-1">
           <div class="modal-head">Choose Columns</div>
           <div class="modal-body">
                <div><input type="text" placeholder="filter" /></div>
                <div class="hbox"><div>Available</div><div>Selected</div></div>
                <div>
                    <ul class="list-group available"></ul> 
                    <ul class="list-group selected"></ul> 
                </div>
            </div>
           <div class="modal-footer"><button type="button"></button></div>
    </div>
</div>
`;


export default class ColumnPicker {
    constructor(columns, table) {
        this.modal = new Modal(TEMPLATE);
        this.table = table;
    }

    appendTo(selector) {
        return this.modal.appendTo(selector);
    }

    getSelected() {

    }

    setSelected(columns) {

    }
}
