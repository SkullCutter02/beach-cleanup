webpackHotUpdate_N_E("pages/myhostings",{

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContextProvider\", function() { return UserContextProvider; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/context/UserContext.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__[\"createContext\"])(undefined);\nvar UserContextProvider = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(UserContextProvider, _Component);\n\n  var _super = _createSuper(UserContextProvider);\n\n  function UserContextProvider() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, UserContextProvider);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(UserContextProvider, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var pass, _yield$axios$post$cat, data, _yield$axios$post$cat2, _data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(localStorage.getItem(\"identifier\"), localStorage.getItem(\"password\"));\n                pass = \"123456789\";\n\n                if (!(localStorage.getItem(\"identifier\") === null)) {\n                  _context.next = 12;\n                  break;\n                }\n\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"\".concat(\"http://localhost:1337\", \"/auth/local\"), {\n                  identifier: \"dummy@gmail.com\",\n                  password: pass\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 5:\n                _yield$axios$post$cat = _context.sent;\n                data = _yield$axios$post$cat.data;\n                localStorage.setItem(\"identifier\", data.user.email);\n                localStorage.setItem(\"password\", pass);\n                this.setState(data);\n                _context.next = 17;\n                break;\n\n              case 12:\n                _context.next = 14;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"\".concat(\"http://localhost:1337\", \"/auth/local\"), {\n                  identifier: localStorage.getItem(\"identifier\"),\n                  password: localStorage.getItem(\"password\")\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 14:\n                _yield$axios$post$cat2 = _context.sent;\n                _data = _yield$axios$post$cat2.data;\n                this.setState(_data);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(UserContext.Provider, {\n        value: this.state,\n        children: this.props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return UserContextProvider;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Vc2VyQ29udGV4dC5qcz8xMWM3Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3MiLCJheGlvcyIsInBvc3QiLCJwcm9jZXNzIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiZXJyIiwiZGF0YSIsInNldEl0ZW0iLCJ1c2VyIiwiZW1haWwiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELENBQWpDO0FBRUEsSUFBTUMsbUJBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJQyx1QkFBTyxDQUFDQyxHQUFSLENBQ0VDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQURGLEVBRUVELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUZGO0FBSU1DLG9CQU5WLEdBTWlCLFdBTmpCOztBQUFBLHNCQVFRRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFSL0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFTNkJFLDRDQUFLLENBQ3pCQyxJQURvQixXQUNaQyx1QkFEWSxrQkFDK0I7QUFDbERDLDRCQUFVLEVBQUUsaUJBRHNDO0FBRWxEQywwQkFBUSxFQUFFTDtBQUZ3QyxpQkFEL0IsV0FLZCxVQUFDTSxHQUFEO0FBQUEseUJBQVNWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxHQUFaLENBQVQ7QUFBQSxpQkFMYyxDQVQ3Qjs7QUFBQTtBQUFBO0FBU2NDLG9CQVRkLHlCQVNjQSxJQVRkO0FBZU1ULDRCQUFZLENBQUNVLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxLQUE3QztBQUNBWiw0QkFBWSxDQUFDVSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDUixJQUFqQztBQUNBLHFCQUFLVyxRQUFMLENBQWNKLElBQWQ7QUFqQk47QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBbUI2Qk4sNENBQUssQ0FDekJDLElBRG9CLFdBQ1pDLHVCQURZLGtCQUMrQjtBQUNsREMsNEJBQVUsRUFBRU4sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLENBRHNDO0FBRWxETSwwQkFBUSxFQUFFUCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckI7QUFGd0MsaUJBRC9CLFdBS2QsVUFBQ08sR0FBRDtBQUFBLHlCQUFTVixPQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBWixDQUFUO0FBQUEsaUJBTGMsQ0FuQjdCOztBQUFBO0FBQUE7QUFtQmNDLHFCQW5CZCwwQkFtQmNBLElBbkJkO0FBeUJNLHFCQUFLSSxRQUFMLENBQWNKLEtBQWQ7O0FBekJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTZCVztBQUNQLDBCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLGFBQUssRUFBRSxLQUFLSyxLQUFsQztBQUFBLGtCQUNHLEtBQUtDLEtBQUwsQ0FBV0M7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFLRDtBQW5DSDs7QUFBQTtBQUFBLEVBQXlDQywrQ0FBekMiLCJmaWxlIjoiLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIiksXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpXG4gICAgKTtcbiAgICBjb25zdCBwYXNzID0gXCIxMjM0NTY3ODlcIjtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIikgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBcImR1bW15QGdtYWlsLmNvbVwiLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkZW50aWZpZXJcIiwgZGF0YS51c2VyLmVtYWlsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGFzc3dvcmRcIiwgcGFzcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2F1dGgvbG9jYWxgLCB7XG4gICAgICAgICAgaWRlbnRpZmllcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZGVudGlmaWVyXCIpLFxuICAgICAgICAgIHBhc3N3b3JkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ })

})