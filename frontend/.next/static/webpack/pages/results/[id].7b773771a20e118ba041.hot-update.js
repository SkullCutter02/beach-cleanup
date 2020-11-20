webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"http://localhost:1337/hostings\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === id;\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  var end = \"\";\n\n  if (state.length !== 0) {\n    switch (state[0].day.toString().charAt(state[0].day.toString().length - 1)) {\n      case \"1\":\n        end = \"st\";\n        break;\n\n      case \"2\":\n        end = \"nd\";\n        break;\n\n      case \"3\":\n        end = \"rd\";\n        break;\n\n      default:\n        end = \"th\";\n        break;\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4265064163\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4265064163\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-4265064163\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-4265064163\",\n          children: [\"Date: \", \"\".concat(state[0].day).concat(end, \" \").concat(state[0].month, \" \").concat(state[0].year)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-4265064163\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-4265064163\",\n          children: [\"Remarks: \", state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"jsx-4265064163\" + \" \" + \"subscribe\",\n          children: \"Subscribe to this event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4265064163\",\n      children: \".container.jsx-4265064163{margin:30px 20px;}.container.jsx-4265064163 p.jsx-4265064163,.container.jsx-4265064163 .subscribe.jsx-4265064163{margin-top:20px;}.subscribe.jsx-4265064163{background:greenyellow;border:1px solid grey;border-radius:4px;width:150px;height:50px;font-size:1rem;-webkit-transition:all ease-in 1s;transition:all ease-in 1s;}.subscribe.jsx-4265064163:hover{background:yellow;}.location.jsx-4265064163{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHNEIsQUFLRCxBQUlPLEFBVUwsQUFJRCxnQkFqQm5CLENBTEEsQUF1QkEsQ0FKQSxLQVZ3QixzQkFDSixrQkFDTixZQUNBLFlBQ0csZUFDVyw0REFDNUIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBIb3N0aW5nU3BlY2lmaWNzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ob3N0aW5nc1wiKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldFN0YXRlKGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnV1aWQgPT09IGlkKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgbGV0IGVuZCA9IFwiXCI7XG4gIGlmIChzdGF0ZS5sZW5ndGggIT09IDApIHtcbiAgICBzd2l0Y2ggKFxuICAgICAgc3RhdGVbMF0uZGF5LnRvU3RyaW5nKCkuY2hhckF0KHN0YXRlWzBdLmRheS50b1N0cmluZygpLmxlbmd0aCAtIDEpXG4gICAgKSB7XG4gICAgICBjYXNlIFwiMVwiOlxuICAgICAgICBlbmQgPSBcInN0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgZW5kID0gXCJuZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgIGVuZCA9IFwicmRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbmQgPSBcInRoXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge3N0YXRlWzBdLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEYXRlOiB7YCR7c3RhdGVbMF0uZGF5fSR7ZW5kfSAke3N0YXRlWzBdLm1vbnRofSAke3N0YXRlWzBdLnllYXJ9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7c3RhdGVbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+UmVtYXJrczoge3N0YXRlWzBdLnJlbWFya3N9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmVcIj5TdWJzY3JpYmUgdG8gdGhpcyBldmVudDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHAsXG4gICAgICAgIC5jb250YWluZXIgLnN1YnNjcmliZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVueWVsbG93O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0aW5nU3BlY2lmaWNzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"QCk8gxNJWrlu/fJvy0B1Y7sNhZk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyIiwiaG9zdGluZyIsInV1aWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZW5kIiwibGVuZ3RoIiwiZGF5IiwidG9TdHJpbmciLCJjaGFyQXQiLCJsb2NhdGlvbiIsIm1vbnRoIiwieWVhciIsImRlc2NyaXB0aW9uIiwicmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENkIsTUFFckJDLEVBRnFCLEdBRWRGLE1BQU0sQ0FBQ0csS0FGTyxDQUVyQkQsRUFGcUI7O0FBQUEsa0JBR0hFLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFLN0JDLE9BQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEwsWUFBUSxDQUFDSyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCWixFQUE5QjtBQUFBLEtBQVosQ0FBRCxDQUFSO0FBQ0QsR0FKSCxXQUtTLFVBQUNhLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FMVDtBQU9BLE1BQUlHLEdBQUcsR0FBRyxFQUFWOztBQUNBLE1BQUliLEtBQUssQ0FBQ2MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixZQUNFZCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEdBQVQsQ0FBYUMsUUFBYixHQUF3QkMsTUFBeEIsQ0FBK0JqQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEdBQVQsQ0FBYUMsUUFBYixHQUF3QkYsTUFBeEIsR0FBaUMsQ0FBaEUsQ0FERjtBQUdFLFdBQUssR0FBTDtBQUNFRCxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFQSxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFQSxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGO0FBQ0VBLFdBQUcsR0FBRyxJQUFOO0FBQ0E7QUFkSjtBQWdCRDs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBLGdCQUNHYixLQUFLLENBQUNjLE1BQU4sS0FBaUIsQ0FBakIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGdCQUdDO0FBQUEsNENBQWUsV0FBZjtBQUFBLGdDQUNFO0FBQUEsOENBQWEsVUFBYjtBQUFBLG1DQUFtQ2QsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTa0IsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBLHlDQUNZbEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZSxHQURyQixTQUMyQkYsR0FEM0IsY0FDa0NiLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU21CLEtBRDNDLGNBQ29EbkIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTb0IsSUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBQTtBQUFBLHNDQUFpQnBCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3FCLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUE7QUFBQSxrQ0FBYXJCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3NCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUEsOENBQWtCLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQWhGRDs7R0FBTTVCLGdCO1VBQ1dFLHFEOzs7S0FEWEYsZ0I7QUFrRlNBLCtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgSG9zdGluZ1NwZWNpZmljcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvaG9zdGluZ3NcIilcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSBpZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIGxldCBlbmQgPSBcIlwiO1xuICBpZiAoc3RhdGUubGVuZ3RoICE9PSAwKSB7XG4gICAgc3dpdGNoIChcbiAgICAgIHN0YXRlWzBdLmRheS50b1N0cmluZygpLmNoYXJBdChzdGF0ZVswXS5kYXkudG9TdHJpbmcoKS5sZW5ndGggLSAxKVxuICAgICkge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgZW5kID0gXCJzdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgIGVuZCA9IFwibmRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiM1wiOlxuICAgICAgICBlbmQgPSBcInJkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZW5kID0gXCJ0aFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtzdGF0ZVswXS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGF0ZToge2Ake3N0YXRlWzBdLmRheX0ke2VuZH0gJHtzdGF0ZVswXS5tb250aH0gJHtzdGF0ZVswXS55ZWFyfWB9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3N0YXRlWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlJlbWFya3M6IHtzdGF0ZVswXS5yZW1hcmtzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCI+U3Vic2NyaWJlIHRvIHRoaXMgZXZlbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBwLFxuICAgICAgICAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})