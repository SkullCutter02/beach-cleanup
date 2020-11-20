webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"http://localhost:1337/hostings\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === uuid;\n    }));\n    console.log(state);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1280919585\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1280919585\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Date: \", \"\".concat(state[0].day, \"th \").concat(state[0].month, \" \").concat(state[0].year)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Remarks: \", state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1280919585\",\n      children: \"p.jsx-1280919585{margin:30px 20px;}.location.jsx-1280919585{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHNEIsQUFJQSxpQkFIbkIsQUFJQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHV1aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gdXVpZCkpO1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtzdGF0ZVswXS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGF0ZToge2Ake3N0YXRlWzBdLmRheX10aCAke3N0YXRlWzBdLm1vbnRofSAke3N0YXRlWzBdLnllYXJ9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7c3RhdGVbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+UmVtYXJrczoge3N0YXRlWzBdLnJlbWFya3N9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3RpbmdTcGVjaWZpY3M7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"Ic6VI0JxTPU8zc1BoGO+8eQJak0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXVpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwiY29uc29sZSIsImxvZyIsImVyciIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZGVzY3JpcHRpb24iLCJyZW1hcmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ2QixNQUVyQkMsSUFGcUIsR0FFWkYsTUFBTSxDQUFDRyxLQUZLLENBRXJCRCxJQUZxQjs7QUFBQSxrQkFHSEUsc0RBQVEsRUFITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSzdCQyxPQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RMLFlBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ1gsSUFBUixLQUFpQkEsSUFBOUI7QUFBQSxLQUFaLENBQUQsQ0FBUjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNELEdBTEgsV0FNUyxVQUFDVyxHQUFEO0FBQUEsV0FBU0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosQ0FBVDtBQUFBLEdBTlQ7QUFRQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBLGdCQUNHWCxLQUFLLEtBQUtZLFNBQVYsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGdCQUdDO0FBQUEsNENBQWUsV0FBZjtBQUFBLGdDQUNFO0FBQUEsOENBQWEsVUFBYjtBQUFBLG1DQUFtQ1osS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTYSxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUEseUNBQ1liLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2MsR0FEckIsZ0JBQzhCZCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEtBRHZDLGNBQ2dEZixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQixJQUR6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRTtBQUFBO0FBQUEsc0NBQWlCaEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTaUIsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBQTtBQUFBLGtDQUFhakIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTa0IsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXpDRDs7R0FBTXhCLGdCO1VBQ1dFLHFEOzs7S0FEWEYsZ0I7QUEyQ1NBLCtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgSG9zdGluZ1NwZWNpZmljcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XG5cbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvaG9zdGluZ3NcIilcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSB1dWlkKSk7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge3N0YXRlWzBdLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEYXRlOiB7YCR7c3RhdGVbMF0uZGF5fXRoICR7c3RhdGVbMF0ubW9udGh9ICR7c3RhdGVbMF0ueWVhcn1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5SZW1hcmtzOiB7c3RhdGVbMF0ucmVtYXJrc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})