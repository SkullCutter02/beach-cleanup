webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils */ \"./Utils.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/UserContext */ \"./context/UserContext.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__[\"UserContext\"]);\n  fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === id;\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n\n  var subscribe = function subscribe(e) {\n    axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      method: \"POST\",\n      url: \"\".concat(\"http://localhost:1337\", \"/hostings/\").concat(state[0].id)\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-553945907\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-553945907\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Date:\", \" \", \"\".concat(state[0].date.slice(8, 10)).concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_6__[\"determineEnd\"])(state[0].date.charAt(9)), \" \").concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_6__[\"determineMonth\"])(state[0].date.slice(5, 7)), \" \").concat(state[0].date.slice(0, 4))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Time: \", state[0].time]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Duration: \", state[0].duration, \"hrs\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Remarks:\", \" \", state[0].remarks.length === 0 ? \"No Remarks\" : state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: subscribe,\n          className: \"jsx-553945907\" + \" \" + \"subscribe\",\n          children: \"Subscribe to this event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"553945907\",\n      children: \".container.jsx-553945907{margin:30px 20px;}.container.jsx-553945907 p.jsx-553945907,.container.jsx-553945907 .subscribe.jsx-553945907{margin-top:20px;}p.jsx-553945907{font-size:1rem;}.subscribe.jsx-553945907{background:greenyellow;border:1px solid grey;border-radius:4px;width:150px;height:50px;font-size:1rem;-webkit-transition:all ease-in 0.1s;transition:all ease-in 0.1s;cursor:pointer;}.subscribe.jsx-553945907:hover{background:yellow;}.location.jsx-553945907{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFHNEIsQUFLRCxBQUlELEFBSVEsQUFXTCxBQUlELGVBbEJuQixDQUpBLENBTEEsQUE0QkEsQ0FKQSxLQVh3QixzQkFDSixrQkFDTixZQUNBLFlBQ0csZUFDYSxnRUFDYixlQUNqQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVFbmQsIGRldGVybWluZU1vbnRoIH0gZnJvbSBcIi4uLy4uLy4uL1V0aWxzXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSBpZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChlKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3MvJHtzdGF0ZVswXS5pZH1gLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge3N0YXRlWzBdLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEYXRlOntcIiBcIn1cbiAgICAgICAgICAgICAge2Ake3N0YXRlWzBdLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgIHN0YXRlWzBdLmRhdGUuY2hhckF0KDkpXG4gICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5zbGljZSg1LCA3KVxuICAgICAgICAgICAgICApfSAke3N0YXRlWzBdLmRhdGUuc2xpY2UoMCwgNCl9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlRpbWU6IHtzdGF0ZVswXS50aW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkR1cmF0aW9uOiB7c3RhdGVbMF0uZHVyYXRpb259aHJzPC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUmVtYXJrczp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtzdGF0ZVswXS5yZW1hcmtzLmxlbmd0aCA9PT0gMCA/IFwiTm8gUmVtYXJrc1wiIDogc3RhdGVbMF0ucmVtYXJrc31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCIgb25DbGljaz17c3Vic2NyaWJlfT5cbiAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIHRoaXMgZXZlbnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHAsXG4gICAgICAgIC5jb250YWluZXIgLnN1YnNjcmliZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVueWVsbG93O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMXM7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0aW5nU3BlY2lmaWNzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"mXDGBWWoM97euc7jaZWTfXChX78=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXJEYXRhIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyIiwiaG9zdGluZyIsInV1aWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3Vic2NyaWJlIiwiZSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwibGVuZ3RoIiwibG9jYXRpb24iLCJkYXRlIiwic2xpY2UiLCJkZXRlcm1pbmVFbmQiLCJjaGFyQXQiLCJkZXRlcm1pbmVNb250aCIsInRpbWUiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwicmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDZCLE1BRXJCQyxFQUZxQixHQUVkRixNQUFNLENBQUNHLEtBRk8sQ0FFckJELEVBRnFCOztBQUFBLGtCQUdIRSxzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSTdCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBM0I7QUFFQUMsT0FBSyxXQUFJQyx1QkFBSixlQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFQsWUFBUSxDQUFDUyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCaEIsRUFBOUI7QUFBQSxLQUFaLENBQUQsQ0FBUjtBQUNELEdBSkgsV0FLUyxVQUFDaUIsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQUxUOztBQU9BLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QkMsZ0RBQUssQ0FBQztBQUNKQyxZQUFNLEVBQUUsTUFESjtBQUVKQyxTQUFHLFlBQUtmLHVCQUFMLHVCQUE4Q04sS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSCxFQUF2RDtBQUZDLEtBQUQsQ0FBTDtBQUlELEdBTEQ7O0FBT0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSxnQkFDR0csS0FBSyxDQUFDc0IsTUFBTixLQUFpQixDQUFqQixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZ0JBR0M7QUFBQSwyQ0FBZSxXQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBYSxVQUFiO0FBQUEsbUNBQW1DdEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTdUIsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBLDhCQUNRLEdBRFIsWUFFTXZCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3dCLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QixFQUF2QixDQUZOLFNBRW1DQywyREFBWSxDQUMzQzFCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3dCLElBQVQsQ0FBY0csTUFBZCxDQUFxQixDQUFyQixDQUQyQyxDQUYvQyxjQUlPQyw2REFBYyxDQUNqQjVCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3dCLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURpQixDQUpyQixjQU1PekIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTd0IsSUFBVCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBVUU7QUFBQTtBQUFBLCtCQUFVekIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTNkIsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBV0U7QUFBQTtBQUFBLG1DQUFjN0IsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTOEIsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBWUU7QUFBQTtBQUFBLHNDQUFpQjlCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUytCLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWFFO0FBQUE7QUFBQSxpQ0FDVyxHQURYLEVBRUcvQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQyxPQUFULENBQWlCVixNQUFqQixLQUE0QixDQUE1QixHQUFnQyxZQUFoQyxHQUErQ3RCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dDLE9BRjNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQWlCRTtBQUE4QixpQkFBTyxFQUFFZixTQUF2QztBQUFBLDZDQUFrQixXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUVELENBckZEOztHQUFNdkIsZ0I7VUFDV0UscUQ7OztLQURYRixnQjtBQXVGU0EsK0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgZGV0ZXJtaW5lRW5kLCBkZXRlcm1pbmVNb250aCB9IGZyb20gXCIuLi8uLi8uLi9VdGlsc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5jb25zdCBIb3N0aW5nU3BlY2lmaWNzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gaWQpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZSkgPT4ge1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzLyR7c3RhdGVbMF0uaWR9YCxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtzdGF0ZVswXS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGF0ZTp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtgJHtzdGF0ZVswXS5kYXRlLnNsaWNlKDgsIDEwKX0ke2RldGVybWluZUVuZChcbiAgICAgICAgICAgICAgICBzdGF0ZVswXS5kYXRlLmNoYXJBdCg5KVxuICAgICAgICAgICAgICApfSAke2RldGVybWluZU1vbnRoKFxuICAgICAgICAgICAgICAgIHN0YXRlWzBdLmRhdGUuc2xpY2UoNSwgNylcbiAgICAgICAgICAgICAgKX0gJHtzdGF0ZVswXS5kYXRlLnNsaWNlKDAsIDQpfWB9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5UaW1lOiB7c3RhdGVbMF0udGltZX08L3A+XG4gICAgICAgICAgICA8cD5EdXJhdGlvbjoge3N0YXRlWzBdLmR1cmF0aW9ufWhyczwvcD5cbiAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7c3RhdGVbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJlbWFya3M6e1wiIFwifVxuICAgICAgICAgICAgICB7c3RhdGVbMF0ucmVtYXJrcy5sZW5ndGggPT09IDAgPyBcIk5vIFJlbWFya3NcIiA6IHN0YXRlWzBdLnJlbWFya3N9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1YnNjcmliZVwiIG9uQ2xpY2s9e3N1YnNjcmliZX0+XG4gICAgICAgICAgICAgIFN1YnNjcmliZSB0byB0aGlzIGV2ZW50XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBwLFxuICAgICAgICAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjFzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})