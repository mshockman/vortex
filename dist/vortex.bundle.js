/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/vortex/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apps.js":
/*!*********************!*\
  !*** ./src/apps.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, Application);

        this.classes = classes || {};
        this.page = null;
        this.isLoaded = false;
    }

    _createClass(Application, [{
        key: "registerPage",
        value: function registerPage(name, cls) {
            if (this.classes.hasOwnProperty(key) && this.classes[key]) {
                throw new Error("Duplicate Class Key.");
            }

            this.classes[key] = cls;
        }
    }, {
        key: "init",
        value: function init(page, context) {
            var _this = this;

            if (this.page) {
                throw new Error("Page already loaded.");
            }

            (0, _jquery2.default)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var pageClassImporter, PageClass;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.isLoaded = true;

                                pageClassImporter = _this.classes[page];
                                _context.next = 4;
                                return pageClassImporter();

                            case 4:
                                PageClass = _context.sent.default;


                                _this.page = new PageClass(context);
                                _this.page.load();

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            })));
        }
    }]);

    return Application;
}();

exports.default = Application;

/***/ }),

/***/ "./src/common/Mouse.js":
/*!*****************************!*\
  !*** ./src/common/Mouse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mouse = function () {
    function Mouse() {
        _classCallCheck(this, Mouse);

        this.isMouseTracked = false;
    }

    _createClass(Mouse, [{
        key: 'trackMousePosition',
        value: function trackMousePosition(callback) {
            var _this = this;

            if (this.isMouseTracked) {
                return;
            }

            var $doc = $(document);

            var untrack = function untrack() {
                $doc.off('mousemove', onMouseMove);
                _this.isMouseTracked = false;
                _this._untrackMousePosition = null;
            };

            var onMouseMove = function onMouseMove(event) {
                callback(event, [event.pageX, event.pageY]);
            };

            this.isMouseTracked = true;
            this._untrackMousePosition = untrack;
            $doc.on('mousemove', onMouseMove);

            return {
                $doc: $doc,
                untrack: untrack,
                callback: callback
            };
        }
    }, {
        key: 'untrackMousePosition',
        value: function untrackMousePosition() {
            if (this._untrackMousePosition) {
                this._untrackMousePosition();
                return true;
            }

            return false;
        }
    }]);

    return Mouse;
}();

exports.default = Mouse;

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

/***/ "./src/common/matricies.js":
/*!*********************************!*\
  !*** ./src/common/matricies.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pivotRow = pivotRow;
exports.matrixAdd = matrixAdd;
exports.matrixSub = matrixSub;
exports.dotProduct = dotProduct;
exports.getRowVertex = getRowVertex;
exports.getColumnVertex = getColumnVertex;
exports.matrixProduct = matrixProduct;
function pivotRow(row) {
    var r = [];

    for (var i = 0; i < row.length; i++) {
        r.push([row[i]]);
    }

    return r;
}

function matrixAdd(m1, m2) {
    var r = [];

    for (var m = 0; m < m1.length; m++) {
        r.push([]);

        for (var n = 0; n < m1[m].length; n++) {
            r[m].push(m1[m][n] + m2[m][n]);
        }
    }

    return r;
}

function matrixSub(m1, m2) {
    var r = [];

    for (var m = 0; m < m1.length; m++) {
        r.push([]);

        for (var n = 0; n < m1[m].length; n++) {
            r[m].push(m1[m][n] - m2[m][n]);
        }
    }

    return r;
}

function dotProduct(v1, v2) {
    var r = 0;

    for (var i = 0; i < v1.length; i++) {
        r += v1[i] * v2[i];
    }

    return r;
}

function getRowVertex(m, index) {
    return m[index];
}

function getColumnVertex(m, index) {
    var r = [];

    for (var i = 0; i < m.length; i++) {
        r.push(m[i][index]);
    }

    return r;
}

function matrixProduct(m1, m2) {
    var r = [];

    for (var i = 0; i < m2.length; i++) {
        r.push([]);

        for (var j = 0; j < m2[0].length; j++) {
            r[i].push(dotProduct(getRowVertex(m1, i), getColumnVertex(m2, j)));
        }
    }

    return r;
}

/***/ }),

/***/ "./src/common/types.js":
/*!*****************************!*\
  !*** ./src/common/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBooleanValue = parseBooleanValue;
exports.parseIntegerValue = parseIntegerValue;
exports.parseFloatValue = parseFloatValue;
exports.choiceType = choiceType;
exports.nullValue = nullValue;
exports.ifChoiceThen = ifChoiceThen;
exports.castType = castType;
exports.compoundType = compoundType;
var nill = {};

function parseBooleanValue(value) {
    if (typeof value === 'boolean') {
        return value;
    } else if (typeof value === 'string') {
        value = value.toLowerCase();

        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        }
    }

    throw new TypeError("Could not convert value to boolean.");
}

function parseIntegerValue(value) {
    var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    value = parseInt(value, radix);

    if (!Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Could not convert value to integer.");
}

function parseFloatValue(value) {
    value = parseFloat(value);

    if (!Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Could not convert value to float.");
}

function choiceType() {
    for (var _len = arguments.length, choices = Array(_len), _key = 0; _key < _len; _key++) {
        choices[_key] = arguments[_key];
    }

    return function (value) {
        if (choices.indexOf(value) === -1) {
            throw new TypeError("Invalid choice.");
        } else {
            return value;
        }
    };
}

function nullValue(value) {
    if (value === null) {
        return value;
    } else {
        throw new TypeError("Value was not null.");
    }
}

function ifChoiceThen(choices, value) {
    return function (v) {
        if (choices.indexOf(v) !== -1) {
            return value;
        } else {
            throw new TypeError("Was not a choice.");
        }
    };
}

function castType(value, types, defaultValue) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var type = _step.value;

            try {
                return type(value);
            } catch (e) {
                if (!(e instanceof TypeError)) {
                    throw e;
                }
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

    if (defaultValue === nill) {
        throw new TypeError("Could not convert value.");
    } else {
        return defaultValue;
    }
}

function compoundType() {
    for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        types[_key2] = arguments[_key2];
    }

    return function (value) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var t = _step2.value;

                try {
                    return t(value);
                } catch (e) {
                    if (!(e instanceof TypeError)) {
                        throw e;
                    }
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        throw new TypeError("Could not convert value to type.");
    };
}

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PREFIX = 'models.';

var EVENTS = {
    OPEN: PREFIX + 'open',
    CLOSE: PREFIX + '.close'
};

var Modal = function () {
    function Modal(target) {
        _classCallCheck(this, Modal);

        this.$element = (0, _jquery2.default)(target);
        this.$element.attr('data-role', 'modal');

        this._onClick = this.onClick.bind(this);
        this.$element.on('click', this._onClick);
        this.$element.data('modal', this);
    }

    _createClass(Modal, [{
        key: 'onClick',
        value: function onClick(event) {
            var $target = (0, _jquery2.default)(event.target);

            var $dismiss = $target.closest('[data-action="dismiss"]');

            if ($target.is("[data-role='modal']") || $dismiss.length) {
                this.close();
            }
        }
    }, {
        key: 'open',
        value: function open() {
            this.$element.addClass('open');
            this.$element.trigger(EVENTS.OPEN, this);
        }
    }, {
        key: 'close',
        value: function close() {
            this.$element.removeClass('open');
            this.$element.trigger(EVENTS.CLOSE, this);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        }
    }, {
        key: 'appendTo',
        value: function appendTo(selector) {
            return this.$element.appendTo(selector);
        }
    }, {
        key: 'isOpen',
        get: function get() {
            return this.$element.hasClass('open');
        }
    }]);

    return Modal;
}();

exports.default = Modal;


_loader2.default.register('modal', function (target) {
    return new Modal(target);
});

window.Modal = Modal;

/***/ }),

/***/ "./src/components/Panes.js":
/*!*********************************!*\
  !*** ./src/components/Panes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _resizeable = __webpack_require__(/*! ./resizeable */ "./src/components/resizeable.js");

var _resizeable2 = _interopRequireDefault(_resizeable);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panes = function () {
    function Panes(element, _ref) {
        var _this = this;

        var _ref$pane = _ref.pane,
            pane = _ref$pane === undefined ? 'x' : _ref$pane;

        _classCallCheck(this, Panes);

        this.$element = (0, _jquery2.default)(element);
        this.pane = pane;

        this.$element.on(_resizeable2.default.EVENTS.resizing, function (event, ui) {
            var $target = (0, _jquery2.default)(event.target),
                space = _this.getPaneSpace($target);

            if (_this.pane === 'x' || _this.pane === 'x y') {
                ui.to[0] = (0, _utility.clamp)(ui.to[0], 0, Math.max(0, _this.innerWidth - space.width));
            }

            if (_this.pane === 'y' || _this.pane === 'x y') {
                ui.to[1] = (0, _utility.clamp)(ui.to[1], 0, Math.max(0, _this.innerHeight - space.height));
            }
        });
    }

    _createClass(Panes, [{
        key: 'getPaneSpace',
        value: function getPaneSpace(exclude) {
            var children = this.$element.children();

            if (exclude) {
                children = children.not(exclude);
            }

            var r = {
                width: 0,
                height: 0
            };

            children.each(function (x, element) {
                element = (0, _jquery2.default)(element);
                var grow = parseInt(element.css('flex-grow'), 10);

                if (grow === 0) {
                    r.width += (0, _utility.parseInteger)(element.css('width'), 0, 10);
                    r.height += (0, _utility.parseInteger)(element.css('height'), 0, 10);
                }
            });

            return r;
        }
    }, {
        key: 'getElementBounds',
        value: function getElementBounds(element) {
            element = (0, _jquery2.default)(element);

            return {
                minWidth: (0, _utility.parseInteger)(element.css('min-width'), 0, 10),
                maxWidth: (0, _utility.parseInteger)(element.css('max-width', Infinity, 10)),
                minHeight: (0, _utility.parseInteger)(element.css('min-height', 0, 10)),
                maxHeight: (0, _utility.parseInteger)(element.css('max-height'), Infinity, 10)
            };
        }
    }, {
        key: 'innerWidth',
        get: function get() {
            return this.$element.innerWidth();
        }
    }, {
        key: 'innerHeight',
        get: function get() {
            return this.$element.innerHeight();
        }
    }]);

    return Panes;
}();

exports.default = Panes;


_loader2.default.register('panes', function (target, config) {
    var p = new Panes(target, config);
    window.p = p;
    return p;
});

/***/ }),

/***/ "./src/components/Tabs.js":
/*!********************************!*\
  !*** ./src/components/Tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
    function Tabs(target) {
        _classCallCheck(this, Tabs);

        this.$element = (0, _jquery2.default)(target);
        this._onClick = this.onClick.bind(this);

        this.$element.on('click', this._onClick);
    }

    _createClass(Tabs, [{
        key: 'onClick',
        value: function onClick(event) {
            var $target = (0, _jquery2.default)(event.target).closest('[data-tab]', this.$element);

            if (!$target.length) {
                return;
            }

            this.activate($target);
        }
    }, {
        key: 'activate',
        value: function activate(tab) {
            var _this = this;

            this.$element.children('[data-tab]').not(tab).each(function (index, element) {
                _this.deactivate(element);
            });

            tab = (0, _jquery2.default)(tab);

            tab.addClass('active');
            var tabPane = (0, _jquery2.default)(tab.attr('data-tab'));
            tabPane.addClass('open');
        }
    }, {
        key: 'deactivate',
        value: function deactivate(tab) {
            tab = (0, _jquery2.default)(tab);

            tab.removeClass('active');
            var tabPane = (0, _jquery2.default)(tab.attr('data-tab'));
            tabPane.removeClass('open');
        }
    }]);

    return Tabs;
}();

exports.default = Tabs;


_loader2.default.register('tabs', function (target, config) {
    return new Tabs(target, config);
});

/***/ }),

/***/ "./src/components/resizeable.js":
/*!**************************************!*\
  !*** ./src/components/resizeable.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Mouse2 = __webpack_require__(/*! ../common/Mouse */ "./src/common/Mouse.js");

var _Mouse3 = _interopRequireDefault(_Mouse2);

var _matricies = __webpack_require__(/*! ../common/matricies */ "./src/common/matricies.js");

var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PREFIX = 'resizeable.';

var EVENTS = {
    'resizing': PREFIX + 'resizing',
    'resized': PREFIX + 'resized'
};

var Resizeable = function (_Mouse) {
    _inherits(Resizeable, _Mouse);

    function Resizeable(element, _ref) {
        var _ref$resize = _ref.resize,
            resize = _ref$resize === undefined ? 'x y' : _ref$resize,
            _ref$handle = _ref.handle,
            handle = _ref$handle === undefined ? null : _ref$handle,
            _ref$exclude = _ref.exclude,
            exclude = _ref$exclude === undefined ? null : _ref$exclude;

        _classCallCheck(this, Resizeable);

        var _this = _possibleConstructorReturn(this, (Resizeable.__proto__ || Object.getPrototypeOf(Resizeable)).call(this));

        _this.$element = $(element);
        _this.resize = resize;
        _this.handle = handle;
        _this.exclude = exclude;

        _this._onMouseDown = _this.onMouseDown.bind(_this);
        _this._width = null;
        _this._height = null;

        _this.$element.on('mousedown', _this._onMouseDown);
        return _this;
    }

    _createClass(Resizeable, [{
        key: 'appendTo',
        value: function appendTo(selector) {
            return this.$element.appendTo(selector);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            var _this2 = this;

            var $target = $(event.target);

            if (this.handle && !$target.closest(this.handle, this.$element).length) {
                return;
            }if (this.exclude && $target.closest(this.exclude, this.$element).length) {
                return;
            } else if (this.isDisabled) {
                return;
            }

            event.preventDefault();

            var originMatrix = [[event.pageX], [event.pageY]],
                start = [[this.width], [this.height]];

            // Start tracking mouse position on mouse move.
            var tracker = this.trackMousePosition(function (event, cords) {
                event.preventDefault();
                cords = (0, _matricies.matrixSub)((0, _matricies.pivotRow)(cords), originMatrix); // Offset cordinents so the origin is the starting position.
                cords = (0, _matricies.matrixProduct)(_this2._getTransformationMatrix(), cords); // Transform the matrix.

                var size = (0, _matricies.getColumnVertex)((0, _matricies.matrixAdd)(start, cords), 0);

                _this2._setCords(size);
            });

            // Add event listeners to untrack mouse on mouse up.
            var onMouseUp = function onMouseUp(event) {
                tracker.untrack();
                tracker.callback(event, [event.pageX, event.pageY]);
                tracker.$doc.off('mouseup', onMouseUp);
            };

            tracker.$doc.on('mouseup', onMouseUp);
        }
    }, {
        key: '_getTransformationMatrix',
        value: function _getTransformationMatrix() {
            var resize = this.resize.split(/\s+/),
                matrix = [[1, 0], [0, 1]];

            if (resize.indexOf('-x') !== -1) {
                matrix[0] = [-1, 0];
            }

            if (resize.indexOf('-y') !== -1) {
                matrix[1] = [0, -1];
            }

            return matrix;
        }
    }, {
        key: '_setCords',
        value: function _setCords(cords) {
            var width = this.width,
                height = this.height;

            this.width = cords[0];
            this.height = cords[1];

            if (this.width !== width || this.height !== height) {
                var event = {
                    controller: this,
                    from: [width, height],
                    to: [this.width, this.height]
                };

                this.$element.trigger(EVENTS.resizing, event);

                this.width = event.to[0];
                this.height = event.to[1];

                this.render();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this._animationId) return;

            this._animationId = window.requestAnimationFrame(function () {
                _this3._animationId = null;
                var r = {};

                if (_this3.isWidthResizeable) {
                    r.width = _this3.width;
                }

                if (_this3.isHeightResizeable) {
                    r.height = _this3.height;
                }

                _this3.$element.css(r);

                _this3.$element.trigger(EVENTS.resized, {
                    controller: _this3,
                    size: {
                        width: _this3.width,
                        height: _this3.height
                    }
                });
            });
        }
    }, {
        key: 'width',
        get: function get() {
            if (this._width === null) {
                this.width = parseInt(this.$element.css('width'), 10);
            }

            return this._width;
        },
        set: function set(value) {
            if (this.isWidthResizeable) {
                this._width = (0, _utility.clamp)(value, this.minWidth, this.maxWidth);
            }
        }
    }, {
        key: 'height',
        get: function get() {
            if (this._height === null) {
                this.height = parseInt(this.$element.css('height'), 10);
            }

            return this._height;
        },
        set: function set(value) {
            if (this.isHeightResizeable) {
                this._height = (0, _utility.clamp)(value, this.minHeight, this.maxHeight);
            }
        }
    }, {
        key: 'isWidthResizeable',
        get: function get() {
            var resize = this.resize.split(/\s+/);
            return resize.indexOf('x') !== -1 || resize.indexOf('-x') !== -1;
        }
    }, {
        key: 'isHeightResizeable',
        get: function get() {
            var resize = this.resize.split(/\s+/);
            return resize.indexOf('y') !== -1 || resize.indexOf('-y') !== -1;
        }
    }, {
        key: 'minWidth',
        get: function get() {
            return (0, _utility.parseInteger)(this.$element.css('min-width'), 0, 10);
        },
        set: function set(value) {
            this.$element.css('min-width', value);
        }
    }, {
        key: 'minHeight',
        get: function get() {
            return (0, _utility.parseInteger)(this.$element.css('min-height'), 0, 10);
        },
        set: function set(value) {
            this.$element.css('min-height', value);
        }
    }, {
        key: 'maxWidth',
        get: function get() {
            return (0, _utility.parseInteger)(this.$element.css('max-width'), Infinity, 10);
        },
        set: function set(value) {
            this.$element.css('max-width', value);
        }
    }, {
        key: 'maxHeight',
        get: function get() {
            return (0, _utility.parseInteger)(this.$element.css('max-height'), Infinity, 10);
        },
        set: function set(value) {
            this.$element.css('max-height', value);
        }
    }]);

    return Resizeable;
}(_Mouse3.default);

exports.default = Resizeable;


Resizeable.EVENTS = EVENTS;
Resizeable.PREFIX = PREFIX;

window.Resizeable = Resizeable;

_loader2.default.register('resizeable', function (target, config) {
    return new Resizeable(target, config);
});

/***/ }),

/***/ "./src/components/toggle.js":
/*!**********************************!*\
  !*** ./src/components/toggle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toggle = function () {
    function Toggle(target) {
        _classCallCheck(this, Toggle);

        this.$element = (0, _jquery2.default)(target);

        this._onClick = this.onClick.bind(this);
        this.$element.on('click', this._onClick);
    }

    _createClass(Toggle, [{
        key: 'onClick',
        value: function onClick(event) {
            var $target = (0, _jquery2.default)(event.target).closest("[data-toggle]", this.$element);

            if ($target.length) {
                var _$target$attr$split = $target.attr('data-toggle').split(/\s*->\s*/),
                    _$target$attr$split2 = _slicedToArray(_$target$attr$split, 2),
                    selector = _$target$attr$split2[0],
                    key = _$target$attr$split2[1],
                    element = (0, _jquery2.default)(selector),
                    initialized = element.data('initialized');

                if (key) {
                    initialized[key].toggle();
                } else if (initialized) {
                    for (var _key in initialized) {
                        if (initialized.hasOwnProperty(_key)) {
                            if (initialized[_key].toggle) {
                                initialized[_key].toggle();
                            }
                        }
                    }
                }
            }
        }
    }]);

    return Toggle;
}();

exports.default = Toggle;


_loader2.default.register('toggle', function (target) {
    return new Toggle(target);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Application = exports.Loader = undefined;

__webpack_require__(/*! ./menus/menuWidget */ "./src/menus/menuWidget/index.js");

var _loader = __webpack_require__(/*! ./loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

__webpack_require__(/*! ./components/toggle */ "./src/components/toggle.js");

__webpack_require__(/*! ./components/Modal */ "./src/components/Modal.js");

var _apps = __webpack_require__(/*! ./apps */ "./src/apps.js");

var _apps2 = _interopRequireDefault(_apps);

__webpack_require__(/*! ./components/resizeable */ "./src/components/resizeable.js");

__webpack_require__(/*! ./components/Panes */ "./src/components/Panes.js");

__webpack_require__(/*! ./components/Tabs */ "./src/components/Tabs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Loader = _loader2.default;
exports.Application = _apps2.default;

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
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

var Loader = (_temp = _class = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        this.registry = {};
    }

    _createClass(Loader, [{
        key: "init",
        value: function init() {
            var _this = this;

            (0, _jquery2.default)(function () {
                if (Loader.autoLoad) {
                    _this.parse();
                }
            });
        }
    }, {
        key: "register",
        value: function register(name, func) {
            if (this.registry.hasOwnProperty(name) && this.registry[name]) {
                throw new Error("Auto Loading name conflict.");
            }

            this.registry[name] = func;
        }
    }, {
        key: "parse",
        value: function parse() {
            var _this2 = this;

            var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (section === null) {
                section = (0, _jquery2.default)("[data-init]");
            } else {
                section = (0, _jquery2.default)(section).find("[data-init]").addBack("[data-init]");
            }

            section.each(function (x, element) {
                var classes = element.getAttribute("data-init").split(/\s+/);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var c = _step.value;

                        if (_this2.registry[c]) {
                            var target = element,
                                data = {},
                                r = void 0;

                            element = (0, _jquery2.default)(element);
                            Object.assign(data, element.data());

                            r = _this2.registry[c](target, data);
                            data = element.data();

                            if (r) {
                                if (!data.initialized) {
                                    data.initialized = {};
                                }

                                data.initialized[c] = r;
                            }
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
            });
        }
    }], [{
        key: "register",
        value: function register(name, fn) {
            return this.loader.register(name, fn);
        }
    }, {
        key: "init",
        value: function init() {
            return this.loader.init();
        }
    }]);

    return Loader;
}(), _class.loader = null, _temp);
exports.default = Loader;


Loader.loader = new Loader();
window.Loader = Loader;
Loader.autoLoad = true;
Loader.init();

/***/ }),

/***/ "./src/menus/menuWidget/DropDown.js":
/*!******************************************!*\
  !*** ./src/menus/menuWidget/DropDown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _MenuView2 = __webpack_require__(/*! ./MenuView */ "./src/menus/menuWidget/MenuView.js");

var _MenuView3 = _interopRequireDefault(_MenuView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_MenuView) {
    _inherits(DropDown, _MenuView);

    function DropDown(selector, config) {
        _classCallCheck(this, DropDown);

        var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, selector, config));

        config = {
            timeout: -1,
            closeOnSelect: true,
            activateEvent: 'click',
            toggle: 'click'
        };

        config = Object.assign(config, _this.$element.data());
        _this.$element.data(config);
        return _this;
    }

    return DropDown;
}(_MenuView3.default);

exports.default = DropDown;

/***/ }),

/***/ "./src/menus/menuWidget/Menu.js":
/*!**************************************!*\
  !*** ./src/menus/menuWidget/Menu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _core = __webpack_require__(/*! ./core */ "./src/menus/menuWidget/core.js");

var _MenuNode2 = __webpack_require__(/*! ./MenuNode */ "./src/menus/menuWidget/MenuNode.js");

var _MenuNode3 = _interopRequireDefault(_MenuNode2);

var _types = __webpack_require__(/*! ../../common/types */ "./src/common/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

/**
 * @class
 *
 * @property {Boolean} autoDeactivate
 * If true, the menu will deactivate any active child items when it closes.
 *
 * @property {Boolean} selectableItems
 * If true child items are selectable by default.
 *
 * @property {Number} delayItems
 * If activateEvent is mouseover then property add a delay between when the user mouses over the item and when the item
 * will activate.
 *
 * @property {String} toggle
 * Controls what event the item will toggle of on.  Can either be blank for no toggle or click or dblclick.
 *
 * @property {Number} autoActivateItems
 * If the value is an integer greater then or equal to 0, the item will activate automatically on mouse over
 * if the parent menu is already active.
 *
 * @property {Number} submenuOpenDelay
 * Add a delay between when the active activate and the submenu opens.
 *
 * @property {String} activateEvent
 * Controls the event that the item will activate the menu.  Can be either click, mouseover or dblclick.
 *
 * @property {boolean} disabled
 * If true the item is disabled.
 *
 * @property {boolean} isActive
 * A flag that is true when the item is active.
 *
 * @property parent
 * Pointer to the menus parent item.
 *
 * @property {Array} children
 * An array of all the menus children.
 *
 * @property {Boolean} multiple
 * If true multiple child item can be active at the same time.
 */
var Menu = (_dec = (0, _core.menuProperty)(_types.parseBooleanValue, true), _dec2 = (0, _core.menuProperty)(_types.parseBooleanValue, true), _dec3 = (0, _core.menuProperty)(_types.parseIntegerValue, 0), _dec4 = (0, _core.menuProperty)(_core.toggleType, false), _dec5 = (0, _core.menuProperty)(_core.autoActivateType, 0), _dec6 = (0, _core.menuProperty)(_types.parseIntegerValue, 0), _dec7 = (0, _core.menuProperty)((0, _types.choiceType)('click', 'dblclick', 'mouseover'), 'mouseover'), _dec8 = (0, _core.menuProperty)(_types.parseBooleanValue, false), (_class = function (_MenuNode) {
    _inherits(Menu, _MenuNode);

    function Menu(selector, root) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, selector, root));

        _initDefineProp(_this, "autoDeactivate", _descriptor, _this);

        _initDefineProp(_this, "selectableItems", _descriptor2, _this);

        _initDefineProp(_this, "delayItems", _descriptor3, _this);

        _initDefineProp(_this, "toggle", _descriptor4, _this);

        _initDefineProp(_this, "autoActivateItems", _descriptor5, _this);

        _initDefineProp(_this, "submenuOpenDelay", _descriptor6, _this);

        _initDefineProp(_this, "activateEvent", _descriptor7, _this);

        _initDefineProp(_this, "multiple", _descriptor8, _this);

        (0, _core.addRoles)(_this.$element, 'menu');
        return _this;
    }

    //------------------------------------------------------------------------------------------------------------------
    // Actions

    _createClass(Menu, [{
        key: "activate",
        value: function activate() {
            if (!this.isActive) {
                this.$element.addClass('active');

                var parent = this.getParent();

                if (parent && !parent.isActive) {
                    parent.activate();
                }

                if (this.controller.$element.is(this.$element)) {
                    this.controller.activate();
                }

                this.$element.trigger(_core.events.activate, this);
            }
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            if (this.isActive) {
                this.$element.removeClass('active');

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.getActiveItems()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        item.deactivate();
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

                if (this.controller.$element.is(this.$element)) {
                    this.controller.deactivate();
                }

                this.$element.trigger(_core.events.deactivate, this);
            }
        }
    }, {
        key: "open",
        value: function open() {
            if (!this.isOpen) {
                this.showFX(this);

                this.$element.trigger(_core.events.open, this);
            }
        }

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: "close",
        value: function close() {
            if (this.isOpen) {
                this.hideFX(this);

                this.$element.trigger(_core.events.close, this);

                if (this.isActive && this.autoDeactivate) {
                    this.deactivate();
                }
            }
        }

        /**
         * Handles showing the menu.  Can be overridden if needed.
         * @param self
         */

    }, {
        key: "showFX",
        value: function showFX(self) {
            this.$element.addClass('open');
        }

        /**
         * Handles hiding the menu.  Can be overridden if needed.
         * @param self
         */

    }, {
        key: "hideFX",
        value: function hideFX(self) {
            this.$element.removeClass('open');
        }

        //------------------------------------------------------------------------------------------------------------------
        // Events

    }, {
        key: "onMouseOver",
        value: function onMouseOver(event) {}
    }, {
        key: "onMouseOut",
        value: function onMouseOut(event) {}
    }, {
        key: "onClick",
        value: function onClick(event) {}
    }, {
        key: "onDBLClick",
        value: function onDBLClick(event) {}

        //------------------------------------------------------------------------------------------------------------------
        //

    }, {
        key: "getActiveItems",
        value: function getActiveItems() {
            return this.getChildren('menuitem').filter(function (i) {
                return i.isActive;
            });
        }

        //------------------------------------------------------------------------------------------------------------------
        // Properties

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: "_addActiveItem",


        //------------------------------------------------------------------------------------------------------------------
        // Private methods

        value: function _addActiveItem(item) {
            var activeItems = this.getActiveItems();

            if (!this.multiple) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = activeItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var i = _step2.value;

                        if (!i.is(item)) {
                            i.deactivate();
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }

            if (!this.isActive) {
                this.activate();
            }
        }

        /**
         * @param item The item that was removed.
         * @private
         */

    }, {
        key: "_removeActiveItem",
        value: function _removeActiveItem(item) {
            if (this.isActive && this.getActiveItems().length === 0) {
                this.deactivate();
            }
        }
    }, {
        key: "children",
        get: function get() {
            return this.getChildren('menuitem');
        }
    }, {
        key: "isOpen",
        get: function get() {
            return this.$element.hasClass('open');
        }

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: "parent",
        get: function get() {
            if (this.controller === this) {
                return null;
            } else {
                return this.getParent('dropdown');
            }
        }
    }]);

    return Menu;
}(_MenuNode3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "autoDeactivate", [_dec], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectableItems", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "delayItems", [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "toggle", [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "autoActivateItems", [_dec5], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "submenuOpenDelay", [_dec6], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "activateEvent", [_dec7], {
    enumerable: true,
    initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "multiple", [_dec8], {
    enumerable: true,
    initializer: null
})), _class));
exports.default = Menu;

/***/ }),

/***/ "./src/menus/menuWidget/MenuItem.js":
/*!******************************************!*\
  !*** ./src/menus/menuWidget/MenuItem.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _MenuNode2 = __webpack_require__(/*! ./MenuNode */ "./src/menus/menuWidget/MenuNode.js");

var _MenuNode3 = _interopRequireDefault(_MenuNode2);

var _types = __webpack_require__(/*! ../../common/types */ "./src/common/types.js");

var _core = __webpack_require__(/*! ./core */ "./src/menus/menuWidget/core.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

/**
 * @property activateEvent
 * Controls the event that the item will activate the menu.  Can be either click, mouseover or dblclick.
 *
 * @property {Number} submenuOpenDelay
 * Add a delay between when the active activate and the submenu opens.
 *
 * @property {Number} autoActivate
 * If the value is an integer greater then or equal to 0, the item will activate automatically on mouse over
 * if the parent menu is already active.
 *
 * @property {String} toggle
 * Controls what event the item will toggle of on.  Can either be blank for no toggle or click or dblclick.
 *
 * @property {Number} delay
 * If activateEvent is mouseover then property add a delay between when the user mouses over the item and when the item
 * will activate.
 *
 * @property {boolean} selectable
 * If true the item is selectable.
 *
 * @property {boolean} disabled
 * If true the item is disabled.
 *
 * @property {boolean} isDropDown
 * If true the item is a drop down item and has a submenu.
 *
 * @property {boolean} isActive
 * A flag that is true when the item is active.
 *
 * @property parent
 * Pointer to the item parent menu.
 *
 * @property submenu
 * If the item is a dropdown item, this is a pointer to the item sub menu.
 */
var MenuItem = (_dec = (0, _core.menuItemProperty)('activateEvent', (0, _types.choiceType)('click', 'mouseover', 'dblclick'), 'click'), _dec2 = (0, _core.menuItemProperty)('submenuOpenDelay', _types.parseIntegerValue, 0), _dec3 = (0, _core.menuItemProperty)('autoActivateItems', _types.parseIntegerValue, 0), _dec4 = (0, _core.menuItemProperty)('toggle', _core.toggleType, true), _dec5 = (0, _core.menuItemProperty)('delayItems', _types.parseIntegerValue, 0), _dec6 = (0, _core.menuItemProperty)('selectableItems', _types.parseBooleanValue, true), (_class = function (_MenuNode) {
    _inherits(MenuItem, _MenuNode);

    function MenuItem(selector, controller) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, selector, controller));

        _initDefineProp(_this, "activateEvent", _descriptor, _this);

        _initDefineProp(_this, "submenuOpenDelay", _descriptor2, _this);

        _initDefineProp(_this, "autoActivate", _descriptor3, _this);

        _initDefineProp(_this, "toggle", _descriptor4, _this);

        _initDefineProp(_this, "delay", _descriptor5, _this);

        _initDefineProp(_this, "selectable", _descriptor6, _this);

        return _this;
    }

    //------------------------------------------------------------------------------------------------------------------
    // Event Listeners

    _createClass(MenuItem, [{
        key: "onMouseOver",
        value: function onMouseOver() {
            if (this.disabled) return;

            if (!this.isActive) {
                if (this.parent && this.parent.isActive) {
                    if (this.autoActivate >= 0) {
                        this.startTimer('activateTimer', this.activate.bind(this), this.autoActivate);
                    }
                } else if (this.activateEvent === 'mouseover') {
                    this.startTimer('activateTimer', this.activate.bind(this), this.delay);
                }
            }
        }
    }, {
        key: "onMouseOut",
        value: function onMouseOut() {
            this.clearTimer('activateTimer');

            if (this.disabled) return;

            if (this.isActive) {
                if (!this.isDropDown) {
                    this.deactivate();
                }
            }
        }
    }, {
        key: "onClick",
        value: function onClick() {
            if (this.disabled) return;

            if (this.isDropDown) {
                if (this.isActive && this.toggle === 'click') {
                    this.deactivate();

                    if (this.parent && this.parent.isActive && !this.parent.getActiveItems().length) {
                        this.parent.deactivate();
                    }
                } else if (!this.isActive && this.activateEvent === 'click') {
                    this.activate();
                }
            } else {
                if (this.selectable) {
                    this.select();
                }
            }
        }
    }, {
        key: "onDBLClick",
        value: function onDBLClick() {
            if (this.disabled) return;

            if (this.isDropDown) {
                if (!this.isActive && this.activateEvent === 'dblclick') {
                    this.activate();
                } else if (this.isActive && this.toggle === 'dblclick') {
                    this.deactivate();
                }
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Actions

    }, {
        key: "activate",
        value: function activate() {
            if (!this.isActive) {
                this.$element.addClass('active');

                this.clearTimer('openDelay');

                if (this.isDropDown && this.submenu) {
                    this.startTimer('openDelay', this.submenu.open.bind(this.submenu), this.submenuOpenDelay);
                }

                if (this.parent) {
                    this.parent._addActiveItem(this);
                }

                if (this.controller.$element.is(this.$element)) {
                    this.controller.activate();
                }

                this.$element.trigger(_core.events.activate, this);
            }
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            this.clearTimer('openDelay');

            if (this.isActive) {
                this.$element.removeClass('active');

                if (this.isDropDown && this.submenu && this.submenu.isOpen) {
                    this.submenu.close();
                }

                if (this.parent) {
                    this.parent._removeActiveItem(this);
                }

                if (this.controller.$element.is(this.$element)) {
                    this.controller.deactivate();
                }

                this.$element.trigger(_core.events.deactivate, this);
            }
        }
    }, {
        key: "select",
        value: function select() {
            this.$element.trigger(_core.events.select, this);
        }

        //------------------------------------------------------------------------------------------------------------------
        // Properties

    }, {
        key: "parent",
        get: function get() {
            if (this._parent === undefined) {
                this._parent = this.getParent('menu');
            }

            return this._parent;
        }
    }, {
        key: "submenu",
        get: function get() {
            if (this._submenu === undefined && this.isDropDown) {
                this._submenu = this.getChildren('menu')[0];
            }

            return this._submenu;
        }

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: "children",
        get: function get() {
            if (this.submenu) {
                return [this.submenu];
            } else {
                return [];
            }
        }
    }, {
        key: "isDropDown",
        get: function get() {
            return (0, _core.hasRole)(this.$element, 'dropdown');
        }
    }]);

    return MenuItem;
}(_MenuNode3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "activateEvent", [_dec], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "submenuOpenDelay", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "autoActivate", [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "toggle", [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "delay", [_dec5], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "selectable", [_dec6], {
    enumerable: true,
    initializer: null
})), _class));
exports.default = MenuItem;

/***/ }),

/***/ "./src/menus/menuWidget/MenuNode.js":
/*!******************************************!*\
  !*** ./src/menus/menuWidget/MenuNode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _ObjectEvents2 = __webpack_require__(/*! ../../common/ObjectEvents */ "./src/common/ObjectEvents.js");

var _ObjectEvents3 = _interopRequireDefault(_ObjectEvents2);

var _core = __webpack_require__(/*! ./core */ "./src/menus/menuWidget/core.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuNode = function (_ObjectEvents) {
    _inherits(MenuNode, _ObjectEvents);

    function MenuNode(selector, controller) {
        _classCallCheck(this, MenuNode);

        var _this = _possibleConstructorReturn(this, (MenuNode.__proto__ || Object.getPrototypeOf(MenuNode)).call(this));

        _this.controller = controller;

        if (typeof selector === 'function') {
            _this.$element = (0, _jquery2.default)(selector());
        } else {
            _this.$element = (0, _jquery2.default)(selector);
        }
        return _this;
    }

    _createClass(MenuNode, [{
        key: "getParent",
        value: function getParent() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

            var $parent = this.$element.parent(_core.SELECTORS[type], this.controller.$element);

            if ($parent.length) {
                return this.controller._getInstance($parent);
            } else {
                return null;
            }
        }
    }, {
        key: "getChildren",
        value: function getChildren() {
            var _this2 = this;

            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

            var nodeType = this.componentType;
            return this.getDescendants(type).filter(function (item) {
                return item.getParent(nodeType).is(_this2);
            });
        }
    }, {
        key: "getDescendants",
        value: function getDescendants() {
            var _this3 = this;

            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

            var r = [];

            this.$element.find(_core.SELECTORS[type], this.controller.$element).each(function (x, element) {
                r.push(_this3.controller._getInstance(element));
            });

            return r;
        }
    }, {
        key: "is",
        value: function is(item) {
            if (item.jquery || item.nodeType) {
                return this.$element.is(item);
            } else if (item === this) {
                return true;
            } else if (item.$element) {
                return this.$element.is(item.$element);
            }
        }
    }, {
        key: "startTimer",
        value: function startTimer(name, fn, time) {
            var _this4 = this;

            // Don't create a timer of time < 0 or Infinite.
            if (time < 0 || !Number.isFinite(time)) return;

            var _timer = this.$element.data(name);

            if (_timer) {
                clearTimeout(_timer);
                this.$element.data(name, null);
            }

            _timer = setTimeout(function () {
                _this4.$element.data(name, null);
                fn();
            }, time);

            this.$element.data(name, _timer);
        }
    }, {
        key: "clearTimer",
        value: function clearTimer(name) {
            var _timer = this.$element.data(name);

            if (_timer) {
                clearTimeout(_timer);
                this.$element.data(name, null);
            }
        }
    }, {
        key: "componentType",
        get: function get() {
            return this.controller.getComponentType(this.$element);
        }
    }, {
        key: "isActive",
        get: function get() {
            return this.$element.hasClass('active');
        }
    }, {
        key: "disabled",
        get: function get() {
            return this.$element.hasClass('disabled');
        }
    }]);

    return MenuNode;
}(_ObjectEvents3.default);

exports.default = MenuNode;

/***/ }),

/***/ "./src/menus/menuWidget/MenuView.js":
/*!******************************************!*\
  !*** ./src/menus/menuWidget/MenuView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _core = __webpack_require__(/*! ./core */ "./src/menus/menuWidget/core.js");

var _Menu = __webpack_require__(/*! ./Menu */ "./src/menus/menuWidget/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! ./MenuItem */ "./src/menus/menuWidget/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _types = __webpack_require__(/*! ../../common/types */ "./src/common/types.js");

var _utility = __webpack_require__(/*! ../../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MenuView = (_dec = (0, _core.menuProperty)(_types.parseBooleanValue, true), _dec2 = (0, _core.menuProperty)(_types.parseBooleanValue, true), _dec3 = (0, _core.menuProperty)(_core.autoActivateType, -1), (_class = function () {
    function MenuView(selector, config) {
        _classCallCheck(this, MenuView);

        _initDefineProp(this, 'closeOnSelect', _descriptor, this);

        _initDefineProp(this, 'closeOnBlur', _descriptor2, this);

        _initDefineProp(this, 'timeout', _descriptor3, this);

        if (typeof selector === 'function') {
            this.$element = (0, _jquery2.default)(selector());
        } else {
            this.$element = (0, _jquery2.default)(selector);
        }

        if (config) {
            Object.assign(this, config);
        }

        this._handleClickEvent = this.handleClickEvent.bind(this);
        this._handleMouseOverEvent = this.handleMouseOverEvent.bind(this);
        this._handleMouseOutEvent = this.handleMouseOutEvent.bind(this);
        this._handleDBLClickEvent = this.handleDBLClickEvent.bind(this);
        this._handleSelectEvent = this.handleSelectEvent.bind(this);

        this.$element.on('click', this._handleClickEvent);
        this.$element.on('mouseover', this._handleMouseOverEvent);
        this.$element.on('mouseout', this._handleMouseOutEvent);
        this.$element.on('dblclick', this._handleDBLClickEvent);
        this.$element.data('menu-controller', this);
        this.$element.on(_core.events.select, this._handleSelectEvent);
    }

    _createClass(MenuView, [{
        key: 'destroy',
        value: function destroy() {
            this.$element.off('click', this._handleClickEvent);
            this.$element.off('mouseover', this._handleMouseOverEvent);
            this.$element.off('mouseout', this._handleMouseOutEvent);
            this.$element.off('dblclick', this._handleDBLClickEvent);
            this.$element.data('menu-controller', null);
            this.$element.off(_core.events.select, this._handleSelectEvent);
        }
    }, {
        key: 'activate',
        value: function activate() {
            var _this = this;

            var node = this._getInstance(this.$element);

            if (!node.isActive) {
                node.activate();
            }

            // If closeOnBlur is is true attach the necessary events to the document to track outside
            // mouse clicks.
            if (this.isActive && this.closeOnBlur && !this._handleDocumentClickEvent) {
                var $doc = (0, _jquery2.default)(document);

                this._handleDocumentClickEvent = function (event) {
                    if (!_this.$element[0].contains(event.target)) {
                        _this._handleDocumentClickEvent.remove();
                        _this._handleDocumentClickEvent = null;
                        _this.deactivate();
                    }
                };

                this._handleDocumentClickEvent.remove = function () {
                    $doc.off('click', _this._handleDocumentClickEvent);
                };

                this._handleDocumentClickEvent.$doc = $doc;

                $doc.on('click', this._handleDocumentClickEvent);
            }
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var node = this._getInstance(this.$element);

            if (node.isActive) {
                node.deactivate();
            }

            // Remove click tracking from the document.
            if (this._handleDocumentClickEvent && !this.isActive) {
                this._handleDocumentClickEvent.remove();
                this._handleDocumentClickEvent = null;
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Methods

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: 'findNodes',
        value: function findNodes(selector) {
            var _this2 = this;

            if (_core.SELECTORS[selector]) {
                selector = _core.SELECTORS[selector];
            }

            var r = [];

            this.$element.find(selector).each(function (x, element) {
                r.push(_this2._getInstance(element));
            });

            return r;
        }

        //------------------------------------------------------------------------------------------------------------------
        // Event Handlers

    }, {
        key: 'handleClickEvent',
        value: function handleClickEvent(event) {
            var target = this._getClosestNode(event.target);

            if (target && target.onClick && !this.disabled && !target.disabled) {
                target.onClick(event);
            }
        }
    }, {
        key: 'handleMouseOverEvent',
        value: function handleMouseOverEvent(event) {
            var target = this._getClosestNode(event.target);

            this.clearTimer('rootTimer');

            if (target && (0, _utility.isMouseEnter)(target.$element, event) && target.onMouseOver && !this.disabled && !target.disabled) {
                target.onMouseOver(event);
            }
        }
    }, {
        key: 'handleMouseOutEvent',
        value: function handleMouseOutEvent(event) {
            var target = this._getClosestNode(event.target);

            this.clearTimer('rootTimer');

            if ((0, _utility.isMouseLeave)(this.$element[0], event) && typeof this.timeout === 'number' && this.timeout >= 0 && !this.disabled && !target.disabled) {
                this.startTimer('rootTimer', this.deactivate.bind(this), this.timeout);
            }

            if (target && !target.$element[0].contains(event.relatedTarget) && target.onMouseOut) {
                target.onMouseOut(event);
            }
        }
    }, {
        key: 'handleDBLClickEvent',
        value: function handleDBLClickEvent(event) {
            var target = this._getClosestNode(event.target);

            if (target && target.onDBLClick && !this.disabled && !target.disabled) {
                target.onDBLClick(event);
            }
        }

        /**
         *
         * @param event
         * @param target
         */

    }, {
        key: 'handleSelectEvent',
        value: function handleSelectEvent(event, target) {
            if (this.isActive && this.closeOnSelect) {
                this.deactivate();
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Private functions

    }, {
        key: '_getClosestNode',
        value: function _getClosestNode(target) {
            var $target = (0, _jquery2.default)(target).closest(_core.SELECTORS.all, this.$element);

            if ($target.length) {
                return this._getInstance($target);
            }
        }
    }, {
        key: '_getInstance',
        value: function _getInstance(node) {
            var $node = (0, _jquery2.default)(node),
                type = this.getComponentType(node);

            if (type === "menu") {
                return new this.MenuClass($node, this);
            } else if (type === 'item' || type === 'dropdown') {
                return new this.MenuItemClass(node, this);
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Test methods

    }, {
        key: 'getComponentType',
        value: function getComponentType(node) {
            var roles = (0, _core.getRoles)(node);

            if (roles.indexOf('menu') !== -1) {
                return 'menu';
            } else if (roles.indexOf('item') !== -1) {
                return 'item';
            } else if (roles.indexOf('dropdown') !== -1) {
                return 'dropdown';
            }
        }
    }, {
        key: 'startTimer',
        value: function startTimer(name, fn, time) {
            var _this3 = this;

            // Don't create a timer of time < 0 or Infinite.
            if (time < 0 || !Number.isFinite(time)) return;

            var _timer = this.$element.data(name);

            if (_timer) {
                clearTimeout(_timer);
                this.$element.data(name, null);
            }

            _timer = setTimeout(function () {
                _this3.$element.data(name, null);
                fn();
            }, time);

            this.$element.data(name, _timer);
        }
    }, {
        key: 'clearTimer',
        value: function clearTimer(name) {
            var _timer = this.$element.data(name);

            if (_timer) {
                clearTimeout(_timer);
                this.$element.data(name, null);
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Properties

    }, {
        key: 'disabled',
        get: function get() {
            return this.$element.hasClass('disabled');
        }
    }, {
        key: 'isActive',
        get: function get() {
            return this.$element.hasClass('active');
        }
    }], [{
        key: 'getController',
        value: function getController(target) {
            target = (0, _jquery2.default)(target);

            while (target && target.length) {
                if (target.data('menu-controller')) {
                    return target;
                }

                target = target.parent();
            }

            return null;
        }
    }]);

    return MenuView;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'closeOnSelect', [_dec], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'closeOnBlur', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'timeout', [_dec3], {
    enumerable: true,
    initializer: null
})), _class));
exports.default = MenuView;


MenuView.prototype.MenuClass = _Menu2.default;
MenuView.prototype.MenuItemClass = _MenuItem2.default;

/***/ }),

/***/ "./src/menus/menuWidget/Selectable.js":
/*!********************************************!*\
  !*** ./src/menus/menuWidget/Selectable.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _core = __webpack_require__(/*! ./core */ "./src/menus/menuWidget/core.js");

var _types = __webpack_require__(/*! ../../common/types */ "./src/common/types.js");

var _MenuView = __webpack_require__(/*! ./MenuView */ "./src/menus/menuWidget/MenuView.js");

var _MenuView2 = _interopRequireDefault(_MenuView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Selectable = (_dec = (0, _core.boundProperty)(_types.parseBooleanValue, false), _dec2 = (0, _core.boundProperty)(_types.parseIntegerValue, 3), _dec3 = (0, _core.boundProperty)(null, ', '), _dec4 = (0, _core.boundProperty)(null, undefined), _dec5 = (0, _core.boundProperty)(null, 'form'), _dec6 = (0, _core.boundProperty)(null, ', '), _dec7 = (0, _core.boundProperty)((0, _types.choiceType)('change', 'select'), 'select'), (_class = function () {
    function Selectable(selector, config) {
        _classCallCheck(this, Selectable);

        _initDefineProp(this, 'multiSelect', _descriptor, this);

        _initDefineProp(this, 'maxLabels', _descriptor2, this);

        _initDefineProp(this, 'labelDelimiter', _descriptor3, this);

        _initDefineProp(this, 'name', _descriptor4, this);

        _initDefineProp(this, 'export', _descriptor5, this);

        _initDefineProp(this, 'delimiter', _descriptor6, this);

        _initDefineProp(this, 'selectEvent', _descriptor7, this);

        this.$element = (0, _jquery2.default)(selector);

        this._onSelect = this.onSelect.bind(this);
        this.$element.on(_core.events.select, this._onSelect);
        this.$element.data('select-widget', this);

        if (config) {
            this.$element.data(config);
        }

        this.render();
    }

    _createClass(Selectable, [{
        key: 'onSelect',
        value: function onSelect(event) {
            if (this.multiSelect) {
                if (this.isSelected(event.target)) {
                    this.deselect(event.target);
                } else {
                    this.select(event.target);
                }
            } else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.getSelectedItems().toArray()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item !== event.target) {
                            this.deselect(item);
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

                if (!this.isSelected(event.target)) {
                    this.select(event.target);
                }
            }

            this.render();
        }
    }, {
        key: 'deselect',
        value: function deselect(item) {
            (0, _jquery2.default)(item).removeClass('selected');
        }
    }, {
        key: 'select',
        value: function select(item) {
            (0, _jquery2.default)(item).addClass('selected');
        }
    }, {
        key: 'isSelected',
        value: function isSelected(item) {
            return (0, _jquery2.default)(item).hasClass('selected');
        }
    }, {
        key: 'getSelectedItems',
        value: function getSelectedItems() {
            return this.$element.find("[data-role='item'].selected");
        }
    }, {
        key: 'render',
        value: function render() {
            var r = [],
                values = [];

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.getSelectedItems().toArray()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    item = (0, _jquery2.default)(item);
                    var label = item.find("[data-label]");

                    if (label.length) {
                        r.push(label.html());
                    } else {
                        r.push(item.html());
                    }
                    values.push(item.data('value'));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (r.length > this.maxLabels) {
                r = r.length + ' Selected';
            } else {
                r = r.join(this.labelDelimiter);
            }

            this.$element.children("[data-role='chosen']").html(r);

            if (this.name) {
                if (this.export === 'form') {
                    this.$element.children('[name="' + this.name + '"]').remove();

                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var value = _step3.value;

                            if (value) {
                                var i = (0, _jquery2.default)('<input type="hidden" value="' + value + '" name="' + this.name + '" />');
                                this.$element.append(i);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                } else if (this.export === 'csv') {
                    this.$element.children('[name="' + this.name + '"]').remove();
                    var v = values.join(this.delimiter || ',');
                    var _i = (0, _jquery2.default)('<input type="hidden" value="' + v + '" name="' + this.name + '" />');
                    this.$element.append(_i);
                }
            }
        }
    }]);

    return Selectable;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'multiSelect', [_dec], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'maxLabels', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'labelDelimiter', [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'name', [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'export', [_dec5], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'delimiter', [_dec6], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'selectEvent', [_dec7], {
    enumerable: true,
    initializer: null
})), _class));
exports.default = Selectable;

/***/ }),

/***/ "./src/menus/menuWidget/core.js":
/*!**************************************!*\
  !*** ./src/menus/menuWidget/core.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.events = exports.SELECTORS = exports.PREFIX = undefined;
exports.getRoles = getRoles;
exports.hasRole = hasRole;
exports.addRoles = addRoles;
exports.removeRoles = removeRoles;
exports.getAttributeProperty = getAttributeProperty;
exports.getMenuItemProperty = getMenuItemProperty;
exports.menuProperty = menuProperty;
exports.menuItemProperty = menuItemProperty;
exports.boundProperty = boundProperty;
exports.toggleType = toggleType;
exports.autoActivateType = autoActivateType;

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _utility = __webpack_require__(/*! ../../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = exports.PREFIX = 'menus-';

var SELECTORS = exports.SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};

SELECTORS.all = SELECTORS.menu + ', ' + SELECTORS.item + ', ' + SELECTORS.dropdown;
SELECTORS.menuitem = SELECTORS.item + ', ' + SELECTORS.dropdown;

var events = exports.events = {
    activate: PREFIX + 'activate',
    deactivate: PREFIX + 'deactivate',
    open: PREFIX + 'open',
    close: PREFIX + 'close',
    select: PREFIX + 'select'
};

function getRoles(element) {
    var $element = (0, _jquery2.default)(element);
    return ($element.attr("data-role") || "").split(/\s+/);
}

function hasRole(element, role) {
    return getRoles(element).indexOf(role) !== -1;
}

function addRoles(element) {
    var $element = (0, _jquery2.default)(element),
        r = getRoles($element);

    for (var _len = arguments.length, roles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        roles[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = roles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var role = _step.value;

            if (r.indexOf(role) === -1) {
                r.push(role);
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

    r = r.join(" ").trim();
    $element.attr('data-role', r);
    return r;
}

// noinspection JSUnusedGlobalSymbols
function removeRoles(element) {
    var $element = (0, _jquery2.default)(element),
        current = getRoles($element),
        r = [];

    for (var _len2 = arguments.length, roles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        roles[_key2 - 1] = arguments[_key2];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = current[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var role = _step2.value;

            if (roles.indexOf(role) === -1) {
                r.push(role);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    r = r.join(" ").trim();
    $element.attr('data-role', r);
    return r;
}

function getAttributeProperty(target, name, type, defaultValue) {
    var data = [target.$element.data()],
        keys = [name];

    for (var i = 0, l = data.length; i < l; i++) {
        var datum = data[i],
            key = keys[i],
            value = datum[key];

        if (value !== undefined) {
            if (type) {
                try {
                    return type(value);
                } catch (e) {
                    if (!(e instanceof TypeError)) {
                        throw e;
                    }
                }
            } else {
                return value;
            }
        }
    }

    return defaultValue;
}

function getMenuItemProperty(target, propName, parentPropName, type, defaultValue) {
    var data = [target.$element.data(), target.parent];

    var keys = [propName, parentPropName];

    for (var i = 0, l = data.length; i < l; i++) {
        var key = keys[i],
            datum = data[i];

        if (!key || !datum) continue;

        var value = datum[key];

        if (value !== undefined) {
            try {
                if (type) {
                    return type(value);
                } else {
                    return value;
                }
            } catch (e) {
                if (!(e instanceof TypeError)) {
                    throw e;
                }
            }
        }
    }

    return defaultValue;
}

function menuProperty(type, defaultValue) {
    return function (target, name, descriptor) {
        return {
            descriptor: descriptor,

            get: function get() {
                return getAttributeProperty(this, name, type, defaultValue);
            },
            set: function set(value) {
                this.$element.data(name, value);
            }
        };
    };
}

function menuItemProperty(menuProperty, type, defaultValue) {
    return function (target, name, descriptor) {
        return {
            descriptor: descriptor,

            get: function get() {
                return getMenuItemProperty(this, name, menuProperty, type, defaultValue);
            },
            set: function set(value) {
                this.$element.data(name, value);
            }
        };
    };
}

function boundProperty(type, defaultValue) {
    return function (target, name, descriptor) {
        return {
            descriptor: descriptor,

            get: function get() {
                return getAttributeProperty(this, name, type, defaultValue);
            },
            set: function set(value) {
                this.$element.data(name, value);
            }
        };
    };
}

function toggleType(value) {
    if (value === 'false' || value === 'true') {
        value = value === 'true';
    }

    if (typeof value === 'boolean') {
        return "";
    } else if (value === 'click' || value === 'dblclick') {
        return value;
    } else {
        throw new TypeError("Invalid value.");
    }
}

function autoActivateType(value) {
    if (typeof value === 'string') {
        value = value.toLowerCase();

        if (value === 'true') {
            return 0;
        } else if (value === 'false') {
            return -1;
        } else {
            value = (0, _utility.parseInteger)(value, 10);

            if (!Number.isNaN(value)) {
                return value;
            }
        }
    } else if (typeof value === 'boolean') {
        return value ? 0 : -1;
    } else if (typeof value === 'number' && !Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Invalid value.");
}

/***/ }),

/***/ "./src/menus/menuWidget/index.js":
/*!***************************************!*\
  !*** ./src/menus/menuWidget/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loader = __webpack_require__(/*! ../../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _MenuView = __webpack_require__(/*! ./MenuView */ "./src/menus/menuWidget/MenuView.js");

var _MenuView2 = _interopRequireDefault(_MenuView);

var _Menu = __webpack_require__(/*! ./Menu */ "./src/menus/menuWidget/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! ./MenuItem */ "./src/menus/menuWidget/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDown = __webpack_require__(/*! ./DropDown */ "./src/menus/menuWidget/DropDown.js");

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Selectable = __webpack_require__(/*! ./Selectable */ "./src/menus/menuWidget/Selectable.js");

var _Selectable2 = _interopRequireDefault(_Selectable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_loader2.default.register('menu', function (element) {
    return new _MenuView2.default(element);
});

_loader2.default.register('dropdown', function (element) {
    return new _DropDown2.default(element);
});

_loader2.default.register('selectable', function (element) {
    return new _Selectable2.default(element);
});

window.MenuView = _MenuView2.default;
window.Menu = _Menu2.default;
window.MenuItem = _MenuItem2.default;

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
exports.randomChoice = randomChoice;
exports.isMouseLeave = isMouseLeave;
exports.isMouseEnter = isMouseEnter;
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

function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isMouseLeave(target, event) {
    if (target.jquery) target = target[0];
    return !target.contains(event.relatedTarget);
}

function isMouseEnter(target, event) {
    if (target.jquery) target = target[0];
    return !target.contains(event.relatedTarget);
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=vortex.bundle.js.map