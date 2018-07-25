import Modal from "../components/Modal";
import $ from 'jquery';


const TEMPLATE = `
<div class="modal column-picker">
    <div class="modal-window">
           <div class="modal-head">Choose Columns</div>
           <div class="modal-body">
                <div class="vbox fill">
                    <div class="header-ext">
                        <div class="hbox"><div class="pane-1 p-1">Available</div><div class="pane-1 text-right p-1">Selected</div></div>
                    </div>
                    <div class="hbox pane-1">
                        <div class="pane-1 scroll-y"><ul class="list-group bbr-0 fill sortable available"></ul> </div>
                        <div class="pane-1 scroll-y"><ul class="list-group bbr-0 fill sortable selected"></ul> </div> 
                    </div>
                </div>
            </div>
           <div class="modal-footer hbox">
               <div class="mr-auto">
                   <button type="button" data-action="move-up">Up</button>
                   <button type="button" class="mr-auto" data-action="move-down">Down</button>
               </div>
               <div>
                    <button type="button">Close</button>
                    <button type="button">Save</button>
               </div>
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
        this.columns = {};

        for(let column of columns) {
            this.columns[column.name] = column.label;
            this.addUnselectedItem(column.name, column.label);
        }

        this.$available.on('click', (event) => {
           let $target = $(event.target);

           if($target.closest('.add-btn', this.$available).length) {
               let $item = $target.closest('li'),
                   name = $item.attr('data-name');

               $item.remove();
               this.addSelectedItem(name, this.columns[name]);
           }
        });

        this.$selected.on('click', (event) => {
            let $target = $(event.target);

            this.$selected.find(".selected").removeClass('selected');
            let $li = $target.closest('li', this.$selected);
            $li.addClass('selected');

            if($target.closest('.remove-btn', this.$selected).length) {
                let $item = $target.closest('li'),
                    name = $item.attr('data-name');

                $item.remove();
                this.addUnselectedItem(name, this.columns[name]);
            }
        });

        this.modal.$element.find('[data-action="move-up"]').on('click', (event) => {
            let $item = this.$selected.find('li.selected');

            if($item.length) {
                let prevSibling = $item.prev('li');
                $item.insertBefore(prevSibling);
            }
        });

        this.modal.$element.find('[data-action="move-down"]').on('click', (event) => {
            let $item = this.$selected.find('li.selected');

            if($item.length) {
                let nextSibling = $item.next('li');
                $item.insertAfter(nextSibling);
            }
        });
    }

    addUnselectedItem(name, label) {
        let $li = this.$available.find(`[data-name="${name}"]`);

        if(!$li.length) {
            $li = $(`<li data-name="${name}" class="list-item small"><a class="add-btn mr-1 x-small"><i class="fas fa-plus"></i></a>${label}</li>`);
            this.$available.append($li);
        }
    }

    addSelectedItem(name, label) {
        let $li = this.$selected.find(`[data-name="${name}"]`);

        if(!$li.length) {
            $li = $(`
                <li data-name="${name}" class="list-item small hbox">
                    <a class="remove-btn mr-1 x-small"><i class="fas fa-minus"></i></a>
                    <div class="mr-auto">${label}</div>
                </li>`);
            this.$selected.append($li);
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
