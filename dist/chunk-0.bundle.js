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
exports.DataServiceModel = exports.DataModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectEvents2 = __webpack_require__(/*! ./ObjectEvents */ "./src/common/ObjectEvents.js");

var _ObjectEvents3 = _interopRequireDefault(_ObjectEvents2);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

var _abortable = __webpack_require__(/*! ./abortable */ "./src/common/abortable.js");

var _abortable2 = _interopRequireDefault(_abortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataModel = exports.DataModel = function (_ObjectEvents) {
    _inherits(DataModel, _ObjectEvents);

    function DataModel(data) {
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var pageLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        _classCallCheck(this, DataModel);

        var _this = _possibleConstructorReturn(this, (DataModel.__proto__ || Object.getPrototypeOf(DataModel)).call(this));

        _this.page = page;
        _this.pageLength = pageLength;
        _this.data = data || {};
        _this.disabled = false;

        _this.refresh();
        return _this;
    }

    _createClass(DataModel, [{
        key: "getRow",
        value: function getRow(index) {
            if (index >= 0 && index < this.length) {
                index = index + (this.page - 1) * this.pageLength;
                return this.rows[index];
            }
        }
    }, {
        key: "getRowValue",
        value: function getRowValue(index, key) {
            var row = this.getRow(index);
            if (row) return row[key];
        }
    }, {
        key: "setRowValue",
        value: function setRowValue(index, key, value) {
            var row = this.getRow(index);

            if (row && row[key] !== value) {
                row[key] = value;
                this.refresh();
            }
        }
    }, {
        key: "getDataValue",
        value: function getDataValue(key) {
            if (this.data) {
                return this.data[key];
            }
        }
    }, {
        key: "setDataValue",
        value: function setDataValue(key, value) {
            if (!this.data) {
                this.data = {};
            }

            this.data[key] = value;
            this.refresh();
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
            var _this2 = this;

            if (this._queueId || this.disabled) return;

            this._queueId = window.requestAnimationFrame(function () {
                _this2._queueId = null;
                _this2.trigger('data-changed', _this2);
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
            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            i = 0, l = this.length;

                        case 1:
                            if (!(i < l)) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 4;
                            return this.getRow(i);

                        case 4:
                            i++;
                            _context.next = 1;
                            break;

                        case 7:
                        case "end":
                            return _context.stop();
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
            return this.rows.length;
        }

        /**
         * Returns the total number of pages.
         */

    }, {
        key: "pageCount",
        get: function get() {
            return Math.ceil(this.total / this.pageLength);
        }
    }, {
        key: "rows",
        get: function get() {
            return this.getDataValue('rows') || [];
        }
    }]);

    return DataModel;
}(_ObjectEvents3.default);

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

        var _this3 = _possibleConstructorReturn(this, (DataServiceModel.__proto__ || Object.getPrototypeOf(DataServiceModel)).call(this, data, page, pageLength));

        _this3.endpoint = endpoint;
        _this3.method = method;
        _this3.timeout = timeout;
        _this3.status = 'unloaded';
        _this3.filters = filters || {};
        return _this3;
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
            var _this4 = this;

            if (this._reloadId || this.disabled) return;

            this._reloadId = window.requestAnimationFrame(function () {
                _this4._reloadId = null;
                _this4.abort();
                _this4.status = 'loading';
                _this4.trigger('loading-start', _this4);

                return new Promise(function (resolve, reject) {
                    var abort = (0, _abortable2.default)(reject);
                    _this4._abort = abort;

                    $.ajax({
                        url: _this4.endpoint,
                        cache: false,
                        type: _this4.method,
                        timeout: _this4.timeout,

                        dataType: 'json',
                        data: JSON.stringify(_this4.getFilters()),

                        complete: _this4._abort.wrap(function (response) {
                            // noinspection JSUnusedGlobalSymbols
                            _this4.status = "loaded";

                            if (_this4._abort === abort) {
                                _this4._abort = null;
                            }

                            _this4.trigger('loading-complete', _this4, response);
                        }),

                        success: _this4._abort.wrap(function (response) {
                            _this4.handleResponse(response);
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
            this.data = response;
            this.refresh();
        }
    }, {
        key: "length",
        get: function get() {
            return this.rows.length;
        }
    }, {
        key: "total",
        get: function get() {
            return this.getData('total') || 0;
        },
        set: function set(value) {
            this.setDataValue('total', value);
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
                _this.service.setPage(1);
                _this.render();
            } else if (cmd === 'next') {
                _this.service.setPage(_this.service.page + 1);
                _this.render();
            } else if (cmd === 'previous') {
                _this.service.setPage(_this.service.page - 1);
                _this.render();
            } else if (cmd === 'last') {
                _this.service.setPage(_this.service.pageCount);
                _this.render();
            }
        };

        this._onSubmit = function () {
            if (_this.isDisabled) return;

            var value = parseInt(_this.$input.val(), 10);

            if (Number.isNaN(value)) {
                _this.render();
            } else if (value !== _this.service.page) {
                _this.service.setPage(value);
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

        this.model = this.buildDataModel(5221);
        this.paginator = new _Paginator2.default(this.model);
    }

    _createClass(PaginatorTest, [{
        key: 'buildDataModel',
        value: function buildDataModel(size) {
            var r = [];

            for (var i = 0; i < size; i++) {
                r.push({
                    id: i,
                    name: 'Test Item ' + i,
                    random: Math.round(Math.random() * 1000),
                    price: '$' + (Math.random() * 1000).toFixed(2)
                });
            }

            return new _Data.DataModel({ rows: r }, 1, 100);
        }
    }, {
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