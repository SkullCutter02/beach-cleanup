webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar determineEnd = __webpack_require__(/*! ../../../determineEnd */ \"./determineEnd.js\");\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === id;\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  determineEnd(); // function determineEnd(number) {\n  //   switch (number) {\n  //     case \"1\":\n  //       return \"st\";\n  //     case \"2\":\n  //       return \"nd\";\n  //     case \"3\":\n  //       return \"rd\";\n  //     default:\n  //       return \"th\";\n  //   }\n  // }\n\n  function determineMonth(month) {\n    switch (month) {\n      case \"01\":\n        return \"January\";\n\n      case \"02\":\n        return \"February\";\n\n      case \"03\":\n        return \"March\";\n\n      case \"04\":\n        return \"April\";\n\n      case \"05\":\n        return \"May\";\n\n      case \"06\":\n        return \"June\";\n\n      case \"07\":\n        return \"July\";\n\n      case \"08\":\n        return \"August\";\n\n      case \"09\":\n        return \"September\";\n\n      case \"10\":\n        return \"October\";\n\n      case \"11\":\n        return \"November\";\n\n      case \"12\":\n        return \"December\";\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3851307369\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3851307369\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Date:\", \" \", \"\".concat(state[0].date.slice(8, 10)).concat(determineEnd(state[0].date.charAt(9)), \" \").concat(determineMonth(state[0].date.slice(5, 7)), \" \").concat(state[0].date.slice(0, 4))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Time: \", state[0].time]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Duration: \", state[0].duration]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-3851307369\",\n          children: [\"Remarks: \", state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"jsx-3851307369\" + \" \" + \"subscribe\",\n          children: \"Subscribe to this event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3851307369\",\n      children: \".container.jsx-3851307369{margin:30px 20px;}.container.jsx-3851307369 p.jsx-3851307369,.container.jsx-3851307369 .subscribe.jsx-3851307369{margin-top:20px;}p.jsx-3851307369{font-size:1rem;}.subscribe.jsx-3851307369{background:greenyellow;border:1px solid grey;border-radius:4px;width:150px;height:50px;font-size:1rem;-webkit-transition:all ease-in 0.1s;transition:all ease-in 0.1s;}.subscribe.jsx-3851307369:hover{background:yellow;}.location.jsx-3851307369{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGa0IsQUFHNEIsQUFLRCxBQUlELEFBSVEsQUFVTCxBQUlELGVBakJuQixDQUpBLENBTEEsQUEyQkEsQ0FKQSxLQVZ3QixzQkFDSixrQkFDTixZQUNBLFlBQ0csZUFDYSxnRUFDOUIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuY29uc3QgZGV0ZXJtaW5lRW5kID0gcmVxdWlyZShcIi4uLy4uLy4uL2RldGVybWluZUVuZFwiKTtcblxuY29uc3QgSG9zdGluZ1NwZWNpZmljcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldFN0YXRlKGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnV1aWQgPT09IGlkKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgZGV0ZXJtaW5lRW5kKCk7XG5cbiAgLy8gZnVuY3Rpb24gZGV0ZXJtaW5lRW5kKG51bWJlcikge1xuICAvLyAgIHN3aXRjaCAobnVtYmVyKSB7XG4gIC8vICAgICBjYXNlIFwiMVwiOlxuICAvLyAgICAgICByZXR1cm4gXCJzdFwiO1xuICAvLyAgICAgY2FzZSBcIjJcIjpcbiAgLy8gICAgICAgcmV0dXJuIFwibmRcIjtcbiAgLy8gICAgIGNhc2UgXCIzXCI6XG4gIC8vICAgICAgIHJldHVybiBcInJkXCI7XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluZU1vbnRoKG1vbnRoKSB7XG4gICAgc3dpdGNoIChtb250aCkge1xuICAgICAgY2FzZSBcIjAxXCI6XG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcbiAgICAgIGNhc2UgXCIwMlwiOlxuICAgICAgICByZXR1cm4gXCJGZWJydWFyeVwiO1xuICAgICAgY2FzZSBcIjAzXCI6XG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XG4gICAgICBjYXNlIFwiMDRcIjpcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcbiAgICAgIGNhc2UgXCIwNVwiOlxuICAgICAgICByZXR1cm4gXCJNYXlcIjtcbiAgICAgIGNhc2UgXCIwNlwiOlxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XG4gICAgICBjYXNlIFwiMDdcIjpcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xuICAgICAgY2FzZSBcIjA4XCI6XG4gICAgICAgIHJldHVybiBcIkF1Z3VzdFwiO1xuICAgICAgY2FzZSBcIjA5XCI6XG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xuICAgICAgY2FzZSBcIjEwXCI6XG4gICAgICAgIHJldHVybiBcIk9jdG9iZXJcIjtcbiAgICAgIGNhc2UgXCIxMVwiOlxuICAgICAgICByZXR1cm4gXCJOb3ZlbWJlclwiO1xuICAgICAgY2FzZSBcIjEyXCI6XG4gICAgICAgIHJldHVybiBcIkRlY2VtYmVyXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7c3RhdGVbMF0ubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICB7YCR7c3RhdGVbMF0uZGF0ZS5zbGljZSg4LCAxMCl9JHtkZXRlcm1pbmVFbmQoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5jaGFyQXQoOSlcbiAgICAgICAgICAgICAgKX0gJHtkZXRlcm1pbmVNb250aChcbiAgICAgICAgICAgICAgICBzdGF0ZVswXS5kYXRlLnNsaWNlKDUsIDcpXG4gICAgICAgICAgICAgICl9ICR7c3RhdGVbMF0uZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+VGltZToge3N0YXRlWzBdLnRpbWV9PC9wPlxuICAgICAgICAgICAgPHA+RHVyYXRpb246IHtzdGF0ZVswXS5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3N0YXRlWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlJlbWFya3M6IHtzdGF0ZVswXS5yZW1hcmtzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCI+U3Vic2NyaWJlIHRvIHRoaXMgZXZlbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBwLFxuICAgICAgICAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0aW5nU3BlY2lmaWNzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"QCk8gxNJWrlu/fJvy0B1Y7sNhZk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJkZXRlcm1pbmVFbmQiLCJyZXF1aXJlIiwiSG9zdGluZ1NwZWNpZmljcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwidXVpZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkZXRlcm1pbmVNb250aCIsIm1vbnRoIiwibGVuZ3RoIiwibG9jYXRpb24iLCJkYXRlIiwic2xpY2UiLCJjaGFyQXQiLCJ0aW1lIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInJlbWFya3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFlBQVksR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUE1Qjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ2QixNQUVyQkMsRUFGcUIsR0FFZEYsTUFBTSxDQUFDRyxLQUZPLENBRXJCRCxFQUZxQjs7QUFBQSxrQkFHSEUsc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkMsS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUs3QkMsT0FBSyxXQUFJQyx1QkFBSixlQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZE4sWUFBUSxDQUFDTSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtB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QURGO0FBMkRELENBbkhEOztHQUFNOUIsZ0I7VUFDV0UscUQ7OztLQURYRixnQjtBQXFIU0EsK0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuY29uc3QgZGV0ZXJtaW5lRW5kID0gcmVxdWlyZShcIi4uLy4uLy4uL2RldGVybWluZUVuZFwiKTtcblxuY29uc3QgSG9zdGluZ1NwZWNpZmljcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldFN0YXRlKGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnV1aWQgPT09IGlkKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgZGV0ZXJtaW5lRW5kKCk7XG5cbiAgLy8gZnVuY3Rpb24gZGV0ZXJtaW5lRW5kKG51bWJlcikge1xuICAvLyAgIHN3aXRjaCAobnVtYmVyKSB7XG4gIC8vICAgICBjYXNlIFwiMVwiOlxuICAvLyAgICAgICByZXR1cm4gXCJzdFwiO1xuICAvLyAgICAgY2FzZSBcIjJcIjpcbiAgLy8gICAgICAgcmV0dXJuIFwibmRcIjtcbiAgLy8gICAgIGNhc2UgXCIzXCI6XG4gIC8vICAgICAgIHJldHVybiBcInJkXCI7XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluZU1vbnRoKG1vbnRoKSB7XG4gICAgc3dpdGNoIChtb250aCkge1xuICAgICAgY2FzZSBcIjAxXCI6XG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcbiAgICAgIGNhc2UgXCIwMlwiOlxuICAgICAgICByZXR1cm4gXCJGZWJydWFyeVwiO1xuICAgICAgY2FzZSBcIjAzXCI6XG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XG4gICAgICBjYXNlIFwiMDRcIjpcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcbiAgICAgIGNhc2UgXCIwNVwiOlxuICAgICAgICByZXR1cm4gXCJNYXlcIjtcbiAgICAgIGNhc2UgXCIwNlwiOlxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XG4gICAgICBjYXNlIFwiMDdcIjpcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xuICAgICAgY2FzZSBcIjA4XCI6XG4gICAgICAgIHJldHVybiBcIkF1Z3VzdFwiO1xuICAgICAgY2FzZSBcIjA5XCI6XG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xuICAgICAgY2FzZSBcIjEwXCI6XG4gICAgICAgIHJldHVybiBcIk9jdG9iZXJcIjtcbiAgICAgIGNhc2UgXCIxMVwiOlxuICAgICAgICByZXR1cm4gXCJOb3ZlbWJlclwiO1xuICAgICAgY2FzZSBcIjEyXCI6XG4gICAgICAgIHJldHVybiBcIkRlY2VtYmVyXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7c3RhdGVbMF0ubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICB7YCR7c3RhdGVbMF0uZGF0ZS5zbGljZSg4LCAxMCl9JHtkZXRlcm1pbmVFbmQoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5jaGFyQXQoOSlcbiAgICAgICAgICAgICAgKX0gJHtkZXRlcm1pbmVNb250aChcbiAgICAgICAgICAgICAgICBzdGF0ZVswXS5kYXRlLnNsaWNlKDUsIDcpXG4gICAgICAgICAgICAgICl9ICR7c3RhdGVbMF0uZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+VGltZToge3N0YXRlWzBdLnRpbWV9PC9wPlxuICAgICAgICAgICAgPHA+RHVyYXRpb246IHtzdGF0ZVswXS5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3N0YXRlWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlJlbWFya3M6IHtzdGF0ZVswXS5yZW1hcmtzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCI+U3Vic2NyaWJlIHRvIHRoaXMgZXZlbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBwLFxuICAgICAgICAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0aW5nU3BlY2lmaWNzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})