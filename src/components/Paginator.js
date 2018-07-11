import $ from 'jquery';


const PREFIX = 'paginator';


const EVENTS = {
    'pageChange': `${PREFIX}.pageChanged`
};


const PAGINATOR_TEMPLATE = `
<form method="post" class="paginator" action="javascript:void(0);">
    <div class="pane-left">
        <span class="page-btn btn-page-back" data-go="previous"><i class="fas fa-step-backward"></i></span>
        <span class="page-btn btn-page-first" data-go="first"><i class="fas fa-fast-backward"></i></span>
    </div>
    <div class="pages">
        <div>Page </div>
        <input type="number" value="" title="Page" name="page" />
        <div>of <span class="pageCount"></span></div></div>
    <div class="pane-right">
        <span class="page-btn btn-page-last" data-go="last"><i class="fas fa-fast-forward"></i></span>
        <span class="page-btn btn-page-next" data-go="next"><i class="fas fa-step-forward"></i></span>
    </div>
</form>
`;


export default class Paginator {
    static EVENTS = EVENTS;

    constructor(service) {
        this.service = service;

        this.$element = $(PAGINATOR_TEMPLATE);
        this.$pageCount = this.$element.find('.pageCount');
        this.$input = this.$element.find("input");
        this.$btnFirst = this.$element.find('.btn-page-first');
        this.$btnNext = this.$element.find('.btn-page-next');
        this.$btnBack = this.$element.find('.btn-page-back');
        this.$btnLast = this.$element.find('.btn-page-last');
        this._animationId = null;

        this._render = () => this.render();

        this._onClick = (event) => {
            if(this.isDisabled) return;

            let $btn = $(event.target).closest('[data-go]', this.$element),
                cmd = $btn.attr("data-go");

            if($btn.hasClass('disabled')) return;

            if(cmd === 'first') {
                this.service.setPage(1);
                this.render();
            } else if(cmd === 'next') {
                this.service.setPage(this.service.page + 1);
                this.render();
            } else if(cmd === 'previous') {
                this.service.setPage(this.service.page - 1);
                this.render();
            } else if(cmd === 'last') {
                this.service.setPage(this.service.pageCount);
                this.render();
            }
        };

        this._onSubmit = () => {
            if(this.isDisabled) return;

            let value = parseInt(this.$input.val(), 10);

            if(Number.isNaN(value)) {
                this.render();
            } else if(value !== this.service.page) {
                this.service.setPage(value);
            }
        };

        this._disable = () => {
            this.isDisabled = true;
        };

        this._enabled = () => {
            this.isDisabled = false;
        };

        this.$element.on('click', this._onClick);
        this.$element.on('submit', this._onSubmit);
        this.$input.on('blur', this._onSubmit);

        this.service.on('loading-start', () => {
            console.log('loading-start');
        });

        this.service.on('loading-abort', () => {
            console.log("loading-abort");
        });

        this.service.on('data-changed', this._render);
        this.service.on('loading-start', this._disable);
        this.service.on('loading-complete', this._enabled);
        this.service.on('loading-abort', this._enabled);

        this.render();
    }

    appendTo(selector) {
        return this.$element.appendTo(selector);
    }

    render() {
        if(this._animationId) {
            return;
        }

        this._animationId = window.requestAnimationFrame(() => {
            this._animationId = null;
            this.$pageCount.text(this.service.pageCount || '?');
            this.$input.val(this.service.page || 1);

            if(this.service.page <= 1) {
                this.$btnBack.addClass('disabled');
                this.$btnFirst.addClass('disabled');
            } else {
                this.$btnBack.removeClass('disabled');
                this.$btnFirst.removeClass('disabled');
            }

            if(this.service.page >= this.service.pageCount) {
                this.$btnNext.addClass('disabled');
                this.$btnLast.addClass('disabled');
            } else {
                this.$btnNext.removeClass('disabled');
                this.$btnLast.removeClass('disabled');
            }
        });
    }

    get isDisabled() {
        return this.$element.hasClass('disabled');
    }

    set isDisabled(value) {
        value = !!value;

        if(value === true) {
            this.$element.addClass('disabled');
            this.$input.prop('disabled', true);
        } else {
            this.$element.removeClass('disabled');
            this.$input.prop('disabled', false);
        }
    }
}