webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  fetch(\"http://localhost:1337/hostings\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    setState(data.filter(function (hosting) {\n      return hosting.uuid === id;\n    }));\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  var end = \"\";\n\n  if (state.length !== 0) {\n    switch (state[0].day.toString().charAt(state[0].day.toString().length - 1)) {\n      case \"1\":\n        end = \"st\";\n        break;\n\n      case \"2\":\n        end = \"nd\";\n        break;\n\n      case \"3\":\n        end = \"rd\";\n        break;\n\n      default:\n        end = \"th\";\n        break;\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1280919585\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1280919585\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Date: \", \"\".concat(state[0].day).concat(end, \" \").concat(state[0].month, \" \").concat(state[0].year)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-1280919585\",\n          children: [\"Remarks: \", state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1280919585\",\n      children: \"p.jsx-1280919585{margin:30px 20px;}.location.jsx-1280919585{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHNEIsQUFJQSxpQkFIbkIsQUFJQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gaWQpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBsZXQgZW5kID0gXCJcIjtcbiAgaWYgKHN0YXRlLmxlbmd0aCAhPT0gMCkge1xuICAgIHN3aXRjaCAoXG4gICAgICBzdGF0ZVswXS5kYXkudG9TdHJpbmcoKS5jaGFyQXQoc3RhdGVbMF0uZGF5LnRvU3RyaW5nKCkubGVuZ3RoIC0gMSlcbiAgICApIHtcbiAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgIGVuZCA9IFwic3RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICBlbmQgPSBcIm5kXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgZW5kID0gXCJyZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVuZCA9IFwidGhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7c3RhdGVbMF0ubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERhdGU6IHtgJHtzdGF0ZVswXS5kYXl9JHtlbmR9ICR7c3RhdGVbMF0ubW9udGh9ICR7c3RhdGVbMF0ueWVhcn1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5SZW1hcmtzOiB7c3RhdGVbMF0ucmVtYXJrc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"QCk8gxNJWrlu/fJvy0B1Y7sNhZk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyIiwiaG9zdGluZyIsInV1aWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZW5kIiwibGVuZ3RoIiwiZGF5IiwidG9TdHJpbmciLCJjaGFyQXQiLCJsb2NhdGlvbiIsIm1vbnRoIiwieWVhciIsImRlc2NyaXB0aW9uIiwicmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENkIsTUFFckJDLEVBRnFCLEdBRWRGLE1BQU0sQ0FBQ0csS0FGTyxDQUVyQkQsRUFGcUI7O0FBQUEsa0JBR0hFLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFLN0JDLE9BQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEwsWUFBUSxDQUFDSyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCWixFQUE5QjtBQUFBLEtBQVosQ0FBRCxDQUFSO0FBQ0QsR0FKSCxXQUtTLFVBQUNhLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FMVDtBQU9BLE1BQUlHLEdBQUcsR0FBRyxFQUFWOztBQUNBLE1BQUliLEtBQUssQ0FBQ2MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixZQUNFZCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEdBQVQsQ0FBYUMsUUFBYixHQUF3QkMsTUFBeEIsQ0FBK0JqQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEdBQVQsQ0FBYUMsUUFBYixHQUF3QkYsTUFBeEIsR0FBaUMsQ0FBaEUsQ0FERjtBQUdFLFdBQUssR0FBTDtBQUNFRCxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFQSxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFQSxXQUFHLEdBQUcsSUFBTjtBQUNBOztBQUNGO0FBQ0VBLFdBQUcsR0FBRyxJQUFOO0FBQ0E7QUFkSjtBQWdCRDs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBLGdCQUNHYixLQUFLLENBQUNjLE1BQU4sS0FBaUIsQ0FBakIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGdCQUdDO0FBQUEsNENBQWUsV0FBZjtBQUFBLGdDQUNFO0FBQUEsOENBQWEsVUFBYjtBQUFBLG1DQUFtQ2QsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTa0IsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBLHlDQUNZbEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZSxHQURyQixTQUMyQkYsR0FEM0IsY0FDa0NiLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU21CLEtBRDNDLGNBQ29EbkIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTb0IsSUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBQTtBQUFBLHNDQUFpQnBCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3FCLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUE7QUFBQSxrQ0FBYXJCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3NCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0E1REQ7O0dBQU01QixnQjtVQUNXRSxxRDs7O0tBRFhGLGdCO0FBOERTQSwrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2hvc3RpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gaWQpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBsZXQgZW5kID0gXCJcIjtcbiAgaWYgKHN0YXRlLmxlbmd0aCAhPT0gMCkge1xuICAgIHN3aXRjaCAoXG4gICAgICBzdGF0ZVswXS5kYXkudG9TdHJpbmcoKS5jaGFyQXQoc3RhdGVbMF0uZGF5LnRvU3RyaW5nKCkubGVuZ3RoIC0gMSlcbiAgICApIHtcbiAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgIGVuZCA9IFwic3RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICBlbmQgPSBcIm5kXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgZW5kID0gXCJyZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVuZCA9IFwidGhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7c3RhdGVbMF0ubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERhdGU6IHtgJHtzdGF0ZVswXS5kYXl9JHtlbmR9ICR7c3RhdGVbMF0ubW9udGh9ICR7c3RhdGVbMF0ueWVhcn1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5SZW1hcmtzOiB7c3RhdGVbMF0ucmVtYXJrc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})