webpackHotUpdate_N_E("pages/forums/create",{

/***/ "./pages/forums/create.js":
/*!********************************!*\
  !*** ./pages/forums/create.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/UserContext */ \"./context/UserContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/create.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CreateForum = function CreateForum() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_9__[\"UserContext\"]).data;\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (localStorage.getItem(\"identifier\") === null || localStorage.getItem(\"password\") === null) {\n      router.push(\"/login\");\n    }\n  }, []);\n\n  var post = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var title, body, uuid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              title = document.getElementById(\"title\").value;\n              body = document.getElementById(\"body\").value;\n              uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])();\n              axios__WEBPACK_IMPORTED_MODULE_6___default()({\n                method: \"POST\",\n                url: \"\".concat(\"http://localhost:1337\", \"/forums\"),\n                data: {\n                  title: title,\n                  body: body,\n                  user: userData.user.username,\n                  date: new Date().toDateString(),\n                  uuid: uuid\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(userData.jwt)\n                }\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function post(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1187082947\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-1187082947\",\n          children: \"Create Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n          onSubmit: post,\n          className: \"jsx-1187082947\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            placeholder: \"Title\",\n            id: \"title\",\n            name: \"title\",\n            className: \"jsx-1187082947\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"body\",\n            className: \"jsx-1187082947\",\n            children: \"Post Body (Pipeline character | to start a new paragraph)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"body\",\n            id: \"body\",\n            cols: \"64\",\n            rows: \"30\",\n            placeholder: \"Post Body\",\n            className: \"jsx-1187082947\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1187082947\",\n            children: \"Post\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1187082947\",\n      children: \"h1.jsx-1187082947{text-align:center;margin-top:15px;}form.jsx-1187082947{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.jsx-1187082947{display:block;height:25px;width:500px;margin-top:30px;}label.jsx-1187082947{margin-top:30px;}textarea.jsx-1187082947{margin-top:5px;}button.jsx-1187082947{margin-top:30px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvZm9ydW1zL2NyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RWtCLEFBRzZCLEFBS0wsQUFNQyxBQU9FLEFBSUQsQUFJQyxjQWRKLENBV2QsQ0FKQSxBQVFBLEVBMUJrQixRQVlKLFFBWGQsSUFZa0IsZ0JBQ2xCLG9CQVR3Qiw4RUFDSCw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9mb3J1bXMvY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5jb25zdCBDcmVhdGVGb3J1bSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCkuZGF0YTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRlbnRpZmllclwiKSA9PT0gbnVsbCB8fFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKSA9PT0gbnVsbFxuICAgICkge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKS52YWx1ZTtcbiAgICBsZXQgdXVpZCA9IHV1aWR2NCgpO1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vZm9ydW1zYCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICB1c2VyOiB1c2VyRGF0YS51c2VyLnVzZXJuYW1lLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJEYXRhLmp3dH1gLFxuICAgICAgfSxcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5DcmVhdGUgUG9zdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3R9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYm9keVwiPlxuICAgICAgICAgICAgICBQb3N0IEJvZHkgKFBpcGVsaW5lIGNoYXJhY3RlciB8IHRvIHN0YXJ0IGEgbmV3IHBhcmFncmFwaClcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxuICAgICAgICAgICAgICBpZD1cImJvZHlcIlxuICAgICAgICAgICAgICBjb2xzPVwiNjRcIlxuICAgICAgICAgICAgICByb3dzPVwiMzBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc3QgQm9keVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifT5Qb3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRm9ydW07XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/create.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CreateForum, \"ZfMaBLHoU2e0MRjLNX0ic67qSb8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = CreateForum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateForum);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateForum\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ydW1zL2NyZWF0ZS5qcz9jNDZiIl0sIm5hbWVzIjpbIkNyZWF0ZUZvcnVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJkYXRhIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJwb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJib2R5IiwidXVpZCIsInV1aWR2NCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInVzZXIiLCJ1c2VybmFtZSIsImRhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLGdFQUFELENBQVYsQ0FBd0JDLElBQXpDO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQ0VDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixNQUF1QyxJQUF2QyxJQUNBRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsTUFBcUMsSUFGdkMsRUFHRTtBQUNBUixZQUFNLENBQUNTLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1DLElBQUk7QUFBQSxnTUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEEsZUFBQyxDQUFDQyxjQUFGO0FBRUlDLG1CQUhPLEdBR0NDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FIbEM7QUFJUEMsa0JBSk8sR0FJQUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUpoQztBQUtQRSxrQkFMTyxHQUtBQywrQ0FBTSxFQUxOO0FBT1hDLDBEQUFLLENBQUM7QUFDSkMsc0JBQU0sRUFBRSxNQURKO0FBRUpDLG1CQUFHLFlBQUtDLHVCQUFMLFlBRkM7QUFHSmxCLG9CQUFJLEVBQUU7QUFDSlEsdUJBQUssRUFBRUEsS0FESDtBQUVKSSxzQkFBSSxFQUFFQSxJQUZGO0FBR0pPLHNCQUFJLEVBQUV0QixRQUFRLENBQUNzQixJQUFULENBQWNDLFFBSGhCO0FBSUpDLHNCQUFJLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxZQUFYLEVBSkY7QUFLSlYsc0JBQUksRUFBRUE7QUFMRixpQkFIRjtBQVVKVyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLG1CQUFZNUIsUUFBUSxDQUFDNkIsR0FBckI7QUFETjtBQVZMLGVBQUQsQ0FBTCxVQWFTLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLGVBYlQ7O0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSnRCLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUF1QkEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBRUEsSUFBaEI7QUFBQTtBQUFBLGtDQUNFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLHVCQUFXLEVBQUMsT0FIZDtBQUlFLGNBQUUsRUFBQyxPQUpMO0FBS0UsZ0JBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBTyxtQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVdFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGNBQUUsRUFBQyxNQUhMO0FBSUUsZ0JBQUksRUFBQyxJQUpQO0FBS0UsZ0JBQUksRUFBQyxJQUxQO0FBTUUsdUJBQVcsRUFBQyxXQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLGVBbUJFO0FBQVEsZ0JBQUksRUFBRSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4REQsQ0FsR0Q7O0dBQU1YLFc7VUFDV0UscUQ7OztLQURYRixXO0FBb0dTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZvcnVtcy9jcmVhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IENyZWF0ZUZvcnVtID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KS5kYXRhO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZGVudGlmaWVyXCIpID09PSBudWxsIHx8XG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpID09PSBudWxsXG4gICAgKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwb3N0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpLnZhbHVlO1xuICAgIGxldCB1dWlkID0gdXVpZHY0KCk7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9mb3J1bXNgLFxuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIHVzZXI6IHVzZXJEYXRhLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckRhdGEuand0fWAsXG4gICAgICB9LFxuICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxPkNyZWF0ZSBQb3N0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJib2R5XCI+XG4gICAgICAgICAgICAgIFBvc3QgQm9keSAoUGlwZWxpbmUgY2hhcmFjdGVyIHwgdG8gc3RhcnQgYSBuZXcgcGFyYWdyYXBoKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgICAgICAgIGlkPVwiYm9keVwiXG4gICAgICAgICAgICAgIGNvbHM9XCI2NFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIzMFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdCBCb2R5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVGb3J1bTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forums/create.js\n");

/***/ })

})