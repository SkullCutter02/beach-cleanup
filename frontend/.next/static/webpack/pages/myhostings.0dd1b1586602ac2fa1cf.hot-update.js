webpackHotUpdate_N_E("pages/myhostings",{

/***/ "./pages/myhostings.js":
/*!*****************************!*\
  !*** ./pages/myhostings.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils */ \"./Utils.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar MyHostings = function MyHostings() {\n  _s();\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (data === null) {\n      router.push(\"/signup\");\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (data !== null) {\n      fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n        return res.json();\n      }).then(function (resData) {\n        return setState(resData.filter(function (hosting) {\n          return hosting.user === data.user.username;\n        }));\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [data]);\n  console.log(state);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1415129089\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this) : state.map(function (hosting) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1415129089\" + \" \" + \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/results/\".concat(hosting.uuid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-1415129089\" + \" \" + \"location\",\n              children: [\"Location: \", hosting.location]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-1415129089\" + \" \" + \"date\",\n            children: [\"Date:\", \" \", \"\".concat(hosting.date.slice(8, 10)).concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_7__[\"determineEnd\"])(hosting.date.charAt(9)), \" \").concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_7__[\"determineMonth\"])(hosting.date.slice(5, 7)), \" \").concat(hosting.date.slice(0, 4))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1415129089\",\n      children: \".container.jsx-1415129089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;height:90px;border:1px solid lightgray;border-radius:30px;margin:40px auto;}p.jsx-1415129089{color:grey;margin:0 50px;}.location.jsx-1415129089{font-size:1.4rem;cursor:pointer;}.date.jsx-1415129089{font-size:1.1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvbXlob3N0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBR3dCLEFBV0YsQUFLTSxBQUtBLFdBVEgsTUFLQyxBQUtqQixRQVRBLE9BS0EsMENBakJnQyxtSEFDWCw2RkFDVCxVQUNFLFlBQ2UsMkJBQ1IsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvbXlob3N0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGRldGVybWluZUVuZCwgZGV0ZXJtaW5lTW9udGggfSBmcm9tIFwiLi4vVXRpbHNcIjtcblxuY29uc3QgTXlIb3N0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNEYXRhKSA9PlxuICAgICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAgcmVzRGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXNlciA9PT0gZGF0YS51c2VyLnVzZXJuYW1lKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBzdGF0ZS5tYXAoKGhvc3RpbmcpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVzdWx0cy8ke2hvc3RpbmcudXVpZH1gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7aG9zdGluZy5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICAgIHtgJHtob3N0aW5nLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgICAgaG9zdGluZy5kYXRlLmNoYXJBdCg5KVxuICAgICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgICBob3N0aW5nLmRhdGUuc2xpY2UoNSwgNylcbiAgICAgICAgICAgICAgICApfSAke2hvc3RpbmcuZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlIb3N0aW5ncztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyHostings, \"M8T/pftyqAcbZ1KZoDlOW8Tnfig=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = MyHostings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyHostings);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyHostings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlob3N0aW5ncy5qcz9iZDkxIl0sIm5hbWVzIjpbIk15SG9zdGluZ3MiLCJkYXRhIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwicHVzaCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzRGF0YSIsImZpbHRlciIsImhvc3RpbmciLCJ1c2VyIiwidXNlcm5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwibWFwIiwidXVpZCIsImxvY2F0aW9uIiwiZGF0ZSIsInNsaWNlIiwiZGV0ZXJtaW5lRW5kIiwiY2hhckF0IiwiZGV0ZXJtaW5lTW9udGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZ1QixrQkFHR0Msc0RBQVEsRUFIWDtBQUFBLE1BR2hCQyxLQUhnQjtBQUFBLE1BR1RDLFFBSFM7O0FBS3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkcsWUFBTSxDQUFDTSxJQUFQLENBQVksU0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQlUsV0FBSyxXQUFJQyx1QkFBSixlQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxPQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxPQUFEO0FBQUEsZUFDSlIsUUFBUSxDQUNOUSxPQUFPLENBQUNDLE1BQVIsQ0FBZSxVQUFDQyxPQUFEO0FBQUEsaUJBQWFBLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQmxCLElBQUksQ0FBQ2tCLElBQUwsQ0FBVUMsUUFBeEM7QUFBQSxTQUFmLENBRE0sQ0FESjtBQUFBLE9BRlIsV0FPUyxVQUFDQyxHQUFEO0FBQUEsZUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLE9BUFQ7QUFRRDtBQUNGLEdBWFEsRUFXTixDQUFDcEIsSUFBRCxDQVhNLENBQVQ7QUFZQXFCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBWjtBQUVBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUEsZ0JBQ0dBLEtBQUssS0FBS2lCLFNBQVYsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBR0NqQixLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ1AsT0FBRDtBQUFBLDRCQUNSO0FBQUEsOENBQWUsV0FBZjtBQUFBLGtDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUkscUJBQWNBLE9BQU8sQ0FBQ1EsSUFBdEIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEsa0RBQWEsVUFBYjtBQUFBLHVDQUFtQ1IsT0FBTyxDQUFDUyxRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBQSxnREFBYSxNQUFiO0FBQUEsZ0NBQ1EsR0FEUixZQUVNVCxPQUFPLENBQUNVLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQixFQUF0QixDQUZOLFNBRWtDQywyREFBWSxDQUMxQ1osT0FBTyxDQUFDVSxJQUFSLENBQWFHLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FEMEMsQ0FGOUMsY0FJT0MsNkRBQWMsQ0FDakJkLE9BQU8sQ0FBQ1UsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBRGlCLENBSnJCLGNBTU9YLE9BQU8sQ0FBQ1UsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0E3RUQ7O0dBQU03QixVO1VBRVdLLHFEOzs7S0FGWEwsVTtBQStFU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9teWhvc3RpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgZGV0ZXJtaW5lRW5kLCBkZXRlcm1pbmVNb250aCB9IGZyb20gXCIuLi9VdGlsc1wiO1xuXG5jb25zdCBNeUhvc3RpbmdzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbnVwXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc0RhdGEpID0+XG4gICAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICByZXNEYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51c2VyID09PSBkYXRhLnVzZXIudXNlcm5hbWUpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIHN0YXRlLm1hcCgoaG9zdGluZykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXN1bHRzLyR7aG9zdGluZy51dWlkfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtob3N0aW5nLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgRGF0ZTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge2Ake2hvc3RpbmcuZGF0ZS5zbGljZSg4LCAxMCl9JHtkZXRlcm1pbmVFbmQoXG4gICAgICAgICAgICAgICAgICBob3N0aW5nLmRhdGUuY2hhckF0KDkpXG4gICAgICAgICAgICAgICAgKX0gJHtkZXRlcm1pbmVNb250aChcbiAgICAgICAgICAgICAgICAgIGhvc3RpbmcuZGF0ZS5zbGljZSg1LCA3KVxuICAgICAgICAgICAgICAgICl9ICR7aG9zdGluZy5kYXRlLnNsaWNlKDAsIDQpfWB9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgbWFyZ2luOiAwIDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUhvc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/myhostings.js\n");

/***/ })

})