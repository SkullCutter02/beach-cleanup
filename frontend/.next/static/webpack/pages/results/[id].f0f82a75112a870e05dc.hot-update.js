webpackHotUpdate_N_E("pages/results/[id]",{

/***/ "./pages/results/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/results/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils */ \"./Utils.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../context/UserContext */ \"./context/UserContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar HostingSpecifics = function HostingSpecifics() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_9__[\"UserContext\"]);\n  var isUserIn;\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setState(data.filter(function (hosting) {\n        return hosting.uuid === id;\n      }));\n      state[0].users.every(function (user) {\n        return !(user.username === userData.user.username);\n      });\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n\n  var subscribe = function subscribe() {\n    axios__WEBPACK_IMPORTED_MODULE_6___default()({\n      method: \"PUT\",\n      url: \"\".concat(\"http://localhost:1337\", \"/hostings/\").concat(state[0].id),\n      data: _objectSpread(_objectSpread({}, state[0]), {}, {\n        users: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state[0].users), [userData.user])\n      }),\n      headers: {\n        Authorization: \"Bearer \".concat(userData.jwt)\n      }\n    }).then(function (res) {\n      return console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: state.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-553945907\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-553945907\" + \" \" + \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\" + \" \" + \"location\",\n          children: [\"Location: \", state[0].location]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Date:\", \" \", \"\".concat(state[0].date.slice(8, 10)).concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_8__[\"determineEnd\"])(state[0].date.charAt(9)), \" \").concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_8__[\"determineMonth\"])(state[0].date.slice(5, 7)), \" \").concat(state[0].date.slice(0, 4))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Time: \", state[0].time]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Duration: \", state[0].duration, \"hrs\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Description: \", state[0].description]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"jsx-553945907\",\n          children: [\"Remarks:\", \" \", state[0].remarks.length === 0 ? \"No Remarks\" : state[0].remarks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: subscribe,\n          className: \"jsx-553945907\" + \" \" + \"subscribe\",\n          children: isUserIn ? \"Subscribe to this event\" : \"Unsubscribe to this event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"553945907\",\n      children: \".container.jsx-553945907{margin:30px 20px;}.container.jsx-553945907 p.jsx-553945907,.container.jsx-553945907 .subscribe.jsx-553945907{margin-top:20px;}p.jsx-553945907{font-size:1rem;}.subscribe.jsx-553945907{background:greenyellow;border:1px solid grey;border-radius:4px;width:150px;height:50px;font-size:1rem;-webkit-transition:all ease-in 0.1s;transition:all ease-in 0.1s;cursor:pointer;}.subscribe.jsx-553945907:hover{background:yellow;}.location.jsx-553945907{font-size:1.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvcmVzdWx0cy9baWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFa0IsQUFHNEIsQUFLRCxBQUlELEFBSVEsQUFXTCxBQUlELGVBbEJuQixDQUpBLENBTEEsQUE0QkEsQ0FKQSxLQVh3QixzQkFDSixrQkFDTixZQUNBLFlBQ0csZUFDYSxnRUFDYixlQUNqQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL3Jlc3VsdHMvW2lkXS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGRldGVybWluZUVuZCwgZGV0ZXJtaW5lTW9udGggfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuY29uc3QgSG9zdGluZ1NwZWNpZmljcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGxldCBpc1VzZXJJbjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSBpZCkpO1xuICAgICAgICBzdGF0ZVswXS51c2Vycy5ldmVyeSgodXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAhKHVzZXIudXNlcm5hbWUgPT09IHVzZXJEYXRhLnVzZXIudXNlcm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5ncy8ke3N0YXRlWzBdLmlkfWAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLnN0YXRlWzBdLFxuICAgICAgICB1c2VyczogWy4uLnN0YXRlWzBdLnVzZXJzLCB1c2VyRGF0YS51c2VyXSxcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyRGF0YS5qd3R9YCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7c3RhdGVbMF0ubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICB7YCR7c3RhdGVbMF0uZGF0ZS5zbGljZSg4LCAxMCl9JHtkZXRlcm1pbmVFbmQoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5jaGFyQXQoOSlcbiAgICAgICAgICAgICAgKX0gJHtkZXRlcm1pbmVNb250aChcbiAgICAgICAgICAgICAgICBzdGF0ZVswXS5kYXRlLnNsaWNlKDUsIDcpXG4gICAgICAgICAgICAgICl9ICR7c3RhdGVbMF0uZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+VGltZToge3N0YXRlWzBdLnRpbWV9PC9wPlxuICAgICAgICAgICAgPHA+RHVyYXRpb246IHtzdGF0ZVswXS5kdXJhdGlvbn1ocnM8L3A+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3N0YXRlWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBSZW1hcmtzOntcIiBcIn1cbiAgICAgICAgICAgICAge3N0YXRlWzBdLnJlbWFya3MubGVuZ3RoID09PSAwID8gXCJObyBSZW1hcmtzXCIgOiBzdGF0ZVswXS5yZW1hcmtzfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJzY3JpYmVcIiBvbkNsaWNrPXtzdWJzY3JpYmV9PlxuICAgICAgICAgICAgICB7aXNVc2VySW5cbiAgICAgICAgICAgICAgICA/IFwiU3Vic2NyaWJlIHRvIHRoaXMgZXZlbnRcIlxuICAgICAgICAgICAgICAgIDogXCJVbnN1YnNjcmliZSB0byB0aGlzIGV2ZW50XCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBwLFxuICAgICAgICAuY29udGFpbmVyIC5zdWJzY3JpYmUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjFzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9zdGluZ1NwZWNpZmljcztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/results/[id]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HostingSpecifics, \"7v5r7CAfPhBF4QkPVBAeXV3vVx8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = HostingSpecifics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HostingSpecifics);\n\nvar _c;\n\n$RefreshReg$(_c, \"HostingSpecifics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0cy8vaW5kZXguanM/NTFjZiJdLCJuYW1lcyI6WyJIb3N0aW5nU3BlY2lmaWNzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXJEYXRhIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNVc2VySW4iLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwidXVpZCIsInVzZXJzIiwiZXZlcnkiLCJ1c2VyIiwidXNlcm5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3Vic2NyaWJlIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImp3dCIsImxlbmd0aCIsImxvY2F0aW9uIiwiZGF0ZSIsInNsaWNlIiwiZGV0ZXJtaW5lRW5kIiwiY2hhckF0IiwiZGV0ZXJtaW5lTW9udGgiLCJ0aW1lIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInJlbWFya3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ2QixNQUVyQkMsRUFGcUIsR0FFZEYsTUFBTSxDQUFDRyxLQUZPLENBRXJCRCxFQUZxQjs7QUFBQSxrQkFHSEUsc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkMsS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLGdFQUFELENBQTNCO0FBQ0EsTUFBSUMsUUFBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxXQUFJQyx1QkFBSixlQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFgsY0FBUSxDQUFDVyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCbEIsRUFBOUI7QUFBQSxPQUFaLENBQUQsQ0FBUjtBQUNBRyxXQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQixLQUFULENBQWVDLEtBQWYsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzdCLGVBQU8sRUFBRUEsSUFBSSxDQUFDQyxRQUFMLEtBQWtCakIsUUFBUSxDQUFDZ0IsSUFBVCxDQUFjQyxRQUFsQyxDQUFQO0FBQ0QsT0FGRDtBQUdELEtBUEgsV0FRUyxVQUFDQyxHQUFEO0FBQUEsYUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEtBUlQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUOztBQVlBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJDLGdEQUFLLENBQUM7QUFDSkMsWUFBTSxFQUFFLEtBREo7QUFFSkMsU0FBRyxZQUFLbEIsdUJBQUwsdUJBQThDUixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNILEVBQXZELENBRkM7QUFHSmUsVUFBSSxrQ0FDQ1osS0FBSyxDQUFDLENBQUQsQ0FETjtBQUVGZ0IsYUFBSyx5R0FBTWhCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dCLEtBQWYsSUFBc0JkLFFBQVEsQ0FBQ2dCLElBQS9CO0FBRkgsUUFIQTtBQU9KUyxhQUFPLEVBQUU7QUFDUEMscUJBQWEsbUJBQVkxQixRQUFRLENBQUMyQixHQUFyQjtBQUROO0FBUEwsS0FBRCxDQUFMLENBV0dwQixJQVhILENBV1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaLENBQVQ7QUFBQSxLQVhSLFdBWVMsVUFBQ1UsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQVpUO0FBYUQsR0FkRDs7QUFnQkEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSxnQkFDR3BCLEtBQUssQ0FBQzhCLE1BQU4sS0FBaUIsQ0FBakIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGdCQUdDO0FBQUEsMkNBQWUsV0FBZjtBQUFBLGdDQUNFO0FBQUEsNkNBQWEsVUFBYjtBQUFBLG1DQUFtQzlCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUytCLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQSw4QkFDUSxHQURSLFlBRU0vQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsQ0FGTixTQUVtQ0MsMkRBQVksQ0FDM0NsQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQyxJQUFULENBQWNHLE1BQWQsQ0FBcUIsQ0FBckIsQ0FEMkMsQ0FGL0MsY0FJT0MsNkRBQWMsQ0FDakJwQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEaUIsQ0FKckIsY0FNT2pDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVVFO0FBQUE7QUFBQSwrQkFBVWpDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3FDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQVdFO0FBQUE7QUFBQSxtQ0FBY3JDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3NDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFO0FBQUE7QUFBQSxzQ0FBaUJ0QyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVN1QyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFhRTtBQUFBO0FBQUEsaUNBQ1csR0FEWCxFQUVHdkMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTd0MsT0FBVCxDQUFpQlYsTUFBakIsS0FBNEIsQ0FBNUIsR0FBZ0MsWUFBaEMsR0FBK0M5QixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVN3QyxPQUYzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFpQkU7QUFBOEIsaUJBQU8sRUFBRWpCLFNBQXZDO0FBQUEsNkNBQWtCLFdBQWxCO0FBQUEsb0JBQ0dsQixRQUFRLEdBQ0wseUJBREssR0FFTDtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQXRHRDs7R0FBTVgsZ0I7VUFDV0UscUQ7OztLQURYRixnQjtBQXdHU0EsK0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVFbmQsIGRldGVybWluZU1vbnRoIH0gZnJvbSBcIi4uLy4uLy4uL1V0aWxzXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IEhvc3RpbmdTcGVjaWZpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBsZXQgaXNVc2VySW47XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXVpZCA9PT0gaWQpKTtcbiAgICAgICAgc3RhdGVbMF0udXNlcnMuZXZlcnkoKHVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gISh1c2VyLnVzZXJuYW1lID09PSB1c2VyRGF0YS51c2VyLnVzZXJuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3MvJHtzdGF0ZVswXS5pZH1gLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5zdGF0ZVswXSxcbiAgICAgICAgdXNlcnM6IFsuLi5zdGF0ZVswXS51c2VycywgdXNlckRhdGEudXNlcl0sXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckRhdGEuand0fWAsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge3N0YXRlWzBdLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEYXRlOntcIiBcIn1cbiAgICAgICAgICAgICAge2Ake3N0YXRlWzBdLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgIHN0YXRlWzBdLmRhdGUuY2hhckF0KDkpXG4gICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgc3RhdGVbMF0uZGF0ZS5zbGljZSg1LCA3KVxuICAgICAgICAgICAgICApfSAke3N0YXRlWzBdLmRhdGUuc2xpY2UoMCwgNCl9YH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlRpbWU6IHtzdGF0ZVswXS50aW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkR1cmF0aW9uOiB7c3RhdGVbMF0uZHVyYXRpb259aHJzPC9wPlxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtzdGF0ZVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUmVtYXJrczp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtzdGF0ZVswXS5yZW1hcmtzLmxlbmd0aCA9PT0gMCA/IFwiTm8gUmVtYXJrc1wiIDogc3RhdGVbMF0ucmVtYXJrc31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3Vic2NyaWJlXCIgb25DbGljaz17c3Vic2NyaWJlfT5cbiAgICAgICAgICAgICAge2lzVXNlckluXG4gICAgICAgICAgICAgICAgPyBcIlN1YnNjcmliZSB0byB0aGlzIGV2ZW50XCJcbiAgICAgICAgICAgICAgICA6IFwiVW5zdWJzY3JpYmUgdG8gdGhpcyBldmVudFwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgcCxcbiAgICAgICAgLmNvbnRhaW5lciAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4xcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3RpbmdTcGVjaWZpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results/[id]/index.js\n");

/***/ })

})