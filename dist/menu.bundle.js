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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menuTemplate() {
    return '<div class=\'menu\' data-role=\'menu\'>';
}

/**
 * A grouping of items that act in sync together.
 */

var Menu = function () {
    function Menu(_ref) {
        var _ref$element = _ref.element,
            element = _ref$element === undefined ? menuTemplate : _ref$element,
            _ref$multiple = _ref.multiple,
            multiple = _ref$multiple === undefined ? false : _ref$multiple,
            _ref$timeout = _ref.timeout,
            timeout = _ref$timeout === undefined ? 1000 : _ref$timeout,
            _ref$menuToggle = _ref.menuToggle,
            menuToggle = _ref$menuToggle === undefined ? false : _ref$menuToggle,
            _ref$positioner = _ref.positioner,
            positioner = _ref$positioner === undefined ? null : _ref$positioner,
            _ref$closeOnBlur = _ref.closeOnBlur,
            closeOnBlur = _ref$closeOnBlur === undefined ? false : _ref$closeOnBlur,
            _ref$closeOnSelect = _ref.closeOnSelect,
            closeOnSelect = _ref$closeOnSelect === undefined ? false : _ref$closeOnSelect,
            _ref$data = _ref.data,
            data = _ref$data === undefined ? null : _ref$data;

        _classCallCheck(this, Menu);

        this.multiple = multiple;
        this.timeout = timeout;
        this.menuToggle = menuToggle;
        this.positioner = positioner;
        this.closeOnBlur = closeOnBlur;
        this.closeOnSelect = closeOnSelect;
        this.data = data;

        if (!element) {
            this.$element = (0, _jquery2.default)(this.template());
        } else if (typeof element === 'function') {
            this.$element = (0, _jquery2.default)(element(this));
        } else {
            this.$element = (0, _jquery2.default)(element);
        }
    }

    _createClass(Menu, [{
        key: 'show',
        value: function show() {}
    }, {
        key: 'hide',
        value: function hide() {}
    }, {
        key: 'activate',
        value: function activate() {}
    }, {
        key: 'deactivate',
        value: function deactivate() {}
    }, {
        key: 'getParent',
        value: function getParent() {}
    }, {
        key: 'getChildren',
        value: function getChildren() {}
    }, {
        key: 'isChildItem',
        value: function isChildItem(item) {}
    }, {
        key: 'isChildMenu',
        value: function isChildMenu(menu) {}
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