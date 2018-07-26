import Modal from "../components/Modal";
import $ from 'jquery';
import ObjectEvents from "../common/ObjectEvents";


const TEMPLATE = `
<div class="modal column-picker">
    <div class="modal-window">
           <div class="modal-head">Choose Columns</div>
           <div class="modal-body">
                <div class="vbox fill">
                    <div class="header-ext">
                        <div class="hbox"><div class="pane-1 p-1">Available</div><div class="pane-1 text-right p-1">Selected</div></div>
                    </div>
                    <div class="pane-1">
                        <div class="hbox fluid-abs">
                            <div class="pane-1 scroll-y"><ul class="list-group bbr-0 fill sortable available"></ul> </div>
                            <div class="pane-1 scroll-y"><ul class="list-group bbr-0 fill sortable selected"></ul> </div>         
                        </div>
                    </div>
                </div>
            </div>
           <div class="modal-footer hbox">
               <div class="mr-auto">
                   <button type="button" data-action="move-up">Up</button>
                   <button type="button" class="mr-auto" data-action="move-down">Down</button>
               </div>
               <div>
                    <button type="button" data-action="dismiss">Close</button>
                    <button type="button" data-action="save">Save</button>
               </div>
           </div>
    </div>
</div>
`;


export default class ColumnPicker extends ObjectEvents {
    constructor(columns) {
        super();
        this.modal = new Modal(TEMPLATE);

        this.$available = this.modal.$element.find(".available");
        this.$selected = this.modal.$element.find('.selected');
        this.columns = {};

        for(let column of columns) {
            this.columns[column.name] = column;
            this.addUnselectedItem(column.name, column.label);
        }

        this.$available.on('click', (event) => {
           let $target = $(event.target);

           if($target.closest('.add-btn', this.$available).length) {
               let $item = $target.closest('li'),
                   name = $item.attr('data-name');

               $item.remove();
               this.addSelectedItem(name, this.columns[name].label);
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
                this.addUnselectedItem(name, this.columns[name].label);
            }
        });

        this.modal.$element.find('[data-action="move-up"]').on('click', () => {
            let $item = this.$selected.find('li.selected');

            if($item.length) {
                let prevSibling = $item.prev('li');
                $item.insertBefore(prevSibling);
            }
        });

        this.modal.$element.find('[data-action="move-down"]').on('click', () => {
            let $item = this.$selected.find('li.selected');

            if($item.length) {
                let nextSibling = $item.next('li');
                $item.insertAfter(nextSibling);
            }
        });

        this.modal.$element.find('[data-action="save"]').on('click', () => {
            this.trigger('save', this.getSelected());
            this.modal.close();
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
        let r = [];

        this.$selected.find("li[data-name]").each((x, element) => {
            r.push($(element).attr('data-name'));
        });

        return r;
    }

    setSelected(columns) {
        let selected = this.getSelected();

        // Deselect any columns that are not in the new selected columns.
        for(let column of selected) {
            if(typeof column === 'object') {
                column = column.name;
            }

            if(columns.indexOf(column) === -1) {
                this.deselect(column);
            }
        }

        for(let column of columns) {
            this.select(column);
        }
    }

    deselect(column) {
        if(typeof column === 'object') {
            column = column.name;
        }

        this.$selected.find(`li[data-name="${column}"]`).remove();

        let $li = this.$available.find(`li[data-name="${column}"]`);

        if(!$li.length && this.columns[column]) {
            this.addUnselectedItem(column, this.columns[column].label);
        }
    }

    select(column) {
        if(typeof column === 'object') {
            column = column.name;
        }

        this.$available.find(`li[data-name="${column}"]`).remove();

        let $li = this.$selected.find(`li[data-name="${column}"]`);

        if(!$li.length && this.columns[column]) {
            this.addSelectedItem(column, this.columns[column].label);
        }
    }

    // noinspection JSUnusedGlobalSymbols
    isSelected(option) {
        return !!this.$selected.find(`li[data-name="${option}"]`).length;
    }

    value(value) {
        if(!arguments.length) {
            return this.getSelected();
        } else {
            return this.setSelected(value);
        }
    }

    open() {
        return this.modal.open();
    }

    close() {
        return this.modal.close();
    }
}
