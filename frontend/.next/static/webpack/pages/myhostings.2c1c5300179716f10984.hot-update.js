webpackHotUpdate_N_E("pages/myhostings",{

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContextProvider\", function() { return UserContextProvider; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/context/UserContext.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__[\"createContext\"])(undefined);\nvar UserContextProvider = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(UserContextProvider, _Component);\n\n  var _super = _createSuper(UserContextProvider);\n\n  function UserContextProvider() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, UserContextProvider);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(UserContextProvider, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var pass, _yield$axios$post$cat, data, _yield$axios$post$cat2, _data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(localStorage.getItem(\"identifier\"), localStorage.getItem(\"password\"));\n                pass = \"123456789\";\n\n                if (!(localStorage.getItem(\"identifier\") === null || localStorage.getItem(\"password\") === null)) {\n                  _context.next = 12;\n                  break;\n                }\n\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"\".concat(\"http://localhost:1337\", \"/auth/local\"), {\n                  identifier: \"dummy@gmail.com\",\n                  password: pass\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 5:\n                _yield$axios$post$cat = _context.sent;\n                data = _yield$axios$post$cat.data;\n                localStorage.setItem(\"identifier\", data.user.email);\n                localStorage.setItem(\"password\", pass);\n                this.setState(data);\n                _context.next = 17;\n                break;\n\n              case 12:\n                _context.next = 14;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"\".concat(\"http://localhost:1337\", \"/auth/local\"), {\n                  identifier: localStorage.getItem(\"identifier\"),\n                  password: localStorage.getItem(\"password\")\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 14:\n                _yield$axios$post$cat2 = _context.sent;\n                _data = _yield$axios$post$cat2.data;\n                this.setState(_data);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(UserContext.Provider, {\n        value: this.state,\n        children: this.props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return UserContextProvider;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Vc2VyQ29udGV4dC5qcz8xMWM3Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3MiLCJheGlvcyIsInBvc3QiLCJwcm9jZXNzIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiZXJyIiwiZGF0YSIsInNldEl0ZW0iLCJ1c2VyIiwiZW1haWwiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELENBQWpDO0FBRUEsSUFBTUMsbUJBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJQyx1QkFBTyxDQUFDQyxHQUFSLENBQ0VDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQURGLEVBRUVELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUZGO0FBSU1DLG9CQU5WLEdBTWlCLFdBTmpCOztBQUFBLHNCQVNNRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFBdkMsSUFDQUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLElBVjNDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBWTZCRSw0Q0FBSyxDQUN6QkMsSUFEb0IsV0FDWkMsdUJBRFksa0JBQytCO0FBQ2xEQyw0QkFBVSxFQUFFLGlCQURzQztBQUVsREMsMEJBQVEsRUFBRUw7QUFGd0MsaUJBRC9CLFdBS2QsVUFBQ00sR0FBRDtBQUFBLHlCQUFTVixPQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBWixDQUFUO0FBQUEsaUJBTGMsQ0FaN0I7O0FBQUE7QUFBQTtBQVljQyxvQkFaZCx5QkFZY0EsSUFaZDtBQWtCTVQsNEJBQVksQ0FBQ1UsT0FBYixDQUFxQixZQUFyQixFQUFtQ0QsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEtBQTdDO0FBQ0FaLDRCQUFZLENBQUNVLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNSLElBQWpDO0FBQ0EscUJBQUtXLFFBQUwsQ0FBY0osSUFBZDtBQXBCTjtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFzQjZCTiw0Q0FBSyxDQUN6QkMsSUFEb0IsV0FDWkMsdUJBRFksa0JBQytCO0FBQ2xEQyw0QkFBVSxFQUFFTixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FEc0M7QUFFbERNLDBCQUFRLEVBQUVQLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQjtBQUZ3QyxpQkFEL0IsV0FLZCxVQUFDTyxHQUFEO0FBQUEseUJBQVNWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxHQUFaLENBQVQ7QUFBQSxpQkFMYyxDQXRCN0I7O0FBQUE7QUFBQTtBQXNCY0MscUJBdEJkLDBCQXNCY0EsSUF0QmQ7QUE0Qk0scUJBQUtJLFFBQUwsQ0FBY0osS0FBZDs7QUE1Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBZ0NXO0FBQ1AsMEJBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsYUFBSyxFQUFFLEtBQUtLLEtBQWxDO0FBQUEsa0JBQ0csS0FBS0MsS0FBTCxDQUFXQztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUtEO0FBdENIOztBQUFBO0FBQUEsRUFBeUNDLCtDQUF6QyIsImZpbGUiOiIuL2NvbnRleHQvVXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNsYXNzIFVzZXJDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRlbnRpZmllclwiKSxcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIilcbiAgICApO1xuICAgIGNvbnN0IHBhc3MgPSBcIjEyMzQ1Njc4OVwiO1xuXG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZGVudGlmaWVyXCIpID09PSBudWxsIHx8XG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpID09PSBudWxsXG4gICAgKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2F1dGgvbG9jYWxgLCB7XG4gICAgICAgICAgaWRlbnRpZmllcjogXCJkdW1teUBnbWFpbC5jb21cIixcbiAgICAgICAgICBwYXNzd29yZDogcGFzcyxcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZGVudGlmaWVyXCIsIGRhdGEudXNlci5lbWFpbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBhc3N3b3JkXCIsIHBhc3MpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9hdXRoL2xvY2FsYCwge1xuICAgICAgICAgIGlkZW50aWZpZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRlbnRpZmllclwiKSxcbiAgICAgICAgICBwYXNzd29yZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKSxcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShkYXRhKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zdGF0ZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ })

})