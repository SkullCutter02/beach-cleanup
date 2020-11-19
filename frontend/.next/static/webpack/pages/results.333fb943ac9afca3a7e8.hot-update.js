webpackHotUpdate_N_E("pages/results",{

/***/ "./pages/results/index.js":
/*!********************************!*\
  !*** ./pages/results/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_CountryContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/CountryContext */ \"./context/CountryContext.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Results = function Results() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var country = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_CountryContext__WEBPACK_IMPORTED_MODULE_5__[\"CountryContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"http://localhost:1337/hostings\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    return setState(data.filter(function (hosting) {\n      return hosting.country.toLowerCase() === country.country.toLowerCase();\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (state !== undefined) {\n      if (state.length === 0) {\n        alert(\"No beach cleanups found for \".concat(country.country));\n        router.push(\"/\");\n      }\n    }\n  }, [state]);\n\n  function redirect() {\n    router.push({});\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1415129089\",\n        children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1415129089\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this) : state.map(function (hosting) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1415129089\" + \" \" + \"container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              onClick: redirect,\n              className: \"jsx-1415129089\" + \" \" + \"location\",\n              children: [\"Location: \", hosting.location]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-1415129089\" + \" \" + \"date\",\n              children: [\"Date: \", \"\".concat(hosting.day, \"th \").concat(hosting.month, \" \").concat(hosting.year)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1415129089\",\n      children: \".container.jsx-1415129089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;height:90px;border:1px solid lightgray;border-radius:30px;margin:40px auto;}p.jsx-1415129089{color:grey;margin:0 50px;}.location.jsx-1415129089{font-size:1.4rem;cursor:pointer;}.date.jsx-1415129089{font-size:1.1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBR3dCLEFBV0YsQUFLTSxBQUtBLFdBVEgsTUFLQyxBQUtqQixRQVRBLE9BS0EsMENBakJnQyxtSEFDWCw2RkFDVCxVQUNFLFlBQ2UsMkJBQ1IsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENvdW50cnlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQ291bnRyeUNvbnRleHRcIjtcblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNvdW50cnkgPSB1c2VDb250ZXh0KENvdW50cnlDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgIHNldFN0YXRlKFxuICAgICAgICBkYXRhLmZpbHRlcihcbiAgICAgICAgICAoaG9zdGluZykgPT5cbiAgICAgICAgICAgIGhvc3RpbmcuY291bnRyeS50b0xvd2VyQ2FzZSgpID09PSBjb3VudHJ5LmNvdW50cnkudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KGBObyBiZWFjaCBjbGVhbnVwcyBmb3VuZCBmb3IgJHtjb3VudHJ5LmNvdW50cnl9YCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xuICAgIHJvdXRlci5wdXNoKHt9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge3N0YXRlID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgc3RhdGUubWFwKChob3N0aW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIiBvbkNsaWNrPXtyZWRpcmVjdH0+XG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbjoge2hvc3RpbmcubG9jYXRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgIERhdGU6IHtgJHtob3N0aW5nLmRheX10aCAke2hvc3RpbmcubW9udGh9ICR7aG9zdGluZy55ZWFyfWB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHsvKjxwPkRlc2NyaXB0aW9uOiB7aG9zdGluZy5kZXNjcmlwdGlvbn08L3A+Ki99XG4gICAgICAgICAgICAgICAgey8qPHA+UmVtYXJrczoge2hvc3RpbmcucmVtYXJrc308L3A+Ki99XG4gICAgICAgICAgICAgICAgey8qPHA+Q291bnRyeToge2hvc3RpbmcuY291bnRyeX08L3A+Ki99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgbWFyZ2luOiAwIDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Results, \"kxM2GuSULDBqkBC75lQYV6f9psY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy9pbmRleC5qcz8yZTgxIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3VudHJ5IiwidXNlQ29udGV4dCIsIkNvdW50cnlDb250ZXh0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwidG9Mb3dlckNhc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiYWxlcnQiLCJwdXNoIiwicmVkaXJlY3QiLCJtYXAiLCJsb2NhdGlvbiIsImRheSIsIm1vbnRoIiwieWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxzRUFBRCxDQUExQjs7QUFGb0Isa0JBR01DLHNEQUFRLEVBSGQ7QUFBQSxNQUdiQyxLQUhhO0FBQUEsTUFHTkMsUUFITTs7QUFLcEJDLE9BQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsV0FDSkwsUUFBUSxDQUNOSyxJQUFJLENBQUNDLE1BQUwsQ0FDRSxVQUFDQyxPQUFEO0FBQUEsYUFDRUEsT0FBTyxDQUFDWixPQUFSLENBQWdCYSxXQUFoQixPQUFrQ2IsT0FBTyxDQUFDQSxPQUFSLENBQWdCYSxXQUFoQixFQURwQztBQUFBLEtBREYsQ0FETSxDQURKO0FBQUEsR0FGUixXQVVTLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FWVDtBQVlBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYixLQUFLLEtBQUtjLFNBQWQsRUFBeUI7QUFDdkIsVUFBSWQsS0FBSyxDQUFDZSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxhQUFLLHVDQUFnQ3BCLE9BQU8sQ0FBQ0EsT0FBeEMsRUFBTDtBQUNBRixjQUFNLENBQUN1QixJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVBRLEVBT04sQ0FBQ2pCLEtBQUQsQ0FQTSxDQUFUOztBQVNBLFdBQVNrQixRQUFULEdBQW9CO0FBQ2xCeEIsVUFBTSxDQUFDdUIsSUFBUCxDQUFZLEVBQVo7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQSxrQkFDR2pCLEtBQUssS0FBS2MsU0FBVixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBR0NkLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFDWCxPQUFEO0FBQUEsOEJBQ1I7QUFBQSxnREFBZSxXQUFmO0FBQUEsb0NBQ0U7QUFBd0IscUJBQU8sRUFBRVUsUUFBakM7QUFBQSxrREFBYSxVQUFiO0FBQUEsdUNBQ2FWLE9BQU8sQ0FBQ1ksUUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQSxrREFBYSxNQUFiO0FBQUEsNkNBQ1laLE9BQU8sQ0FBQ2EsR0FEcEIsZ0JBQzZCYixPQUFPLENBQUNjLEtBRHJDLGNBQzhDZCxPQUFPLENBQUNlLElBRHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFWO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQWxGRDs7R0FBTTlCLE87VUFDV0UscUQ7OztLQURYRixPO0FBb0ZTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Jlc3VsdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDb3VudHJ5Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0NvdW50cnlDb250ZXh0XCI7XG5cbmNvbnN0IFJlc3VsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBjb3VudHJ5ID0gdXNlQ29udGV4dChDb3VudHJ5Q29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKTtcblxuICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ob3N0aW5nc1wiKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICBzZXRTdGF0ZShcbiAgICAgICAgZGF0YS5maWx0ZXIoXG4gICAgICAgICAgKGhvc3RpbmcpID0+XG4gICAgICAgICAgICBob3N0aW5nLmNvdW50cnkudG9Mb3dlckNhc2UoKSA9PT0gY291bnRyeS5jb3VudHJ5LnRvTG93ZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhbGVydChgTm8gYmVhY2ggY2xlYW51cHMgZm91bmQgZm9yICR7Y291bnRyeS5jb3VudHJ5fWApO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGVdKTtcblxuICBmdW5jdGlvbiByZWRpcmVjdCgpIHtcbiAgICByb3V0ZXIucHVzaCh7fSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIHtzdGF0ZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHN0YXRlLm1hcCgoaG9zdGluZykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCIgb25DbGljaz17cmVkaXJlY3R9PlxuICAgICAgICAgICAgICAgICAgTG9jYXRpb246IHtob3N0aW5nLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICBEYXRlOiB7YCR7aG9zdGluZy5kYXl9dGggJHtob3N0aW5nLm1vbnRofSAke2hvc3RpbmcueWVhcn1gfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7Lyo8cD5EZXNjcmlwdGlvbjoge2hvc3RpbmcuZGVzY3JpcHRpb259PC9wPiovfVxuICAgICAgICAgICAgICAgIHsvKjxwPlJlbWFya3M6IHtob3N0aW5nLnJlbWFya3N9PC9wPiovfVxuICAgICAgICAgICAgICAgIHsvKjxwPkNvdW50cnk6IHtob3N0aW5nLmNvdW50cnl9PC9wPiovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/index.js\n");

/***/ })

})