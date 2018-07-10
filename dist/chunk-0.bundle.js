(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/common/CallList.js":
/*!********************************!*\
  !*** ./src/common/CallList.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CallList = function () {
    function CallList() {
        _classCallCheck(this, CallList);

        this.stack = [];

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        this.args = args;
    }

    _createClass(CallList, [{
        key: "add",
        value: function add(fn) {
            this.stack.push(fn);
        }
    }, {
        key: "remove",
        value: function remove(fn) {
            var i = this.stack.indexOf(fn);

            if (i !== -1) {
                this.stack.splice(i, 1);
                return true;
            }

            return false;
        }
    }, {
        key: "fire",
        value: function fire() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var args2 = [].concat(_toConsumableArray(this.args), args);

            for (var i = 0, l = this.stack.length; i < l; i++) {
                var _stack;

                if ((_stack = this.stack)[i].apply(_stack, _toConsumableArray(args2)) === CallList.BREAK) {
                    break;
                }
            }
        }
    }]);

    return CallList;
}();

// An object that can be returned to force CallList to break.


exports.default = CallList;
CallList.BREAK = {};

/***/ }),

/***/ "./src/common/Data.js":
/*!****************************!*\
  !*** ./src/common/Data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataServiceModel = exports.DataModel = exports.DummyPagedData = exports.PagedDataInterface = exports.DataInterface = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectEvents3 = __webpack_require__(/*! ./ObjectEvents */ "./src/common/ObjectEvents.js");

var _ObjectEvents4 = _interopRequireDefault(_ObjectEvents3);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

var _abortable = __webpack_require__(/*! ./abortable */ "./src/common/abortable.js");

var _abortable2 = _interopRequireDefault(_abortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Interface for loading data via ajax from an endpoint.
 *
 * Events
 * data-changed
 * loading-start
 * loading-complete
 * loading-abort
 */
var DataInterface = exports.DataInterface = function (_ObjectEvents) {
    _inherits(DataInterface, _ObjectEvents);

    function DataInterface(endpoint) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "POST";
        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;

        _classCallCheck(this, DataInterface);

        var _this = _possibleConstructorReturn(this, (DataInterface.__proto__ || Object.getPrototypeOf(DataInterface)).call(this));

        _this.disabled = true;
        _this.filters = {};

        /**
         * Holds the raw data from the server. Should at least contain columns, and data properties.
         * @type {{columns: Array, data: Array}}
         */
        _this.data = {
            columns: [],
            data: []
        };

        /**
         * The url to send requests to.
         */
        _this.endpoint = endpoint;

        // noinspection JSUnusedGlobalSymbols
        /**
         * The current status of the data.  Can be either unloaded, loading, loaded
         * @type {string}
         */
        _this.status = 'unloaded';

        /**
         * The http method used to request the data.  Defaults to POST.
         * Usually either GET or POST.
         * @default 'POST'
         * @type {string}
         */
        _this.method = method;

        /**
         * The amount of time in milliseconds that the request has before it times out.
         * @default 5000
         * @type {number}
         */
        _this.timeout = timeout;
        _this.disabled = false;
        return _this;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Retrieves the row at the given index.
     * @param index {Number}
     * @returns {{}}
     */


    _createClass(DataInterface, [{
        key: "getRow",
        value: function getRow(index) {
            return this.rows[index];
        }

        // noinspection JSUnusedGlobalSymbols
        /**
         * Retrieves the given data key.  Returns the defaultValue if the key does not exist or if the value is undefined.
         * @param key {String} - The key to retrieve.
         * @param defaultValue {*} - The default value to return if the key is not found.
         * @returns {*}
         */

    }, {
        key: "getData",
        value: function getData(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            if (this.data && this.data[key] !== undefined) {
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

    }, {
        key: "getFilter",
        value: function getFilter(name) {
            return this.filters[name];
        }

        // noinspection JSUnusedGlobalSymbols
        /**
         * Applys a dictionary of name -> filter items.
         * @param filters {{}}
         */

    }, {
        key: "applyFilters",
        value: function applyFilters(filters) {
            for (var key in filters) {
                if (filters.hasOwnProperty(key)) {
                    var value = filters[key];
                    this.setFilter(key, value);
                }
            }
        }

        /**
         * Clears all filters.
         */

    }, {
        key: "clearFilters",
        value: function clearFilters() {
            this.filters = {};
            this.refresh();
        }

        /**
         * Sets the filter with the given name.  Returns true if the filter was changed.
         * @param name {String} The name of the filter.
         * @param value {*} The value to set it to.
         * @returns {boolean} - True if changed.
         */

    }, {
        key: "setFilter",
        value: function setFilter(name, value) {
            var changed = this.getFilter(name) !== value;
            this.filters[name] = value;

            if (changed) {
                this.refresh();
            }

            return changed;
        }

        /**
         * Returns a object of all filters that need to be passed with requests to the server.
         * @returns {{}}
         */

    }, {
        key: "getFilters",
        value: function getFilters() {
            return this.filters;
        }

        /**
         * Makes a request to the server to refresh the data.
         */

    }, {
        key: "refresh",
        value: function refresh() {
            var _this2 = this;

            // A request is already queued to be sent at the next animation frame.
            // Requests are only sent on animation frames so that that any concurrent
            // statements can update filters, pages, etc and they can be sent in the
            // same request.
            if (this._queueId || this.disabled) {
                return; // Request already sent or a request is pending.
            }

            this._queueId = window.requestAnimationFrame(function () {
                _this2._queueId = null;
                _this2.abort(); // Abort any open request.
                // noinspection JSUnusedGlobalSymbols
                _this2.status = 'loading';
                _this2.trigger("loading-start", _this2);

                /**
                 * Return a promise object.
                 */
                return new Promise(function (resolve, reject) {
                    // Create an abortable.  An abortable is simple a function that you can use to decorate
                    // other function so that they won't do anything if the abortable function is called.
                    var abort = (0, _abortable2.default)(function () {
                        return reject();
                    });

                    _this2._abort = abort;

                    $.ajax({
                        url: _this2.endpoint,
                        cache: false,
                        type: _this2.method,
                        timeout: _this2.timeout,

                        dataType: 'json',
                        data: JSON.stringify(_this2.getFilters()),

                        complete: _this2._abort.wrap(function (response) {
                            // noinspection JSUnusedGlobalSymbols
                            _this2.status = "loaded";

                            if (_this2._abort === abort) {
                                _this2._abort = null;
                            }

                            _this2.trigger('loading-complete', _this2, response);
                        }),

                        success: _this2._abort.wrap(function (response) {
                            _this2.handleResponse(response);
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

    }, {
        key: "handleResponse",
        value: function handleResponse(response) {
            this.data = response;
            this.trigger('data-changed', this, response);
        }

        /**
         * Will abort the current request if exists.
         * @returns {boolean}
         */

    }, {
        key: "abort",
        value: function abort() {
            if (this._abort) {
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

    }, {
        key: Symbol.iterator,


        /**
         * Iterates over every row.
         * @returns {IterableIterator<{}>}
         */
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, datum;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = this.rows[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            datum = _step.value;
                            _context.next = 9;
                            return datum;

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }, {
        key: "length",
        get: function get() {
            return this.rows.length;
        }

        /**
         * Returns an array of all rows.
         * @returns {Array}
         */

    }, {
        key: "rows",
        get: function get() {
            if (this.data && this.data.data) {
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

    }, {
        key: "columns",
        get: function get() {
            if (this.data && this.data.columns) {
                return this.data.columns;
            } else {
                return [];
            }
        }
    }]);

    return DataInterface;
}(_ObjectEvents4.default);

/**
 * A data interface class that adds the interface for pages.
 */


var PagedDataInterface = exports.PagedDataInterface = function (_DataInterface) {
    _inherits(PagedDataInterface, _DataInterface);

    function PagedDataInterface(endpoint) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "POST";
        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
        var pageLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

        _classCallCheck(this, PagedDataInterface);

        // noinspection JSUnusedGlobalSymbols
        var _this3 = _possibleConstructorReturn(this, (PagedDataInterface.__proto__ || Object.getPrototypeOf(PagedDataInterface)).call(this, endpoint, method, timeout));

        _this3.disabled = true;
        _this3.pageLength = pageLength;
        // noinspection JSUnusedGlobalSymbols
        _this3.disabled = false;
        return _this3;
    }

    _createClass(PagedDataInterface, [{
        key: "getFilters",
        value: function getFilters() {
            var filters = {};
            Object.assign(filters, _get(PagedDataInterface.prototype.__proto__ || Object.getPrototypeOf(PagedDataInterface.prototype), "getFilters", this).call(this));
            filters.page = this.page;
            filters.pageLength = this.pageLength;
            return filters;
        }
    }, {
        key: "clearFilters",
        value: function clearFilters() {
            _get(PagedDataInterface.prototype.__proto__ || Object.getPrototypeOf(PagedDataInterface.prototype), "clearFilters", this).call(this);
            this.page = 1;
        }
    }, {
        key: "handleResponse",
        value: function handleResponse(response) {
            this.data = response;
            this.trigger('data-changed', this);
        }
    }, {
        key: "page",
        get: function get() {
            return this.data.page || 1;
        },
        set: function set(value) {
            value = (0, _utility.clamp)(value, 1, this.pageCount);

            if (value !== this.page) {
                this.setFilter('page', value);
            }
        }
    }, {
        key: "pageLength",
        get: function get() {
            return this.data.pageLength || 0;
        },
        set: function set(value) {
            value = Math.max(0, value || 0);

            if (value !== this.pageLength) {
                this.setFilter('pageLength', value);
            }
        }
    }, {
        key: "pageCount",
        get: function get() {
            return Math.ceil(this.count / this.pageLength);
        }
    }, {
        key: "count",
        get: function get() {
            return this.data.count;
        }
    }]);

    return PagedDataInterface;
}(DataInterface);

/**
 * Dummy paged data interface class that returns auto generated data rows without requesting information from a server.
 * Simulates latency by using setTimeout.
 * Useful for testing.
 */


var DummyPagedData = exports.DummyPagedData = function (_PagedDataInterface) {
    _inherits(DummyPagedData, _PagedDataInterface);

    /**
     *
     * @param pageLength - Size of the page requests.
     * @param count - Total number of items across all pages.
     * @param latency - Simulated lag between making the request and the response.
     * @param constructData
     */
    function DummyPagedData(pageLength, count) {
        var latency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var constructData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, DummyPagedData);

        var _this4 = _possibleConstructorReturn(this, (DummyPagedData.__proto__ || Object.getPrototypeOf(DummyPagedData)).call(this, '', 'POST', 5000, pageLength));

        _this4.latency = latency;
        _this4._count = count;

        if (constructData !== null) {
            _this4.constructData = constructData;
        }
        return _this4;
    }

    /**
     * Used to construct every data row.
     * @param page
     * @param index
     * @returns {{id: *, title: string}}
     */


    _createClass(DummyPagedData, [{
        key: "constructData",
        value: function constructData(page, index) {
            return {
                id: index,
                title: "Item on page " + page
            };
        }
    }, {
        key: "refresh",
        value: function refresh() {
            var _this5 = this;

            if (this._queueId || this.disabled) {
                return this._queueId;
            }

            this._queueId = window.requestAnimationFrame(function () {
                _this5._queueId = null;
                // noinspection JSUnusedGlobalSymbols
                _this5.status = 'loading';
                _this5.trigger("loading-start", _this5);
                _this5.abort();

                return new Promise(function (resolve, reject) {
                    var timer = setTimeout(function () {
                        var data = [];

                        var page = _this5.getFilter('page'),
                            pageLength = _this5.getFilter('pageLength'),
                            start = page * pageLength,
                            end = Math.min(_this5._count, start + pageLength);

                        for (; start < end; start++) {
                            data.push(_this5.constructData(page, start));
                        }

                        var response = {
                            page: page,
                            pageLength: pageLength,
                            count: _this5._count,
                            data: data
                        };

                        _this5.trigger('loading-complete', _this5, response);
                        _this5.handleResponse(response);
                        _this5._abort = null;
                        resolve(response);
                    }, _this5.latency);

                    // noinspection JSUnusedGlobalSymbols
                    _this5._abort = function () {
                        clearTimeout(timer);
                        _this5._abort = null;
                        reject();
                    };
                });
            });
        }
    }]);

    return DummyPagedData;
}(PagedDataInterface);

var DataModel = exports.DataModel = function (_ObjectEvents2) {
    _inherits(DataModel, _ObjectEvents2);

    function DataModel(data) {
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var pageLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        _classCallCheck(this, DataModel);

        var _this6 = _possibleConstructorReturn(this, (DataModel.__proto__ || Object.getPrototypeOf(DataModel)).call(this));

        _this6.page = page;
        _this6.pageLength = pageLength;
        _this6.data = data;
        _this6.disabled = false;

        _this6.refresh();
        return _this6;
    }

    _createClass(DataModel, [{
        key: "getRow",
        value: function getRow(index) {
            if (this.data) {
                index = index + (this.page - 1) * this.pageLength;
                return this.data[index];
            }
        }
    }, {
        key: "getRowValue",
        value: function getRowValue(index, key) {
            if (this.data) {
                return this.getRow(index)[key];
            }
        }

        /**
         * Returns the number of items on the current page.
         * @returns {Number}
         */

    }, {
        key: "refresh",


        /**
         * Queues a ui refresh
         */
        value: function refresh() {
            var _this7 = this;

            if (this._queueId || this.disabled) return;

            this._queueId = window.requestAnimationFrame(function () {
                _this7._queueId = null;
                _this7.trigger('data-changed', _this7);
            });
        }
    }, {
        key: "setPage",
        value: function setPage(page) {
            if (this.page !== page) {
                this.page = page;
                this.refresh();
            }
        }
    }, {
        key: "setPageLength",
        value: function setPageLength(pageLength) {
            if (this.pageLength !== pageLength) {
                this.pageLength = pageLength;
                this.refresh();
            }
        }
    }, {
        key: "setData",
        value: function setData(data) {
            if (this.data !== data) {
                this.data = data;
                this.refresh();
            }
        }

        /**
         * Iterates over every row.
         * @returns {IterableIterator<{}>}
         */

    }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var i, l;
            return regeneratorRuntime.wrap(function value$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            i = 0, l = this.length;

                        case 1:
                            if (!(i < l)) {
                                _context2.next = 7;
                                break;
                            }

                            _context2.next = 4;
                            return this.getRow(i);

                        case 4:
                            i++;
                            _context2.next = 1;
                            break;

                        case 7:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, value, this);
        })
    }, {
        key: "length",
        get: function get() {
            var start = (this.page - 1) * this.pageLength,
                end = Math.min(this.page * this.pageLength, this.total);

            return end - start;
        }

        /**
         *  Returns the total number of items across all pages.
         *  @returns {Number}
         */

    }, {
        key: "total",
        get: function get() {
            if (this.data) {
                return this.data.length;
            }

            return 0;
        }

        /**
         * Returns the total number of pages.
         */

    }, {
        key: "pageCount",
        get: function get() {
            return Math.ceil(this.total / this.pageLength);
        }
    }]);

    return DataModel;
}(_ObjectEvents4.default);

var DataServiceModel = exports.DataServiceModel = function (_DataModel) {
    _inherits(DataServiceModel, _DataModel);

    function DataServiceModel(data) {
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var pageLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var filters = arguments[3];
        var endpoint = arguments[4];
        var method = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'POST';
        var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 5000;

        _classCallCheck(this, DataServiceModel);

        var _this8 = _possibleConstructorReturn(this, (DataServiceModel.__proto__ || Object.getPrototypeOf(DataServiceModel)).call(this, data, page, pageLength));

        _this8.endpoint = endpoint;
        _this8.method = method;
        _this8.timeout = timeout;
        _this8.status = 'unloaded';
        _this8.filters = {};

        if (filters) {
            _this8.setFilters(filters);
        }
        return _this8;
    }

    _createClass(DataServiceModel, [{
        key: "getFilter",
        value: function getFilter(key) {
            return this.filters[key];
        }
    }, {
        key: "setFilter",
        value: function setFilter(key, value) {
            if (this.filters[key] !== value) {
                this.filters[key] = value;

                this.reload();
            }
        }
    }, {
        key: "getFilters",
        value: function getFilters() {
            var r = Object.assign({}, this.filters);
            r.page = this.page;
            r.pageLength = this.pageLength;
            return r;
        }
    }, {
        key: "setFilters",
        value: function setFilters(filters) {
            if (this.filters !== filters) {
                this.filters = filters;
                this.reload();
            }
        }
    }, {
        key: "setPage",
        value: function setPage(page) {
            if (this.page !== page) {
                this.page = page;
                this.reload();
            }
        }
    }, {
        key: "setData",
        value: function setData(data) {
            if (this.data !== data) {
                this.data = data;
                this.reload();
            }
        }
    }, {
        key: "setPageLength",
        value: function setPageLength(pageLength) {
            if (this.pageLength !== pageLength) {
                this.pageLength = pageLength;
                this.reload();
            }
        }
    }, {
        key: "reload",
        value: function reload() {
            var _this9 = this;

            if (this._reloadId || this.disabled) return;

            this._reloadId = window.requestAnimationFrame(function () {
                _this9._reloadId = null;
                _this9.abort();
                _this9.status = 'loading';
                _this9.trigger('loading-start', _this9);

                return new Promise(function (resolve, reject) {
                    var abort = (0, _abortable2.default)(reject);
                    _this9._abort = abort;

                    $.ajax({
                        url: _this9.endpoint,
                        cache: false,
                        type: _this9.method,
                        timeout: _this9.timeout,

                        dataType: 'json',
                        data: JSON.stringify(_this9.getFilters()),

                        complete: _this9._abort.wrap(function (response) {
                            // noinspection JSUnusedGlobalSymbols
                            _this9.status = "loaded";

                            if (_this9._abort === abort) {
                                _this9._abort = null;
                            }

                            _this9.trigger('loading-complete', _this9, response);
                        }),

                        success: _this9._abort.wrap(function (response) {
                            _this9.handleResponse(response);
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

    }, {
        key: "abort",
        value: function abort() {
            if (this._abort) {
                this._abort();
                this._abort = null;
                this.trigger('loading-abort', this);
                return true;
            }

            return false;
        }
    }, {
        key: "handleResponse",
        value: function handleResponse(response) {
            this.data = response.data;
            this.total = response.total;
            this.refresh();
        }
    }, {
        key: "length",
        get: function get() {
            return this.data.length;
        }
    }, {
        key: "total",
        get: function get() {
            return this._total;
        },
        set: function set(value) {
            this._total = value;
        }
    }]);

    return DataServiceModel;
}(DataModel);

/***/ }),

/***/ "./src/common/ObjectEvents.js":
/*!************************************!*\
  !*** ./src/common/ObjectEvents.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @method trigger
 * @mixin
 */
var ObjectEvents = function () {
    function ObjectEvents() {
        _classCallCheck(this, ObjectEvents);

        this.events = {};
    }

    _createClass(ObjectEvents, [{
        key: 'on',
        value: function on(event, fn) {
            if (!this.events[event]) {
                this.events[event] = [];
            }

            if (typeof fn !== 'function') {
                throw new TypeError('Callback was not a function.');
            }

            if (this.events[event].indexOf(fn) === -1) {
                this.events[event].push(fn);
            }
        }
    }, {
        key: 'indexOf',
        value: function indexOf(event, fn) {
            if (this.events && this.events[event]) {
                return this.events[event].indexOf(fn);
            }

            return -1;
        }
    }, {
        key: 'off',
        value: function off(event, fn) {
            var i = this.indexOf(event, fn);

            if (i !== -1) {
                return this.events[event].splice(i, 1)[0];
            }
        }
    }, {
        key: 'trigger',
        value: function trigger(event) {
            if (this.events && this.events[event]) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.events[event][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var fn = _step.value;

                        if (fn.apply(undefined, args) === ObjectEvents.BREAK) {
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }]);

    return ObjectEvents;
}();

exports.default = ObjectEvents;


ObjectEvents.BREAK = {};

/***/ }),

/***/ "./src/common/abortable.js":
/*!*********************************!*\
  !*** ./src/common/abortable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = abortable;

var _CallList = __webpack_require__(/*! ./CallList */ "./src/common/CallList.js");

var _CallList2 = _interopRequireDefault(_CallList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function abortable(onAbort) {
    var aborted = false;

    function abort() {
        aborted = true;

        if (onAbort) {
            onAbort();
        }
    }

    abort.isAborted = function () {
        return aborted;
    };

    abort.wrap = function (fn) {
        return function () {
            if (!aborted) {
                return fn.apply(this, arguments);
            }
        };
    };

    return abort;
} /**
   * Decorates a function so that it can be aborted.  Useful for ajax requests.
   * @returns {abort}
   */

/***/ }),

/***/ "./src/components/Paginator.js":
/*!*************************************!*\
  !*** ./src/components/Paginator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PREFIX = 'paginator';

var EVENTS = {
    'pageChange': PREFIX + '.pageChanged'
};

var PAGINATOR_TEMPLATE = '\n<form method="post" class="paginator" action="javascript:void(0);">\n    <div class="pane-left">\n        <span class="page-btn btn-page-back" data-go="previous"><i class="fas fa-step-backward"></i></span>\n        <span class="page-btn btn-page-first" data-go="first"><i class="fas fa-fast-backward"></i></span>\n    </div>\n    <div class="pages">\n        <div>Page </div>\n        <input type="number" value="" title="Page" name="page" />\n        <div>of <span class="pageCount"></span></div></div>\n    <div class="pane-right">\n        <span class="page-btn btn-page-last" data-go="last"><i class="fas fa-fast-forward"></i></span>\n        <span class="page-btn btn-page-next" data-go="next"><i class="fas fa-step-forward"></i></span>\n    </div>\n</form>\n';

var Paginator = (_temp = _class = function () {
    function Paginator(service) {
        var _this = this;

        _classCallCheck(this, Paginator);

        this.service = service;

        this.$element = (0, _jquery2.default)(PAGINATOR_TEMPLATE);
        this.$pageCount = this.$element.find('.pageCount');
        this.$input = this.$element.find("input");
        this.$btnFirst = this.$element.find('.btn-page-first');
        this.$btnNext = this.$element.find('.btn-page-next');
        this.$btnBack = this.$element.find('.btn-page-back');
        this.$btnLast = this.$element.find('.btn-page-last');
        this._animationId = null;

        this._render = function () {
            return _this.render();
        };

        this._onClick = function (event) {
            if (_this.isDisabled) return;

            var $btn = (0, _jquery2.default)(event.target).closest('[data-go]', _this.$element),
                cmd = $btn.attr("data-go");

            if ($btn.hasClass('disabled')) return;

            if (cmd === 'first') {
                _this.service.page = 1;
                _this.render();
            } else if (cmd === 'next') {
                _this.service.page += 1;
                _this.render();
            } else if (cmd === 'previous') {
                _this.service.page -= 1;
                _this.render();
            } else if (cmd === 'last') {
                _this.service.page = _this.service.pageCount;
                _this.render();
            }
        };

        this._onSubmit = function () {
            if (_this.isDisabled) return;

            var value = parseInt(_this.$input.val(), 10);

            if (Number.isNaN(value)) {
                _this.render();
            } else if (value !== _this.service.page) {
                _this.service.page = value;
            }
        };

        this._disable = function () {
            _this.isDisabled = true;
        };

        this._enabled = function () {
            _this.isDisabled = false;
        };

        this.$element.on('click', this._onClick);
        this.$element.on('submit', this._onSubmit);
        this.$input.on('blur', this._onSubmit);

        this.service.on('loading-start', function () {
            console.log('loading-start');
        });

        this.service.on('loading-abort', function () {
            console.log("loading-abort");
        });

        this.service.on('data-changed', this._render);
        this.service.on('loading-start', this._disable);
        this.service.on('loading-complete', this._enabled);
        this.service.on('loading-abort', this._enabled);

        this.render();
    }

    _createClass(Paginator, [{
        key: 'appendTo',
        value: function appendTo(selector) {
            return this.$element.appendTo(selector);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this._animationId) {
                return;
            }

            this._animationId = window.requestAnimationFrame(function () {
                _this2._animationId = null;
                _this2.$pageCount.text(_this2.service.pageCount || '?');
                _this2.$input.val(_this2.service.page || 1);

                if (_this2.service.page <= 1) {
                    _this2.$btnBack.addClass('disabled');
                    _this2.$btnFirst.addClass('disabled');
                } else {
                    _this2.$btnBack.removeClass('disabled');
                    _this2.$btnFirst.removeClass('disabled');
                }

                if (_this2.service.page >= _this2.service.pageCount) {
                    _this2.$btnNext.addClass('disabled');
                    _this2.$btnLast.addClass('disabled');
                } else {
                    _this2.$btnNext.removeClass('disabled');
                    _this2.$btnLast.removeClass('disabled');
                }
            });
        }
    }, {
        key: 'isDisabled',
        get: function get() {
            return this.$element.hasClass('disabled');
        },
        set: function set(value) {
            value = !!value;

            if (value === true) {
                this.$element.addClass('disabled');
                this.$input.prop('disabled', true);
            } else {
                this.$element.removeClass('disabled');
                this.$input.prop('disabled', false);
            }
        }
    }]);

    return Paginator;
}(), _class.EVENTS = EVENTS, _temp);
exports.default = Paginator;

/***/ }),

/***/ "./src/tests/pages/paginator-test.js":
/*!*******************************************!*\
  !*** ./src/tests/pages/paginator-test.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Paginator = __webpack_require__(/*! ../../components/Paginator */ "./src/components/Paginator.js");

var _Paginator2 = _interopRequireDefault(_Paginator);

var _Data = __webpack_require__(/*! ../../common/Data */ "./src/common/Data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaginatorTest = function () {
    function PaginatorTest(context) {
        _classCallCheck(this, PaginatorTest);

        this.service = new _Data.DummyPagedData(500, 2222, 1000);
        this.paginator = new _Paginator2.default(this.service);
    }

    _createClass(PaginatorTest, [{
        key: 'load',
        value: function load() {
            this.paginator.appendTo('#paginator-container');
            this.service.refresh();
        }
    }]);

    return PaginatorTest;
}();

exports.default = PaginatorTest;

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clamp = clamp;
exports.firstValue = firstValue;
exports.parseInteger = parseInteger;
exports.parseBoolean = parseBoolean;
exports.parseBooleanString = parseBooleanString;
exports.parseBooleanOrNumber = parseBooleanOrNumber;
exports.setDefaultValues = setDefaultValues;
var nill = {};

function clamp(value) {
    var minValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var maxValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (minValue !== null) {
        value = Math.max(value, minValue);
    }

    if (maxValue !== null) {
        value = Math.min(value, maxValue);
    }

    return value;
}

function firstValue(args) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item !== null && item !== undefined) {
                return item;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function parseInteger(value) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    value = parseInt(value, radix);

    if (Number.isNaN(value)) {
        return defaultValue;
    } else {
        return value;
    }
}

function parseBoolean(value) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (typeof value === 'string') {
        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        } else {
            return defaultValue;
        }
    } else {
        return !!value;
    }
}

function parseBooleanString(value) {
    if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return value;
    }
}

function parseBooleanOrNumber(value) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    if (value === 'true' || value === 'false') {
        return value === 'true';
    } else if (typeof value === 'boolean') {
        return value;
    } else {
        return parseInteger(value, defaultValue, radix);
    }
}

function setDefaultValues(target, defaults) {
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key) && (!target.hasOwnProperty(key) || target[key] === undefined)) {
            target[key] = defaults[key];
        }
    }
}

/***/ })

}]);
//# sourceMappingURL=chunk-0.bundle.js.map