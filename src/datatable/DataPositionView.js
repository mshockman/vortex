import $ from 'jquery';


export default class DataPositionView {
    constructor(model, id, classes, template="Viewing {{start}} - {{end}} Items of {{total}}") {
        this.model = model;
        this._render = this.render.bind(this);
        this.model.on('data-change', this._render);
        this.$element = $('<div>');
        this.template = template;

        if(id) {
            this.$element.attr('id', id);
        }

        if(classes) {
            this.$element.addClass(classes);
        }
    }

    render() {
        if(this._queueId) return;

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;

            const context = {
                start: ((this.model.page-1) * this.model.pageLength) + 1,
                end: Math.min(this.model.total, ((this.model.page) * this.model.pageLength)),
                total: this.model.total
            };

            this.$element.html(this.template.replace(/{{(.+?)}}/g, (m, key) => context[key]));
        });
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }
}