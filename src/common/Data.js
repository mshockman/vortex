import ObjectEvents from './ObjectEvents';
import {clamp} from "../utility";
import abortable from "./abortable";


/**
 * Events:
 *  data-change
 *  loading-start
 *  loading-complete
 *  loading-abort
 */
export class DataModel extends ObjectEvents {
    constructor(data, page=1, pageLength=100) {
        super();

        this.page = page;
        this.pageLength = pageLength;
        this.data = data || {};
        this.disabled = false;

        this.refresh();
    }

    getRow(index) {
        if(index >= 0 && index < this.length) {
            index = index + ((this.page - 1) * this.pageLength);
            return this.rows[index];
        }
    }

    getRowValue(index, key) {
        let row = this.getRow(index);
        if(row) return row[key];
    }

    setRowValue(index, key, value) {
        let row = this.getRow(index);

        if(row && row[key] !== value) {
            row[key] = value;
            this.refresh();
        }
    }

    getDataValue(key) {
        if(this.data) {
            return this.data[key];
        }
    }

    setDataValue(key, value) {
        if(!this.data) {
            this.data = {};
        }

        this.data[key] = value;
        this.refresh();
    }

    /**
     * Returns the number of items on the current page.
     * @returns {Number}
     */
    get length() {
        let start = (this.page-1) * this.pageLength,
            end = Math.min(this.page*this.pageLength, this.total);

        return end - start;
    }

    /**
     *  Returns the total number of items across all pages.
     *  @returns {Number}
     */
    get total() {
        return this.rows.length;
    }

    /**
     * Returns the total number of pages.
     */
    get pageCount() {
        return Math.ceil(this.total / this.pageLength);
    }

    get rows() {
        return this.getDataValue('rows') || [];
    }

    /**
     * Queues a ui refresh
     */
    refresh() {
        if(this._queueId || this.disabled) return;

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;
            this.trigger('data-change', this);
        });
    }

    setPage(page) {
        if(this.page !== page) {
            this.page = page;
            this.refresh();
        }
    }

    setPageLength(pageLength) {
        if(this.pageLength !== pageLength) {
            this.pageLength = pageLength;
            this.refresh();
        }
    }

    setData(data) {
        if(this.data !== data) {
            this.data = data;
            this.refresh();
        }
    }

    /**
     * Iterates over every row.
     * @returns {IterableIterator<{}>}
     */
    *[Symbol.iterator]() {
        for(let i = 0, l = this.length; i < l; i++ ) {
            yield this.getRow(i);
        }
    }
}


export class DataServiceModel extends DataModel {
    constructor(data, page=1, pageLength=100, filters, endpoint, method='POST', timeout=5000) {
        super(data, page, pageLength);
        this.endpoint = endpoint;
        this.method = method;
        this.timeout = timeout;
        this.status = 'unloaded';
        this.filters = filters || {};
    }


    getFilter(key) {
        return this.filters[key];
    }

    setFilter(key, value) {
        if(this.filters[key] !== value) {
            this.filters[key] = value;

            this.reload();
        }
    }

    getFilters() {
        let r = Object.assign({}, this.filters);
        r.page = this.page;
        r.pageLength = this.pageLength;
        return r;
    }

    setFilters(filters) {
        if(this.filters !== filters) {
            this.filters = filters;
            this.reload();
        }
    }

    get length() {
        return this.rows.length;
    }

    get total() {
        return this.getData('total') || 0;
    }

    set total(value) {
        this.setDataValue('total', value);
    }

    setPage(page) {
        if(this.page !== page) {
            this.page = page;
            this.reload();
        }
    }

    setPageLength(pageLength) {
        if(this.pageLength !== pageLength) {
            this.pageLength = pageLength;
            this.reload();
        }
    }

    reload() {
        if(this._reloadId || this.disabled) return;

        this._reloadId = window.requestAnimationFrame(() => {
            this._reloadId = null;
            this.abort();
            this.status = 'loading';
            this.trigger('loading-start', this);

            return new Promise((resolve, reject) => {
                const abort = abortable(reject);
                this._abort = abort;

                $.ajax({
                    url: this.endpoint,
                    cache: false,
                    type: this.method,
                    timeout: this.timeout,

                    dataType: 'json',
                    data: JSON.stringify(this.getFilters()),

                    complete: this._abort.wrap((response) => {
                        // noinspection JSUnusedGlobalSymbols
                        this.status = "loaded";

                        if(this._abort === abort) {
                            this._abort = null;
                        }

                        this.trigger('loading-complete', this, response);
                    }),

                    success: this._abort.wrap((response) => {
                        this.handleResponse(response);
                        resolve(response);
                    })
                });
            });
        });
    }

    /**
     * Will abort the open ajax request.
     * @returns {boolean}
     */
    abort() {
        if(this._abort) {
            this._abort();
            this._abort = null;
            this.trigger('loading-abort', this);
            return true;
        }

        return false;
    }

    handleResponse(response) {
        this.data = response;
        this.refresh();
    }
}
