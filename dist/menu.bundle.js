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
/******/ 	__webpack_require__.p = "/static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/menus/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _utility = __webpack_require__(/*! ../utility */ "./src/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PREFIX = 'menus.',
    CONTROLLER = PREFIX + 'menu';

var SELECTORS = {
    menu: "[data-role~='menu']",
    item: "[data-role~='item']",
    dropdown: "[data-role~='dropdown']"
};
SELECTORS.all = SELECTORS.menu + ', ' + SELECTORS.item + ', ' + SELECTORS.dropdown;
SELECTORS.menuitem = SELECTORS.item + ', ' + SELECTORS.dropdown;

var CLASSNAMES = {
    open: 'open',
    active: 'active',
    disabled: 'disabled'
};

var EVENTS = {
    select: PREFIX + 'select',
    activate: PREFIX + 'activate',
    deactivate: PREFIX + 'deactivate',
    open: PREFIX + 'open',
    close: PREFIX + 'close'
};

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
            timeout = _ref$timeout === undefined ? 1000 : _ref$timeout,
            _ref$closeOnBlur = _ref.closeOnBlur,
            closeOnBlur = _ref$closeOnBlur === undefined ? true : _ref$closeOnBlur,
            _ref$closeOnSelect = _ref.closeOnSelect,
            closeOnSelect = _ref$closeOnSelect === undefined ? true : _ref$closeOnSelect;

        _classCallCheck(this, Menu);

        this.timeout = timeout;
        this.closeOnBlur = closeOnBlur;
        this.closeOnSelect = closeOnSelect;

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
    }

    _createClass(Menu, [{
        key: 'setElement',
        value: function setElement(element) {
            if (this.$element) {
                this.destroy();
            }

            this.$element = (0, _jquery2.default)(element);
            this.$element.data(CONTROLLER, this);
            this.$element.on('click', this._onClick);
            this.$element.on('mouseover', this._onMouseOver);
            this.$element.on('mouseout', this._onMouseOut);
            this.$element.on(EVENTS.select, this._onSelect);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.$element.off('click', this._onClick);
            this.$element.off('mouseover', this._onMouseOver);
            this.$element.off('mouseout', this._onMouseOut);
            this.$element.off(EVENTS.select, this._onSelect);

            if (this.$doc) {
                this.$doc.off('click', this._onDocumentClick);
                this.$doc = null;
            }

            this.$element.data(CONTROLLER, null);
            this.$element = null;
        }
    }, {
        key: 'appendTo',
        value: function appendTo(selector) {
            return this.$element.appendTo(selector);
        }

        //------------------------------------------------------------------------------------------------------------------
        // Actions

    }, {
        key: 'activate',
        value: function activate(node) {
            var _this = this;

            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            node = (0, _jquery2.default)(node, this.$element);

            var activate = function activate() {
                var parent = _this.getParentNode(node),
                    type = _this.getNodeType(node);

                // Clear _activateTimer reference.
                node.data('_activateTimer', null);

                // If parent exists activate it if it is not.
                if (parent.length && !_this.isActive(parent)) {
                    _this.activate(parent);
                }

                // Add class and trigger events.
                node.addClass(CLASSNAMES.active);
                node.trigger(EVENTS.activate, _this);

                // Clear other active items if multiple is not true.
                if (parent.length) {
                    var multiple = (0, _utility.parseBoolean)(parent.data("multiple"), false);

                    if (!multiple) {
                        _this.getActiveChildren(parent).not(node).each(function (x, item) {
                            return _this.deactivate(item);
                        });
                    }
                }

                // If it is a dropdown the menu should be shown.
                if (type === 'dropdown') {
                    var submenu = _this.getItemSubMenu(node),
                        menuDelay = (0, _utility.parseInteger)(submenu.data('delay'), false, 10);

                    if (submenu.length) {
                        _this.openMenu(submenu, menuDelay);
                    }
                }

                // If activating the root node attach document click handler to document to watch
                // for clicks outside the root element.
                if (node.is(_this.$element) && _this.closeOnBlur && !_this.$doc) {
                    _this.$doc = (0, _jquery2.default)(document);
                    _this.$doc.on('click', _this._onDocumentClick);
                }
            };

            var activateTimer = node.data("_activateTimer");

            if (activateTimer) {
                clearTimeout("_activateTimer");
                node.data("_activateTimer", null);
            }

            if (typeof delay === 'number' && Number.isFinite(delay) && delay >= 0) {
                node.data('_activateTimer', setTimeout(activate, delay));
            } else {
                activate();
            }
        }
    }, {
        key: 'deactivate',
        value: function deactivate(node) {
            var _this2 = this;

            node = (0, _jquery2.default)(node);
            var type = this.getNodeType(node);
            var activateTimer = node.data("_activateTimer");

            if (activateTimer) {
                clearTimeout(activateTimer);
                node.data("_activateTimer", null);
            }

            if (this.isActive(node)) {
                node.removeClass(CLASSNAMES.active);
                node.trigger(EVENTS.deactivate, this);

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
                    menu.data("_openTimer", null);
                    menu.addClass(CLASSNAMES.open);
                    menu.trigger(EVENTS.open, _this3);
                };

                var openTimer = menu.data("_openTimer");

                if (openTimer) {
                    clearTimeout("_openTimer");
                    menu.data("_openTimer", null);
                }

                if (typeof delay === 'number' && delay >= 0 && Number.isFinite(delay)) {
                    openTimer = setTimeout(open, delay);
                    menu.data("_openTimer", openTimer);
                } else {
                    open();
                }
            }
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu(menu) {
            menu = (0, _jquery2.default)(menu, this.$element);
            var openTimer = menu.data("_openTimer");

            if (openTimer) {
                clearTimeout(openTimer);
                menu.data("_openTimer", null);
            }

            if (this.isOpen(menu)) {
                menu.removeClass(CLASSNAMES.open);
                menu.trigger(EVENTS.close, this);
            }
        }
    }, {
        key: 'select',
        value: function select(node) {
            return (0, _jquery2.default)(node, this.$element).trigger(EVENTS.select, this);
        }

        //------------------------------------------------------------------------------------------------------------------
        // Node Transversing

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
            var children = node.find(SELECTORS.menuitem);

            return children.filter(function (x, item) {
                return _this4.getParentNode(item).is(node);
            });
        }
    }, {
        key: 'getChildMenus',
        value: function getChildMenus(node) {
            var _this5 = this;

            node = (0, _jquery2.default)(node, this.$element);
            var type = this.getNodeType(node);
            var children = node.find(SELECTORS.menu);

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
            return (0, _jquery2.default)(item, this.$element).children(SELECTORS.menu).eq(0);
        }
    }, {
        key: 'getParentNode',
        value: function getParentNode(node) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

            return (0, _jquery2.default)(node, this.$element).parent().closest(SELECTORS[type], this.$element);
        }
    }, {
        key: 'getClosestNode',
        value: function getClosestNode(node) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

            var selector = SELECTORS[type];
            node = (0, _jquery2.default)(node, this.$element);
            return node.closest(selector, this.$element);
        }
    }, {
        key: 'getActiveChildren',
        value: function getActiveChildren(node) {
            var _this6 = this;

            node = (0, _jquery2.default)(node, this.$element);
            return node.find(SELECTORS.all).filter(function (x, child) {
                return _this6.getParentNode(child).is(node) && (0, _jquery2.default)(child).hasClass(CLASSNAMES.active);
            });
        }

        //------------------------------------------------------------------------------------------------------------------
        // State testing

    }, {
        key: 'isActive',
        value: function isActive(node) {
            return (0, _jquery2.default)(node, this.$element).hasClass(CLASSNAMES.active);
        }
    }, {
        key: 'isOpen',
        value: function isOpen(node) {
            return (0, _jquery2.default)(node, this.$element).hasClass(CLASSNAMES.open);
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled(node) {
            return !!(0, _jquery2.default)(node).closest('.' + CLASSNAMES.disabled, this.$element).length;
        }
    }, {
        key: 'getNodeType',
        value: function getNodeType(node) {
            node = (0, _jquery2.default)(node, this.$element);

            if (!node.length) {
                return null;
            } else if (node.is(SELECTORS.menu)) {
                return 'menu';
            } else if (node.is(SELECTORS.dropdown)) {
                return 'dropdown';
            } else if (node.is(SELECTORS.item)) {
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
                $parent = this.getParentNode($target, 'menu');

            var toggle = (0, _utility.parseBooleanString)((0, _utility.firstValue)([$target.data('toggle'), $parent.data('toggleItems'), 'both']));

            if (type === 'item') {
                this.select($target);
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
            var _this8 = this;

            var $target = this.getClosestNode(event.target),
                $parent = this.getParentNode($target, 'menu'),
                parentIsActive = this.isActive($parent);

            var autoActivate = (0, _utility.firstValue)([$target.data('autoActivate'), $parent.data('autoActivate'), 0]),
                delay = (0, _utility.firstValue)([(0, _utility.parseInteger)($target.data('delay'), null, 10), false]);

            if (autoActivate === 'true' || autoActivate === 'false') {
                autoActivate = autoActivate === 'true';
            } else {
                autoActivate = (0, _utility.parseInteger)(autoActivate, autoActivate, 10);
            }

            // If the item is already active or it doesn't activate on this
            // event return.
            if (this.isActive($target)) return;

            var activate = void 0;

            if (!parentIsActive) {
                activate = autoActivate;
            } else {
                activate = (0, _utility.parseBooleanOrNumber)(delay, false, 10);

                if (typeof activate === 'boolean') {
                    activate = !activate;
                }
            }

            if (typeof activate === 'number' && activate >= 0) {
                var _cancel = void 0,
                    timer = void 0;

                timer = setTimeout(function () {
                    $target.off('mouseout', _cancel);
                    _this8.activate($target);
                }, activate);

                _cancel = function cancel(event) {
                    if (!event.target.contains(event.relatedTarget)) {
                        clearTimeout(timer);
                        $target.off('mouseout', _cancel);
                    }
                };

                $target.on('mouseout', _cancel);
            } else if (activate === true) {
                this.activate($target);
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
    }]);

    return Menu;
}();

exports.default = Menu;

/***/ }),

/***/ "./src/menus/MenuItem.js":
/*!*******************************!*\
  !*** ./src/menus/MenuItem.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuItem = function MenuItem() {
    _classCallCheck(this, MenuItem);
};

exports.default = MenuItem;

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
exports.MenuItem = exports.Menu = undefined;

var _Menu = __webpack_require__(/*! ./Menu */ "./src/menus/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! ./MenuItem */ "./src/menus/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu2.default;
exports.MenuItem = _MenuItem2.default;


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
var nill = {};

function clamp(value, minValue, maxValue) {}

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
//# sourceMappingURL=menu.bundle.js.map