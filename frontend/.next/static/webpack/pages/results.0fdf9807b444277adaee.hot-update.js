webpackHotUpdate_N_E("pages/results",{

/***/ "./pages/results/index.js":
/*!********************************!*\
  !*** ./pages/results/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_CountryContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/CountryContext */ \"./context/CountryContext.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Results = function Results() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var country = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_CountryContext__WEBPACK_IMPORTED_MODULE_5__[\"CountryContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"http://localhost:1337/hostings\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    return setState(data.filter(function (hosting) {\n      return hosting.country.toLowerCase() === country.country.toLowerCase();\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (state !== undefined) {\n      if (state.length === 0) {\n        alert(\"No beach cleanups found for \".concat(country.country));\n        router.push(\"/\");\n      }\n    }\n  }, [state]);\n\n  function redirect(id) {\n    router.push(\"/results/\".concat(id, \"?\"));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1415129089\",\n        children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1415129089\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this) : state.map(function (hosting) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1415129089\" + \" \" + \"container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              onClick: function onClick() {\n                return redirect(hosting.id);\n              },\n              className: \"jsx-1415129089\" + \" \" + \"location\",\n              children: [\"Location: \", hosting.location]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-1415129089\" + \" \" + \"date\",\n              children: [\"Date: \", \"\".concat(hosting.day, \"th \").concat(hosting.month, \" \").concat(hosting.year)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1415129089\",\n      children: \".container.jsx-1415129089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;height:90px;border:1px solid lightgray;border-radius:30px;margin:40px auto;}p.jsx-1415129089{color:grey;margin:0 50px;}.location.jsx-1415129089{font-size:1.4rem;cursor:pointer;}.date.jsx-1415129089{font-size:1.1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBR3dCLEFBV0YsQUFLTSxBQUtBLFdBVEgsTUFLQyxBQUtqQixRQVRBLE9BS0EsMENBakJnQyxtSEFDWCw2RkFDVCxVQUNFLFlBQ2UsMkJBQ1IsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENvdW50cnlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQ291bnRyeUNvbnRleHRcIjtcblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNvdW50cnkgPSB1c2VDb250ZXh0KENvdW50cnlDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgIHNldFN0YXRlKFxuICAgICAgICBkYXRhLmZpbHRlcihcbiAgICAgICAgICAoaG9zdGluZykgPT5cbiAgICAgICAgICAgIGhvc3RpbmcuY291bnRyeS50b0xvd2VyQ2FzZSgpID09PSBjb3VudHJ5LmNvdW50cnkudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KGBObyBiZWFjaCBjbGVhbnVwcyBmb3VuZCBmb3IgJHtjb3VudHJ5LmNvdW50cnl9YCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KGlkKSB7XG4gICAgcm91dGVyLnB1c2goYC9yZXN1bHRzLyR7aWR9P2ApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7c3RhdGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBzdGF0ZS5tYXAoKGhvc3RpbmcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KGhvc3RpbmcuaWQpfT5cbiAgICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7aG9zdGluZy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgRGF0ZToge2Ake2hvc3RpbmcuZGF5fXRoICR7aG9zdGluZy5tb250aH0gJHtob3N0aW5nLnllYXJ9YH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgey8qPHA+RGVzY3JpcHRpb246IHtob3N0aW5nLmRlc2NyaXB0aW9ufTwvcD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8cD5SZW1hcmtzOiB7aG9zdGluZy5yZW1hcmtzfTwvcD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8cD5Db3VudHJ5OiB7aG9zdGluZy5jb3VudHJ5fTwvcD4qL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBtYXJnaW46IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Results, \"kxM2GuSULDBqkBC75lQYV6f9psY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy9pbmRleC5qcz8yZTgxIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3VudHJ5IiwidXNlQ29udGV4dCIsIkNvdW50cnlDb250ZXh0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwidG9Mb3dlckNhc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiYWxlcnQiLCJwdXNoIiwicmVkaXJlY3QiLCJpZCIsIm1hcCIsImxvY2F0aW9uIiwiZGF5IiwibW9udGgiLCJ5ZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLHNFQUFELENBQTFCOztBQUZvQixrQkFHTUMsc0RBQVEsRUFIZDtBQUFBLE1BR2JDLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUtwQkMsT0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEdBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxXQUNKTCxRQUFRLENBQ05LLElBQUksQ0FBQ0MsTUFBTCxDQUNFLFVBQUNDLE9BQUQ7QUFBQSxhQUNFQSxPQUFPLENBQUNaLE9BQVIsQ0FBZ0JhLFdBQWhCLE9BQWtDYixPQUFPLENBQUNBLE9BQVIsQ0FBZ0JhLFdBQWhCLEVBRHBDO0FBQUEsS0FERixDQURNLENBREo7QUFBQSxHQUZSLFdBVVMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVZUO0FBWUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUliLEtBQUssS0FBS2MsU0FBZCxFQUF5QjtBQUN2QixVQUFJZCxLQUFLLENBQUNlLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJDLGFBQUssdUNBQWdDcEIsT0FBTyxDQUFDQSxPQUF4QyxFQUFMO0FBQ0FGLGNBQU0sQ0FBQ3VCLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBUFEsRUFPTixDQUFDakIsS0FBRCxDQVBNLENBQVQ7O0FBU0EsV0FBU2tCLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ3BCekIsVUFBTSxDQUFDdUIsSUFBUCxvQkFBd0JFLEVBQXhCO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUEsa0JBQ0duQixLQUFLLEtBQUtjLFNBQVYsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQUdDZCxLQUFLLENBQUNvQixHQUFOLENBQVUsVUFBQ1osT0FBRDtBQUFBLDhCQUNSO0FBQUEsZ0RBQWUsV0FBZjtBQUFBLG9DQUNFO0FBQXdCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVUsUUFBUSxDQUFDVixPQUFPLENBQUNXLEVBQVQsQ0FBZDtBQUFBLGVBQWpDO0FBQUEsa0RBQWEsVUFBYjtBQUFBLHVDQUNhWCxPQUFPLENBQUNhLFFBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUEsa0RBQWEsTUFBYjtBQUFBLDZDQUNZYixPQUFPLENBQUNjLEdBRHBCLGdCQUM2QmQsT0FBTyxDQUFDZSxLQURyQyxjQUM4Q2YsT0FBTyxDQUFDZ0IsSUFEdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0RELENBbEZEOztHQUFNL0IsTztVQUNXRSxxRDs7O0tBRFhGLE87QUFvRlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzdWx0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENvdW50cnlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQ291bnRyeUNvbnRleHRcIjtcblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNvdW50cnkgPSB1c2VDb250ZXh0KENvdW50cnlDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgIHNldFN0YXRlKFxuICAgICAgICBkYXRhLmZpbHRlcihcbiAgICAgICAgICAoaG9zdGluZykgPT5cbiAgICAgICAgICAgIGhvc3RpbmcuY291bnRyeS50b0xvd2VyQ2FzZSgpID09PSBjb3VudHJ5LmNvdW50cnkudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KGBObyBiZWFjaCBjbGVhbnVwcyBmb3VuZCBmb3IgJHtjb3VudHJ5LmNvdW50cnl9YCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KGlkKSB7XG4gICAgcm91dGVyLnB1c2goYC9yZXN1bHRzLyR7aWR9P2ApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7c3RhdGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBzdGF0ZS5tYXAoKGhvc3RpbmcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KGhvc3RpbmcuaWQpfT5cbiAgICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7aG9zdGluZy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgRGF0ZToge2Ake2hvc3RpbmcuZGF5fXRoICR7aG9zdGluZy5tb250aH0gJHtob3N0aW5nLnllYXJ9YH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgey8qPHA+RGVzY3JpcHRpb246IHtob3N0aW5nLmRlc2NyaXB0aW9ufTwvcD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8cD5SZW1hcmtzOiB7aG9zdGluZy5yZW1hcmtzfTwvcD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8cD5Db3VudHJ5OiB7aG9zdGluZy5jb3VudHJ5fTwvcD4qL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBtYXJnaW46IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results/index.js\n");

/***/ })

})