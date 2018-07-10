import ObjectEvents from './ObjectEvents';
import {clamp} from "../utility";
import abortable from "./abortable";


/**
 * Interface for loading data via ajax from an endpoint.
 *
 * Events
 * data-changed
 * loading-start
 * loading-complete
 * loading-abort
 */
export class DataInterface extends ObjectEvents {
    constructor(endpoint, method="POST", timeout=5000) {
        super();
        this.disabled = true;
        this.filters = {};

        /**
         * Holds the raw data from the server. Should at least contain columns, and data properties.
         * @type {{columns: Array, data: Array}}
         */
        this.data = {
            columns:[],
            data:[]
        };

        /**
         * The url to send requests to.
         */
        this.endpoint = endpoint;

        // noinspection JSUnusedGlobalSymbols
        /**
         * The current status of the data.  Can be either unloaded, loading, loaded
         * @type {string}
         */
        this.status = 'unloaded';

        /**
         * The http method used to request the data.  Defaults to POST.
         * Usually either GET or POST.
         * @default 'POST'
         * @type {string}
         */
        this.method = method;

        /**
         * The amount of time in milliseconds that the request has before it times out.
         * @default 5000
         * @type {number}
         */
        this.timeout = timeout;
        this.disabled = false;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Retrieves the row at the given index.
     * @param index {Number}
     * @returns {{}}
     */
    getRow(index) {
        return this.rows[index];
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Retrieves the given data key.  Returns the defaultValue if the key does not exist or if the value is undefined.
     * @param key {String} - The key to retrieve.
     * @param defaultValue {*} - The default value to return if the key is not found.
     * @returns {*}
     */
    getData(key, defaultValue=undefined) {
        if(this.data && this.data[key] !== undefined) {
            return this.data[key];
        } else {
            return defaultValue;
        }
    }

    /**
     * Retrieve the value of the filter with the provided name.
     * @param name {String}
     * @returns {*}
     */
    getFilter(name) {
        return this.filters[name];
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Applys a dictionary of name -> filter items.
     * @param filters {{}}
     */
    applyFilters(filters) {
        for(let key in filters) {
            if(filters.hasOwnProperty(key)) {
                let value = filters[key];
                this.setFilter(key, value);
            }
        }
    }

    /**
     * Clears all filters.
     */
    clearFilters() {
        this.filters = {};
        this.refresh();
    }

    /**
     * Sets the filter with the given name.  Returns true if the filter was changed.
     * @param name {String} The name of the filter.
     * @param value {*} The value to set it to.
     * @returns {boolean} - True if changed.
     */
    setFilter(name, value) {
        let changed = this.getFilter(name) !== value;
        this.filters[name] = value;

        if(changed) {
            this.refresh();
        }

        return changed;
    }

    /**
     * Returns a object of all filters that need to be passed with requests to the server.
     * @returns {{}}
     */
    getFilters() {
        return this.filters;
    }

    /**
     * Makes a request to the server to refresh the data.
     */
    refresh() {
        // A request is already queued to be sent at the next animation frame.
        // Requests are only sent on animation frames so that that any concurrent
        // statements can update filters, pages, etc and they can be sent in the
        // same request.
        if(this._queueId || this.disabled) {
            return; // Request already sent or a request is pending.
        }

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;
            this.abort(); // Abort any open request.
            // noinspection JSUnusedGlobalSymbols
            this.status = 'loading';
            this.trigger("loading-start", this);

            /**
             * Return a promise object.
             */
            return new Promise((resolve, reject) => {
                // Create an abortable.  An abortable is simple a function that you can use to decorate
                // other function so that they won't do anything if the abortable function is called.
                const abort = abortable(() => reject());

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
     * Handles the response from the server by updating the data and triggering a data-changed event.
     * @param response
     */
    handleResponse(response) {
        this.data = response;
        this.trigger('data-changed', this, response);
    }

    /**
     * Will abort the current request if exists.
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

    // noinspection JSUnusedGlobalSymbols
    /**
     * The number of rows available.
     * @returns {Number}
     */
    get length() {
        return this.rows.length;
    }

    /**
     * Returns an array of all rows.
     * @returns {Array}
     */
    get rows() {
        if(this.data && this.data.data) {
            return this.data.data;
        } else {
            return [];
        }
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Returns an array of all columns.
     * @returns {Array}
     */
    get columns() {
        if(this.data && this.data.columns) {
            return this.data.columns;
        } else {
            return [];
        }
    }

    /**
     * Iterates over every row.
     * @returns {IterableIterator<{}>}
     */
    *[Symbol.iterator]() {
        for (let datum of this.rows) {
            yield datum;
        }
    }
}


/**
 * A data interface class that adds the interface for pages.
 */
export class PagedDataInterface extends DataInterface {
    constructor(endpoint, method="POST", timeout=5000, pageLength=100) {
        super(endpoint, method, timeout);
        // noinspection JSUnusedGlobalSymbols
        this.disabled = true;
        this.pageLength = pageLength;
        // noinspection JSUnusedGlobalSymbols
        this.disabled = false;
    }

    getFilters() {
        const filters = {};
        Object.assign(filters, super.getFilters());
        filters.page = this.page;
        filters.pageLength = this.pageLength;
        return filters;
    }

    clearFilters() {
        super.clearFilters();
        this.page = 1;
    }

    handleResponse(response) {
        this.data = response;
        this.trigger('data-changed', this);
    }

    get page() {
        return this.data.page || 1;
    }

    set page(value) {
        value = clamp(value, 1, this.pageCount);

        if(value !== this.page) {
            this.setFilter('page', value);
        }
    }

    get pageLength() {
        return this.data.pageLength || 0;
    }

    set pageLength(value) {
        value = Math.max(0, value || 0);

        if(value !== this.pageLength) {
            this.setFilter('pageLength', value);
        }
    }

    get pageCount() {
        return Math.ceil(this.count / this.pageLength);
    }

    get count() {
        return this.data.count;
    }
}


/**
 * Dummy paged data interface class that returns auto generated data rows without requesting information from a server.
 * Simulates latency by using setTimeout.
 * Useful for testing.
 */
export class DummyPagedData extends PagedDataInterface {
    /**
     *
     * @param pageLength - Size of the page requests.
     * @param count - Total number of items across all pages.
     * @param latency - Simulated lag between making the request and the response.
     * @param constructData
     */
    constructor(pageLength, count, latency=100, constructData=null) {
        super('', 'POST', 5000, pageLength);
        this.latency = latency;
        this._count = count;

        if(constructData !== null) {
            this.constructData = constructData;
        }
    }

    /**
     * Used to construct every data row.
     * @param page
     * @param index
     * @returns {{id: *, title: string}}
     */
    constructData(page, index) {
        return {
            id: index,
            title: `Item on page ${page}`
        }
    }

    refresh() {
        if(this._queueId || this.disabled) {
            return this._queueId;
        }

        this._queueId = window.requestAnimationFrame(() => {
            this._queueId = null;
            // noinspection JSUnusedGlobalSymbols
            this.status = 'loading';
            this.trigger("loading-start", this);
            this.abort();

            return new Promise((resolve, reject) => {
                let timer = setTimeout(() => {
                    const data = [];

                    let page = this.getFilter('page'),
                        pageLength = this.getFilter('pageLength'),
                        start = page * pageLength,
                        end = Math.min(this._count, start + pageLength);

                    for(; start < end; start++) {
                        data.push(this.constructData(page, start));
                    }

                    const response = {
                        page: page,
                        pageLength: pageLength,
                        count: this._count,
                        data: data
                    };

                    this.trigger('loading-complete', this, response);
                    this.handleResponse(response);
                    this._abort = null;
                    resolve(response);
                }, this.latency);

                // noinspection JSUnusedGlobalSymbols
                this._abort = () => {
                    clearTimeout(timer);
                    this._abort = null;
                    reject();
                }
            });
        });
    }
}
