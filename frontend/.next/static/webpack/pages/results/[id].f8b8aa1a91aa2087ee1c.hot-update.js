webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./determineEnd.js":
false,

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === id;\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n\n  function determineEnd(number) {\n    switch (number) {\n      case \"1\":\n        return \"st\";\n\n      case \"2\":\n        return \"nd\";\n\n      case \"3\":\n        return \"rd\";\n\n      default:\n        return \"th\";\n    }\n  }\n\n  function determineMonth(month) {\n    switch (month) {\n      case \"01\":\n        return \"January\";\n\n      case \"02\":\n        return \"February\";\n\n      case \"03\":\n        return \"March\";\n\n      case \"04\":\n        return \"April\";\n\n      case \"05\":\n        return \"May\";\n\n      case \"06\":\n        return \"June\";\n\n      case \"07\":\n        return \"July\";\n\n      case \"08\":\n        return \"August\";\n\n      case \"09\":\n        return \"September\";\n\n      case \"10\":\n        return \"October\";\n\n      case \"11\":\n        return \"November\";\n\n      case \"12\":\n        return \"December\";\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3851307369\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3851307369\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Date:\", \" \", \"\".concat(state[0].date.slice(8, 10)).concat(determineEnd(state[0].date.charAt(9)), \" \").concat(determineMonth(state[0].date.slice(5, 7)), \" \").concat(state[0].date.slice(0, 4))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Time: \", state[0].time]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Duration: \", state[0].duration]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Remarks: \", state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"jsx-3851307369\" + \" \" + \"subscribe\",\n          children: \"Subscribe to this event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3851307369\",\n      children: \".container.jsx-3851307369{margin:30px 20px;}.container.jsx-3851307369 p.jsx-3851307369,.container.jsx-3851307369 .subscribe.jsx-3851307369{margin-top:20px;}p.jsx-3851307369{font-size:1rem;}.subscribe.jsx-3851307369{background:greenyellow;border:1px solid grey;border-radius:4px;width:150px;height:50px;font-size:1rem;-webkit-transition:all ease-in 0.1s;transition:all ease-in 0.1s;}.subscribe.jsx-3851307369:hover{background:yellow;}.location.jsx-3851307369{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ga0IsQUFHNEIsQUFLRCxBQUlELEFBSVEsQUFVTCxBQUlELGVBakJuQixDQUpBLENBTEEsQUEyQkEsQ0FKQSxLQVZ3QixzQkFDSixrQkFDTixZQUNBLFlBQ0csZUFDYSxnRUFDOUIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBIb3N0aW5nU3BlY2lmaWNzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gaWQpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBmdW5jdGlvbiBkZXRlcm1pbmVFbmQobnVtYmVyKSB7XG4gICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcInRoXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lTW9udGgobW9udGgpIHtcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICBjYXNlIFwiMDFcIjpcbiAgICAgICAgcmV0dXJuIFwiSmFudWFyeVwiO1xuICAgICAgY2FzZSBcIjAyXCI6XG4gICAgICAgIHJldHVybiBcIkZlYnJ1YXJ5XCI7XG4gICAgICBjYXNlIFwiMDNcIjpcbiAgICAgICAgcmV0dXJuIFwiTWFyY2hcIjtcbiAgICAgIGNhc2UgXCIwNFwiOlxuICAgICAgICByZXR1cm4gXCJBcHJpbFwiO1xuICAgICAgY2FzZSBcIjA1XCI6XG4gICAgICAgIHJldHVybiBcIk1heVwiO1xuICAgICAgY2FzZSBcIjA2XCI6XG4gICAgICAgIHJldHVybiBcIkp1bmVcIjtcbiAgICAgIGNhc2UgXCIwN1wiOlxuICAgICAgICByZXR1cm4gXCJKdWx5XCI7XG4gICAgICBjYXNlIFwiMDhcIjpcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XG4gICAgICBjYXNlIFwiMDlcIjpcbiAgICAgICAgcmV0dXJuIFwiU2VwdGVtYmVyXCI7XG4gICAgICBjYXNlIFwiMTBcIjpcbiAgICAgICAgcmV0dXJuIFwiT2N0b2JlclwiO1xuICAgICAgY2FzZSBcIjExXCI6XG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XG4gICAgICBjYXNlIFwiMTJcIjpcbiAgICAgICAgcmV0dXJuIFwiRGVjZW1iZXJcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtzdGF0ZVswXS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGF0ZTp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtgJHtzdGF0ZVswXS5kYXRlLnNsaWNlKDgsIDEwKX0ke2RldGVybWluZUVuZChcbiAgICAgICAgICAgICAgICBzdGF0ZVswXS5kYXRlLmNoYXJBdCg5KVxuICAgICAgICAgICAgICApfSAke2RldGVybWluZU1vbnRoKFxuICAgICAgICAgICAgICAgIHN0YXRlWzBdLmRhdGUuc2xpY2UoNSwgNylcbiAgICAgICAgICAgICAgKX0gJHtzdGF0ZVswXS5kYXRlLnNsaWNlKDAsIDQpfWB9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5UaW1lOiB7c3RhdGVbMF0udGltZX08L3A+XG4gICAgICAgICAgICA8cD5EdXJhdGlvbjoge3N0YXRlWzBdLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7c3RhdGVbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+UmVtYXJrczoge3N0YXRlWzBdLnJlbWFya3N9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmVcIj5TdWJzY3JpYmUgdG8gdGhpcyBldmVudDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHAsXG4gICAgICAgIC5jb250YWluZXIgLnN1YnNjcmliZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVueWVsbG93O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3RpbmdTcGVjaWZpY3M7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"QCk8gxNJWrlu/fJvy0B1Y7sNhZk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZpbHRlciIsImhvc3RpbmciLCJ1dWlkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRldGVybWluZUVuZCIsIm51bWJlciIsImRldGVybWluZU1vbnRoIiwibW9udGgiLCJsZW5ndGgiLCJsb2NhdGlvbiIsImRhdGUiLCJzbGljZSIsImNoYXJBdCIsInRpbWUiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwicmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENkIsTUFFckJDLEVBRnFCLEdBRWRGLE1BQU0sQ0FBQ0csS0FGTyxDQUVyQkQsRUFGcUI7O0FBQUEsa0JBR0hFLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFLN0JDLE9BQUssV0FBSUMsdUJBQUosZUFBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2ROLFlBQVEsQ0FBQ00sSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQmIsRUFBOUI7QUFBQSxLQUFaLENBQUQsQ0FBUjtBQUNELEdBSkgsV0FLUyxV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QUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyREQsQ0FqSEQ7O0dBQU1oQyxnQjtVQUNXRSxxRDs7O0tBRFhGLGdCO0FBbUhTQSwrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSBpZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIGZ1bmN0aW9uIGRldGVybWluZUVuZChudW1iZXIpIHtcbiAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgcmV0dXJuIFwic3RcIjtcbiAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgICBjYXNlIFwiM1wiOlxuICAgICAgICByZXR1cm4gXCJyZFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlcm1pbmVNb250aChtb250aCkge1xuICAgIHN3aXRjaCAobW9udGgpIHtcbiAgICAgIGNhc2UgXCIwMVwiOlxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XG4gICAgICBjYXNlIFwiMDJcIjpcbiAgICAgICAgcmV0dXJuIFwiRmVicnVhcnlcIjtcbiAgICAgIGNhc2UgXCIwM1wiOlxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xuICAgICAgY2FzZSBcIjA0XCI6XG4gICAgICAgIHJldHVybiBcIkFwcmlsXCI7XG4gICAgICBjYXNlIFwiMDVcIjpcbiAgICAgICAgcmV0dXJuIFwiTWF5XCI7XG4gICAgICBjYXNlIFwiMDZcIjpcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xuICAgICAgY2FzZSBcIjA3XCI6XG4gICAgICAgIHJldHVybiBcIkp1bHlcIjtcbiAgICAgIGNhc2UgXCIwOFwiOlxuICAgICAgICByZXR1cm4gXCJBdWd1c3RcIjtcbiAgICAgIGNhc2UgXCIwOVwiOlxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcbiAgICAgIGNhc2UgXCIxMFwiOlxuICAgICAgICByZXR1cm4gXCJPY3RvYmVyXCI7XG4gICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgcmV0dXJuIFwiTm92ZW1iZXJcIjtcbiAgICAgIGNhc2UgXCIxMlwiOlxuICAgICAgICByZXR1cm4gXCJEZWNlbWJlclwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge3N0YXRlWzBdLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEYXRlOntcIiBcIn1cbiAgICAgICAgICAgICAge2Ake3N0YXRlWzBdLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgIHN0YXRlWzBdLmRhdGUuY2hhckF0KDkpXG4gICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5zbGljZSg1LCA3KVxuICAgICAgICAgICAgICApfSAke3N0YXRlWzBdLmRhdGUuc2xpY2UoMCwgNCl9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlRpbWU6IHtzdGF0ZVswXS50aW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkR1cmF0aW9uOiB7c3RhdGVbMF0uZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5SZW1hcmtzOiB7c3RhdGVbMF0ucmVtYXJrc308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1YnNjcmliZVwiPlN1YnNjcmliZSB0byB0aGlzIGV2ZW50PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgcCxcbiAgICAgICAgLmNvbnRhaW5lciAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4xcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})