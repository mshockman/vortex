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

__webpack_require__(/*! ./menus */ "./src/menus/index.js");

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

/***/ "./src/menus/Menu.js":
/*!***************************!*\
  !*** ./src/menus/Menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Package for create menus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Menus are defined and controlled using their dom structure.  Attributes are stored on the individual nodes and are
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * accessed and retrieved using jQueries data method.  So you can use manual data-attribute html attributes in your code
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * or programmically assign attributes using the data method.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * All events are attached to the root element of the menu.  Any incoming events are delegated from their to the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * necessary menu nodes if needed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The data-role attribute determines what kind of menu node an element is.  When looking for child and parent nodes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * any element that isn't marked with a data-role attribute is ignored.  Their are three types of nodes in the menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Those nodes are:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - menu;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - item;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - dropdown;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A menu is a collection of dropdown items and items.  A dropdown will add another layer to the menu tree.  An item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * is a selectable item and shouldn't have a submenu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * There are three places where attributes can be set.  On the root element, on the menu elements or on the item elements.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Each of these nodes have different attributes that can be modified.  Some attributes are inherited from their parents
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * if they are not manually set on child element.  All attributes come with sensible defaults.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Root attribute
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - closeOnSelect
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - closeOnBlur
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - timeout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - positioner
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Menu attributes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - openDelay {Number} Default 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Adds a delay after an item activates before it shows it's menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - multiple {boolean} Default false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   If true multiple items can be active at the same time for the menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - autoActivate {Number|boolean} Default true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Controls if child items activate when the mouse moves over them when the menu is not active.  This is mostly used
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   for root elements because most of the time menus are hidden when they are not active so child items cannot be hovered
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   over.  If a number greater than or equal to 0 The item will activate after the given amount of time in milliseconds.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   If true if item will activate instantly.  If anything else the item will never activate on mouse over.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   This can be overidden by autoActivate at the item level.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - itemDelay {Number|boolean} Default 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Controls if child items activate when the mouse moves over them when the menu is already active.  If >= 0 the item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   will activate after the given amount of time.  If true if item will never activate.  This attribute can be overridden
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   at the item level by setting the delay attribute.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - toggleItems {boolean|'on'|'off'|'both'}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   Controls how the menu's child items behave when clicked.  This can be overridden by the items toggle property.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   If true or 'both' the item will toggle on and off when clicked.  If 'on' the item will only toggle on.  If 'off'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   the item will only toggle off.  If false the item will never toggle on or off.  This is primarily used by dropdown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   items as items will be selected when clicked and turn off the menu if close on select is true.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - menuToggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - positioner
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Item attributes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - selectable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - autoActivate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

var _core = __webpack_require__(/*! ./core */ "./src/menus/core.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var POSITIONER_REGISTRY = {};

function menuTemplate() {
    return '<div class=\'menu\' data-role=\'menu\'>';
}

/**
 * A grouping of items that act in sync together.
 */

var Menu = function () {
    function Menu(_ref) {
        var _ref$target = _ref.target,
            target = _ref$target === undefined ? menuTemplate : _ref$target,
            _ref$timeout = _ref.timeout,
            timeout = _ref$timeout === undefined ? null : _ref$timeout,
            _ref$closeOnBlur = _ref.closeOnBlur,
            closeOnBlur = _ref$closeOnBlur === undefined ? null : _ref$closeOnBlur,
            _ref$closeOnSelect = _ref.closeOnSelect,
            closeOnSelect = _ref$closeOnSelect === undefined ? null : _ref$closeOnSelect,
            _ref$positioner = _ref.positioner,
            positioner = _ref$positioner === undefined ? null : _ref$positioner,
            _ref$role = _ref.role,
            role = _ref$role === undefined ? null : _ref$role;

        _classCallCheck(this, Menu);

        this._onMouseOver = this.onMouseOver.bind(this);
        this._onMouseOut = this.onMouseOut.bind(this);
        this._onClick = this.onClick.bind(this);
        this._onSelect = this.onSelect.bind(this);
        this._onDocumentClick = this.onDocumentClick.bind(this);

        if (typeof target === 'function') {
            this.setElement(target(this));
        } else {
            this.setElement(target);
        }

        var config = {
            timeout: timeout,
            closeOnBlur: closeOnBlur,
            closeOnSelect: closeOnSelect,
            positioner: positioner
        };

        for (var key in config) {
            if (config.hasOwnProperty(key) && config[key] !== null && config[key] !== undefined) {
                this.$element.data(key, config[key]);
            }
        }

        if (role) {
            (0, _core.addRole)(this.$element, role);
        }
    }

    _createClass(Menu, [{
        key: 'setElement',
        value: function setElement(element) {
            if (this.$element) {
                this.destroy();
            }

            this.$element = (0, _jquery2.default)(element);
            this.$element.data(_core.CONTROLLER, this);
            this.$element.on('click', this._onClick);
            this.$element.on('mouseover', this._onMouseOver);
            this.$element.on('mouseout', this._onMouseOut);
            this.$element.on(_core.EVENTS.select, this._onSelect);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.$element.off('click', this._onClick);
            this.$element.off('mouseover', this._onMouseOver);
            this.$element.off('mouseout', this._onMouseOut);
            this.$element.off(_core.EVENTS.select, this._onSelect);

            if (this.$doc) {
                this.$doc.off('click', this._onDocumentClick);
                this.$doc = null;
            }

            this.$element.data(_core.CONTROLLER, null);
            this.$element = null;
        }

        // noinspection JSUnusedGlobalSymbols
        /**
         * Appends the menu to the selector.
         * @param selector
         * @return {*}
         */

    }, {
        key: 'appendTo',
        value: function appendTo(selector) {
            return this.$element.appendTo(selector);
        }

        // noinspection JSUnusedGlobalSymbols

    }, {
        key: 'getInstance',
        value: function getInstance(selector) {
            return (0, _jquery2.default)(selector).data(_core.CONTROLLER);
        }

        //------------------------------------------------------------------------------------------------------------------
        // Actions

    }, {
        key: 'activate',
        value: function activate(node) {
            var _this = this;

            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            node = (0, _jquery2.default)(node, this.$element);

            if (delay === true) {
                return;
            }

            var activate = function activate() {
                var parent = _this.getParentNode(node),
                    type = _this.getNodeType(node);

                // Clear _activateTimer reference.
                node.data('_cancelActivationTimer', null);

                // If parent exists activate it if it is not.
                if (parent.length && !_this.isActive(parent)) {
                    _this.activate(parent);
                }

                // Add class and trigger events.
                node.addClass(_core.CLASSNAMES.active);
                node.trigger(_core.EVENTS.activate, _this);

                // Clear other active items if multiple is not true.
                if (parent.length && !_this.getMultiple(parent)) {
                    _this.getActiveChildren(parent).not(node).each(function (x, item) {
                        return _this.deactivate(item);
                    });
                }

                // If it is a dropdown the menu should be shown.
                if (type === 'dropdown') {
                    var submenu = _this.getItemSubMenu(node);

                    if (submenu.length) {
                        _this.openMenu(submenu, _this.getMenuOpenDelay(submenu));
                    }
                }

                // If activating the root node attach document click handler to document to watch
                // for clicks outside the root element.
                if (node.is(_this.$element) && _this.closeOnBlur && !_this.$doc) {
                    _this.$doc = (0, _jquery2.default)(document);
                    _this.$doc.on('click', _this._onDocumentClick);
                }
            };

            var activateTimer = node.data("_cancelActivationTimer");

            if (activateTimer) {
                activateTimer();
            }

            var cancel = null;

            var r = new Promise(function (resolve) {
                if (typeof delay === 'number' && Number.isFinite(delay) && delay >= 0) {
                    var timer = setTimeout(function () {
                        activate();
                        resolve('activated');
                    }, delay);

                    cancel = function cancel() {
                        if (timer) {
                            node.data('_cancelActivationTimer', null);
                            clearTimeout(timer);
                            timer = null;
                            resolve('canceled');
                        }
                    };

                    node.data('_cancelActivationTimer', cancel);
                } else {
                    activate();
                    resolve('activated');
                }
            });

            r.cancel = cancel;

            return r;
        }
    }, {
        key: 'deactivate',
        value: function deactivate(node) {
            var _this2 = this;

            node = (0, _jquery2.default)(node);
            var type = this.getNodeType(node);
            var activateTimer = node.data("_cancelActivationTimer");

            if (activateTimer) {
                activateTimer();
            }

            if (this.isActive(node)) {
                node.removeClass(_core.CLASSNAMES.active);
                node.trigger(_core.EVENTS.deactivate, this);

                if (node.is(this.$element) && this.$doc) {
                    this.$doc.off('click', this._onDocumentClick);
                    this.$doc = null;
                }

                this.getActiveChildren(node).each(function (x, child) {
                    return _this2.deactivate(child);
                });

                if (type === 'dropdown') {
                    this.closeMenu(this.getItemSubMenu(node));
                }

                if (type === 'item' || type === 'dropdown') {
                    var $parentMenu = this.getParentNode(node, 'menu');

                    if (this.isActive($parentMenu) && !this.getActiveChildren($parentMenu).length) {
                        this.deactivate($parentMenu);
                    }
                }
            }
        }
    }, {
        key: 'openMenu',
        value: function openMenu(menu) {
            var _this3 = this;

            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            menu = (0, _jquery2.default)(menu, this.$element);

            if (!this.isOpen(menu)) {
                var open = function open() {
                    menu.data("_cancelOpenTimer", null);
                    menu.addClass(_core.CLASSNAMES.open);

                    var positioner = _this3.getPositioner(menu);

                    if (positioner) {
                        positioner(menu, _this3);
                    }

                    menu.trigger(_core.EVENTS.open, _this3);
                };

                var openTimer = menu.data("_cancelOpenTimer");

                if (openTimer) {
                    openTimer();
                }

                var cancel = null;

                var r = new Promise(function (resolve) {
                    if (typeof delay === 'number' && delay >= 0 && Number.isFinite(delay)) {
                        var timer = setTimeout(function () {
                            timer = null;
                            open();
                            resolve('opened');
                        }, delay);

                        cancel = function cancel() {
                            if (timer) {
                                clearTimeout(timer);
                                timer = null;
                                resolve("canceled");
                            }
                        };

                        menu.data("_cancelOpenTimer", cancel);
                    } else {
                        open();
                        resolve("opened");
                    }
                });

                r.cancel = cancel;
                return r;
            }
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu(menu) {
            menu = (0, _jquery2.default)(menu, this.$element);
            var openTimer = menu.data("_cancelOpenTimer");

            if (openTimer) {
                openTimer();
            }

            if (this.isOpen(menu)) {
                menu.removeClass(_core.CLASSNAMES.open);
                menu.trigger(_core.EVENTS.close, this);
            }
        }
    }, {
        key: 'select',
        value: function select(node) {
            return (0, _jquery2.default)(node, this.$element).trigger(_core.EVENTS.select, this);
        }

        //------------------------------------------------------------------------------------------------------------------
        // Node Transversing

        // noinspection JSUnusedGlobalSymbols
        /**
         * Returns the child items for menu nodes and the submenu for dropdown nodes.
         * @param node
         * @return {*}
         */

    }, {
        key: 'getChildren',
        value: function getChildren(node) {
            var type = this.getNodeType(node);

            if (type === 'dropdown') {
                return this.getItemSubMenu(node);
            } else if (type === 'menu') {
                return this.getChildMenuItems(node);
            }
        }
    }, {
        key: 'getChildMenuItems',
        value: function getChildMenuItems(node) {
            var _this4 = this;

            node = (0, _jquery2.default)(node, this.$element);
            var children = node.find(_core.SELECTORS.menuitem);

            return children.filter(function (x, item) {
                return _this4.getParentNode(item).is(node);
            });
        }

        // noinspection JSUnusedGlobalSymbols
        /**
         * Returns the direct child menus for the node.
         * @param node
         * @return {*}
         */

    }, {
        key: 'getChildMenus',
        value: function getChildMenus(node) {
            var _this5 = this;

            node = (0, _jquery2.default)(node, this.$element);
            var type = this.getNodeType(node);
            var children = node.find(_core.SELECTORS.menu);

            if (type === 'dropdown') {
                return children.filter(function (x, item) {
                    return _this5.getParentNode(item).is(node);
                });
            } else if (type === 'menu') {
                return children.filter(function (x, item) {
                    return _this5.getParentNode(item).is(node);
                });
            } else {
                return (0, _jquery2.default)();
            }
        }
    }, {
        key: 'getItemSubMenu',
        value: function getItemSubMenu(item) {
            return (0, _jquery2.default)(item, this.$element).children(_core.SELECTORS.menu).eq(0);
        }
    }, {
        key: 'getParentNode',
        value: function getParentNode(node) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

            return (0, _jquery2.default)(node, this.$element).parent().closest(_core.SELECTORS[type], this.$element);
        }
    }, {
        key: 'getClosestNode',
        value: function getClosestNode(node) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

            var selector = _core.SELECTORS[type];
            node = (0, _jquery2.default)(node, this.$element);
            return node.closest(selector, this.$element);
        }
    }, {
        key: 'getActiveChildren',
        value: function getActiveChildren(node) {
            var _this6 = this;

            node = (0, _jquery2.default)(node, this.$element);
            return node.find(_core.SELECTORS.all).filter(function (x, child) {
                return _this6.getParentNode(child).is(node) && (0, _jquery2.default)(child).hasClass(_core.CLASSNAMES.active);
            });
        }

        //------------------------------------------------------------------------------------------------------------------
        // State testing

    }, {
        key: 'isActive',
        value: function isActive(node) {
            return (0, _jquery2.default)(node, this.$element).hasClass(_core.CLASSNAMES.active);
        }
    }, {
        key: 'isOpen',
        value: function isOpen(node) {
            return (0, _jquery2.default)(node, this.$element).hasClass(_core.CLASSNAMES.open);
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled(node) {
            return !!(0, _jquery2.default)(node).closest('.' + _core.CLASSNAMES.disabled, this.$element).length;
        }

        /**
         * Return the type of the given node.
         * @param node {{length, is}}
         * @return {null|'menu'|'dropdown'|'item'}
         */

    }, {
        key: 'getNodeType',
        value: function getNodeType(node) {
            node = (0, _jquery2.default)(node, this.$element);

            if (!node.length) {
                return null;
            } else if (node.is(_core.SELECTORS.menu)) {
                return 'menu';
            } else if (node.is(_core.SELECTORS.dropdown)) {
                return 'dropdown';
            } else if (node.is(_core.SELECTORS.item)) {
                return 'item';
            }
        }
    }, {
        key: 'isMenuItem',
        value: function isMenuItem(node) {
            var type = this.getNodeType(node);
            return type === 'dropdown' || type === 'item';
        }
    }, {
        key: 'isDropDown',
        value: function isDropDown(node) {
            return this.getNodeType(node) === 'dropdown';
        }
    }, {
        key: 'isMenu',
        value: function isMenu(node) {
            return this.getNodeType(node) === 'menu';
        }

        //------------------------------------------------------------------------------------------------------------------
        // Events

    }, {
        key: 'onClick',
        value: function onClick(event) {
            if (this.isDisabled(event.target)) return;

            var $target = this.getClosestNode(event.target);

            if (this.isMenuItem($target)) {
                return this._onClickMenuItem(event);
            } else if (this.isMenu($target)) {
                return this._onClickMenu(event);
            }
        }
    }, {
        key: 'onMouseOver',
        value: function onMouseOver(event) {
            if (this.isDisabled(event.target)) return;

            var $target = this.getClosestNode(event.target);

            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }

            if ($target[0].contains(event.relatedTarget)) return;

            if (this.isMenuItem($target)) {
                return this._onMouseOverMenuItem(event);
            } else if (this.isMenu($target)) {
                return this._onMouseOverMenu(event);
            }
        }
    }, {
        key: 'onMouseOut',
        value: function onMouseOut(event) {
            var _this7 = this;

            if (this.isDisabled(event.target)) return;

            // If the mouse leaves the root item and timeout is set start the timer.
            if (!this._timer && typeof this.timeout === 'number' && this.timeout >= 0 && !this.$element[0].contains(event.relatedTarget)) {
                this._timer = setTimeout(function () {
                    _this7._timer = null;
                    _this7.deactivate(_this7.$element);
                }, this.timeout);
            }

            var $target = this.getClosestNode(event.target);

            if ($target[0].contains(event.relatedTarget)) return;

            if (this.isMenuItem($target)) {
                return this._onMouseOutMenuItem(event);
            } else if (this.isMenu($target)) {
                return this._onMouseOutMenu(event);
            }
        }
    }, {
        key: 'onDocumentClick',
        value: function onDocumentClick(event) {
            if (!this.$element[0].contains(event.target)) {
                this.$doc.off('click', this._onDocumentClick);
                this.$doc = null;
                this.deactivate(this.$element);
            } else if (!this.isActive(this.$element)) {
                this.$doc = null;
                this.deactivate(this.$element);
            }
        }
    }, {
        key: 'onSelect',
        value: function onSelect() {
            if (this.isActive(this.$element) && this.closeOnSelect) {
                this.deactivate(this.$element);
            }
        }
    }, {
        key: '_onClickMenuItem',
        value: function _onClickMenuItem(event) {
            var $target = this.getClosestNode(event.target),
                type = this.getNodeType($target),
                isActive = this.isActive($target),
                $parent = this.getParentNode($target, 'menu'),
                toggle = this.getItemToggle($parent, $target);

            if (type === 'item') {
                if (this.getSelectable($target)) {
                    this.select($target);
                }
            } else {
                if (!isActive && (toggle === 'both' || toggle === true || toggle === 'on')) {
                    this.activate($target);
                } else if (isActive && (toggle === 'off' || toggle === 'both' || toggle === true)) {
                    this.deactivate($target);
                }
            }
        }
    }, {
        key: '_onMouseOverMenuItem',
        value: function _onMouseOverMenuItem(event) {
            var $target = this.getClosestNode(event.target),
                $parent = this.getParentNode($target, 'menu');

            if (!this.isActive($target)) {
                var delay = this.getItemActivationDelay($parent, $target);
                var timer = this.activate($target, delay);

                if (timer && timer.cancel) {
                    var cancel = function cancel(event) {
                        if (!$target[0].contains(event.relatedTarget)) {
                            timer.cancel();
                        }
                    };

                    $target.on('mouseout', cancel);

                    timer.then(function () {
                        $target.off('mouseout', cancel);
                    });
                }
            }
        }
    }, {
        key: '_onMouseOutMenuItem',
        value: function _onMouseOutMenuItem(event) {
            var $target = this.getClosestNode(event.target);

            if (!this.isDropDown($target)) {
                this.deactivate($target);
            }
        }
    }, {
        key: '_onClickMenu',
        value: function _onClickMenu(event) {
            var $target = this.getClosestNode(event.target),
                toggle = (0, _utility.parseBooleanString)($target.data('menuToggle'));

            if (this.isActive($target)) {
                if (toggle === 'off' || toggle === 'both' || toggle === true) {
                    this.deactivate($target);
                }
            } else {
                if (toggle === 'on' || toggle === 'both' || toggle === true) {
                    this.activate($target);
                }
            }
        }
    }, {
        key: '_onMouseOverMenu',
        value: function _onMouseOverMenu(event) {}
    }, {
        key: '_onMouseOutMenu',
        value: function _onMouseOutMenu(event) {}

        //------------------------------------------------------------------------------------------------------------------
        // Getter functions

    }, {
        key: 'getItemToggle',
        value: function getItemToggle(menu, item) {
            menu = (0, _jquery2.default)(menu);
            item = (0, _jquery2.default)(item);

            var toggle = (0, _utility.firstValue)([item.data('toggle'), menu.data('toggleItems'), 'both']);

            if (toggle === 'true' || toggle === 'false') {
                return toggle === 'true';
            } else {
                return toggle;
            }
        }
    }, {
        key: 'getMenuOpenDelay',
        value: function getMenuOpenDelay(menu) {
            menu = (0, _jquery2.default)(menu);
            var value = menu.data('openDelay');

            if (value === 'true' || value === 'false') {
                return value === 'true';
            } else if (typeof value === 'number') {
                return (0, _utility.parseInteger)(value, null, 10);
            } else {
                return value;
            }
        }
    }, {
        key: 'getItemActivationDelay',
        value: function getItemActivationDelay(menu, item) {
            menu = (0, _jquery2.default)(menu);
            item = (0, _jquery2.default)(item);

            var isParentActive = this.isActive(menu);

            if (!isParentActive) {
                var value = (0, _utility.firstValue)([item.data('autoActivate'), menu.data('autoActivate'), 0]);

                if (value === 'true' || value === 'false') {
                    return value !== 'true';
                } else if (typeof value === 'string') {
                    return parseInt(value, 10);
                } else if (typeof value === 'boolean') {
                    return !value;
                } else {
                    return value;
                }
            } else {
                var delay = (0, _utility.firstValue)([item.data('delay'), menu.data('itemDelay'), false]);

                if (delay === 'true' || delay === 'false') {
                    return delay === 'true';
                } else if (typeof delay === 'string') {
                    return parseInt(delay, 10);
                } else {
                    return delay;
                }
            }
        }
    }, {
        key: 'getMultiple',
        value: function getMultiple(menu) {
            return (0, _utility.parseBoolean)((0, _jquery2.default)(menu).data("multiple"), false);
        }
    }, {
        key: 'getSelectable',
        value: function getSelectable(item) {
            var value = (0, _jquery2.default)(item).data("selectable");

            if (value === undefined || value === null) {
                return true;
            } else if (value === 'true' || value === 'false') {
                return value === 'true';
            } else {
                return value;
            }
        }
    }, {
        key: 'getPositioner',
        value: function getPositioner(menu) {
            menu = (0, _jquery2.default)(menu);
            var value = (0, _utility.firstValue)([menu.data("positioner"), this.$element.data("positioner")]);

            if (typeof value === 'string') {
                return POSITIONER_REGISTRY[value];
            } else {
                return value;
            }
        }

        //------------------------------------------------------------------------------------------------------------------
        // Properties

    }, {
        key: 'timeout',
        get: function get() {
            var value = this.$element.data("timeout");

            if (typeof value === 'string') {
                value = parseInt(value, 10);

                if (!Number.isNaN(value) && value >= 0) {
                    return value;
                }
            } else if (typeof value === 'number') {
                if (value >= 0 && !Number.isNaN(value)) {
                    return value;
                }
            }

            return null;
        }
    }, {
        key: 'closeOnBlur',
        get: function get() {
            var value = this.$element.data("closeOnBlur");

            if (value === 'true' || value === 'false') {
                return value === 'true';
            } else if (value !== undefined && value !== null) {
                return value;
            } else {
                return true;
            }
        }
    }, {
        key: 'closeOnSelect',
        get: function get() {
            var value = this.$element.data("closeOnSelect");

            if (value === 'true' || value === 'false') {
                return value === 'true';
            } else if (value !== undefined && value !== null) {
                return value;
            } else {
                return true;
            }
        }
    }]);

    return Menu;
}();

exports.default = Menu;


Menu.EVENTS = _core.EVENTS;
Menu.PREFIX = _core.PREFIX;
Menu.CONTROLLER = _core.CONTROLLER;
Menu.CLASSNAMES = _core.CLASSNAMES;
Menu.SELECTORS = _core.SELECTORS;
Menu.POSITIONER_REGISTRY = POSITIONER_REGISTRY;

/***/ }),

/***/ "./src/menus/core.js":
/*!***************************!*\
  !*** ./src/menus/core.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addRole = addRole;
exports.removeRole = removeRole;
exports.hasRoles = hasRoles;
exports.getRoles = getRoles;
var PREFIX = exports.PREFIX = 'menus.',
    CONTROLLER = exports.CONTROLLER = PREFIX + "menu";

var SELECTORS = exports.SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};

SELECTORS.all = SELECTORS.menu + ", " + SELECTORS.item + ", " + SELECTORS.dropdown;
SELECTORS.menuitem = SELECTORS.item + ", " + SELECTORS.dropdown;

var CLASSNAMES = exports.CLASSNAMES = {
    open: 'open',
    active: 'active',
    disabled: 'disabled'
};

var EVENTS = exports.EVENTS = {
    select: PREFIX + "select",
    activate: PREFIX + "activate",
    deactivate: PREFIX + "deactivate",
    open: PREFIX + "open",
    close: PREFIX + "close"
};

function addRole(element) {
    element = $(element);
    var r = getRoles(element);

    for (var _len = arguments.length, roles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        roles[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = roles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var i = r.indexOf(item);

            if (i === -1) {
                r.push(item);
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

    r = r.join(' ');
    element.attr("data-role", r);
    return r;
}

function removeRole(element) {
    element = $(element);
    var r = getRoles(element);

    for (var _len2 = arguments.length, roles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        roles[_key2 - 1] = arguments[_key2];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = roles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            var i = r.indexOf(item);

            if (i !== -1) {
                r.splice(i, 1);
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

    r = r.join(' ');
    element.attr("data-role", r);
    return r;
}

function hasRoles(element) {
    element = $(element);
    var r = getRoles(element);

    for (var _len3 = arguments.length, roles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        roles[_key3 - 1] = arguments[_key3];
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = roles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = _step3.value;

            var i = r.indexOf(item);

            if (i === -1) {
                return false;
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

    return true;
}

function getRoles(element) {
    element = $(element);
    var r = element.attr("data-role");

    if (!r) {
        r = [];
    } else {
        r = r.split('/s+/');
    }

    return r;
}

/***/ }),

/***/ "./src/menus/index.js":
/*!****************************!*\
  !*** ./src/menus/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _Menu = __webpack_require__(/*! ./Menu */ "./src/menus/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

__webpack_require__(/*! ./loaders */ "./src/menus/loaders.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu2.default;


window.Menu = _Menu2.default;

/***/ }),

/***/ "./src/menus/loaders.js":
/*!******************************!*\
  !*** ./src/menus/loaders.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loader = __webpack_require__(/*! ../loader */ "./src/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _Menu = __webpack_require__(/*! ./Menu */ "./src/menus/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_loader2.default.register('menu', function (target, config) {
    config.target = target;
    return new _Menu2.default(config);
});

_loader2.default.register('dropdown', function (target, config) {
    config.role = "dropdown";
    config.target = target;
    var r = new _Menu2.default(config);

    (0, _utility.setDefaultValues)(r.$element.data(), {
        timeout: false,
        closeOnBlur: true,
        closeOnSelect: true,
        toggle: true,
        autoActivate: false
    });

    return r;
});

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