webpackHotUpdate(1,{

/***/ "./components/animatingWithGSAP/index.js":
/*!***********************************************!*\
  !*** ./components/animatingWithGSAP/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! TweenMax */ "./node_modules/gsap/src/minified/TweenMax.min.js");
/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(TweenMax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animation.gsap */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js");
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! debug.addIndicators */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js");
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(debug_addIndicators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ "./components/animatingWithGSAP/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/nathan/Desktop/Projects/eternalites/components/animatingWithGSAP/index.js";








var Scroll =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Scroll, _Component);

  function Scroll(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scroll);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scroll).call(this, props));
    _this.controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_6___default.a.Controller();
    _this.symbol = null; // reference to the animation

    _this.myTween = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.myTween = TweenMax__WEBPACK_IMPORTED_MODULE_7___default.a.to(this.symbol, 1, {
        x: 100,
        y: 100
      }); // build tween
      // var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });
      // // build scene
      // var scene = new ScrollMagic.Scene({
      //   triggerElement: "#trigger3",
      //   duration: 200,
      //   offset: -50
      // })
      //   .setTween(tween)
      //   .addIndicators({ name: "tween css class" }) // add indicators (requires plugin)
      //   .addTo(controller);
      // new ScrollMagic.Scene({
      //   triggerElement: "#scrollStarts",
      //   duration: 400, // scroll distance
      //   offset: 0 // start this scene after scrolling for 50px
      // })
      //   .setTween("#myElement", {
      //     x: 220,
      //     color: "white"
      //   })
      //   .addIndicators({ name: "target" })
      //   //   .setPin("#myElement") // pins the element for the the scene's duration
      //   .addTo(this.controller); // assign the scene to the controller
      // new ScrollMagic.Scene({
      //   triggerElement: "#scrollStarts",
      //   duration: 400, // scroll distance
      //   offset: 0 // start this scene after scrolling for 50px
      // })
      //   .setTween("#square", {
      //     webkitFilter: "blur(0px)",
      //     scale: 2
      //   })
      //   .addIndicators({ name: "square" })
      //   //   .setPin("#myElement") // pins the element for the the scene's duration
      //   .addTo(this.controller); // assign the scene to the controller
      // new ScrollMagic.Scene({
      //   triggerElement: "#scene2",
      //   duration: 800,
      //   offset: 100
      // })
      //   //   .setPin("#eye")
      //   .setTween("#eye", {
      //     scale: 0,
      //     opacity: 0
      //   })
      //   .addIndicators() // add indicators (requires plugin)
      //   .addTo(this.controller);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["wrapper"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["scene"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["mainHeader"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "ETERNALITES")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "scene2",
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["scene"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        ref: function ref(div) {
          return _this2.symbol = div;
        },
        id: "eye",
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["eye"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "SYMBOL")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["scene"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/girl.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
    }
  }]);

  return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=1.89abc8c12c3f39326fc4.hot-update.js.map