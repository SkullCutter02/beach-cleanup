webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/login.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Login = function Login() {\n  var login = function login(e) {\n    e.preventDefault();\n    var email = document.getElementById(\"email\").value;\n    var password = document.getElementById(\"password\").value;\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"\".concat(\"http://localhost:1337\", \"/auth/local\"));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"jsx-3142243171\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-3142243171\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: login,\n          className: \"jsx-3142243171\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"jsx-3142243171\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: \"jsx-3142243171\" + \" \" + \"text\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"email\",\n                className: \"jsx-3142243171\",\n                children: \"Username/Email: \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"password\",\n                className: \"jsx-3142243171\",\n                children: \"Password: \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: \"jsx-3142243171\" + \" \" + \"inputs\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                required: true,\n                type: \"text\",\n                id: \"identifier\",\n                name: \"identifier\",\n                className: \"jsx-3142243171\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                required: true,\n                type: \"password\",\n                id: \"password\",\n                name: \"password\",\n                className: \"jsx-3142243171\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/signup\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"jsx-3142243171\",\n              children: \"Don't have an account? Click here\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-3142243171\",\n            children: \"Log In\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3142243171\",\n      children: \"main.jsx-3142243171{width:100%;}h1.jsx-3142243171{text-align:center;margin-top:100px;}ul.jsx-3142243171{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:2em;}li.jsx-3142243171{width:50%;height:200px;}.text.jsx-3142243171{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-right:4em;}.inputs.jsx-3142243171{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}input.jsx-3142243171{width:30%;}label.jsx-3142243171,input.jsx-3142243171{margin:5px 0;}button.jsx-3142243171{margin:50px 47%;width:100px;height:30px;}a.jsx-3142243171{margin:0 45%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUdzQixBQUlPLEFBS0YsQUFPTixBQUtHLEFBUUEsQUFPSCxBQUtHLEFBSUcsQUFNSCxVQWxDQSxBQW9CZixDQXBDQSxFQXlDQSxBQVVBLEdBMUNlLEFBb0NELEVBekNLLEtBYW5CLEtBNkJjLE9BekNkLEtBMENBLGtDQTFCd0IsQUFRQSxnQkFuQkMsOERBWUEsQUFRQSxxQ0FuQlIsZUFDakIsK0NBV3VCLEFBUUUscUdBUE4sUUFRbkIsU0FQQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKS52YWx1ZTtcblxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXV0aC9sb2NhbGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2lufT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VXNlcm5hbWUvRW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpZGVudGlmaWVyXCIgbmFtZT1cImlkZW50aWZpZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWdudXBcIn0+XG4gICAgICAgICAgICAgIDxhPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gQ2xpY2sgaGVyZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNDclO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW46IDAgNDUlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/login.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsImxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBN0M7QUFDQSxRQUFJQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBbkQ7QUFFQUUsZ0RBQUssQ0FBQ0MsSUFBTixXQUFjQyx1QkFBZDtBQUNELEdBUEQ7O0FBU0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUEsK0JBQ0U7QUFBTSxrQkFBUSxFQUFFVixLQUFoQjtBQUFBO0FBQUEsa0NBQ0U7QUFBQTtBQUFBLG9DQUNFO0FBQUEsa0RBQWMsTUFBZDtBQUFBLHNDQUNFO0FBQU8sdUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFPLHVCQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUEsa0RBQWMsUUFBZDtBQUFBLHNDQUNFO0FBQU8sd0JBQVEsTUFBZjtBQUFnQixvQkFBSSxFQUFDLE1BQXJCO0FBQTRCLGtCQUFFLEVBQUMsWUFBL0I7QUFBNEMsb0JBQUksRUFBQyxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQU8sd0JBQVEsTUFBZjtBQUFnQixvQkFBSSxFQUFDLFVBQXJCO0FBQWdDLGtCQUFFLEVBQUMsVUFBbkM7QUFBOEMsb0JBQUksRUFBQyxVQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBV0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLFNBQVo7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQWNFO0FBQVEsZ0JBQUksRUFBRSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0ZELENBNUZEOztLQUFNRCxLO0FBOEZTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgbG9naW4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKS52YWx1ZTtcblxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXV0aC9sb2NhbGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2lufT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VXNlcm5hbWUvRW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpZGVudGlmaWVyXCIgbmFtZT1cImlkZW50aWZpZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWdudXBcIn0+XG4gICAgICAgICAgICAgIDxhPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gQ2xpY2sgaGVyZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNDclO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW46IDAgNDUlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})