(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ })

}]);
//# sourceMappingURL=chunk-0.bundle.js.map