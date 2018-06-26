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
            timeout = _ref$timeout === undefined ? 1000 : _ref$timeout,
            _ref$closeOnBlur = _ref.closeOnBlur,
            closeOnBlur = _ref$closeOnBlur === undefined ? true : _ref$closeOnBlur,
            _ref$closeOnSelect = _ref.closeOnSelect,
            closeOnSelect = _ref$closeOnSelect === undefined ? true : _ref$closeOnSelect,
            _ref$positioner = _ref.positioner,
            positioner = _ref$positioner === undefined ? null : _ref$positioner;

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

        this.$element.data({
            timeout: timeout,
            closeOnBlur: closeOnBlur,
            closeOnSelect: closeOnSelect,
            positioner: positioner
        });
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
            return (0, _jquery2.default)(selector).data(CONTROLLER);
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
                node.addClass(CLASSNAMES.active);
                node.trigger(EVENTS.activate, _this);

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
                    menu.addClass(CLASSNAMES.open);

                    var positioner = _this3.getPositioner(menu);

                    if (positioner) {
                        positioner(menu, _this3);
                    }

                    menu.trigger(EVENTS.open, _this3);
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
            var children = node.find(SELECTORS.menuitem);

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
        }
    }, {
        key: 'closeOnBlur',
        get: function get() {
            var value = this.$element.data("closeOnBlur");

            if (value === 'true' || value === 'false') {
                return value === 'true';
            } else {
                return value;
            }
        }
    }, {
        key: 'closeOnSelect',
        get: function get() {
            var value = this.$element.data("closeOnSelect");

            if (value === 'true' || value === 'false') {
                return value === 'true';
            } else {
                return value;
            }
        }
    }]);

    return Menu;
}();

exports.default = Menu;


Menu.EVENTS = EVENTS;
Menu.PREFIX = PREFIX;
Menu.CONTROLLER = CONTROLLER;
Menu.CLASSNAMES = CLASSNAMES;
Menu.SELECTORS = SELECTORS;
Menu.POSITIONER_REGISTRY = POSITIONER_REGISTRY;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu2.default;


window.Menu = _Menu2.default;

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