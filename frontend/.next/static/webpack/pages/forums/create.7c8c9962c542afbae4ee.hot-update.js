webpackHotUpdate_N_E("pages/forums/create",{

/***/ "./pages/forums/create.js":
/*!********************************!*\
  !*** ./pages/forums/create.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/UserContext */ \"./context/UserContext.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/create.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CreateForum = function CreateForum() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"UserContext\"]).data;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (localStorage.getItem(\"identifier\") === null || localStorage.getItem(\"password\") === null) {\n      router.push(\"/login\");\n    }\n  }, []);\n\n  var post = function post(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-3558842870\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-3558842870\",\n          children: \"Create Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: post,\n          className: \"jsx-3558842870\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            placeholder: \"Title\",\n            id: \"title\",\n            name: \"title\",\n            className: \"jsx-3558842870\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"body\",\n            id: \"body\",\n            cols: \"64\",\n            rows: \"30\",\n            placeholder: \"Post Body\",\n            className: \"jsx-3558842870\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-3558842870\",\n            children: \"Post\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3558842870\",\n      children: \"h1.jsx-3558842870{text-align:center;margin-top:15px;}form.jsx-3558842870{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.jsx-3558842870{display:block;height:25px;width:500px;margin-top:30px;}textarea.jsx-3558842870{margin-top:30px;}button.jsx-3558842870{margin-top:30px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvZm9ydW1zL2NyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBRzZCLEFBS0wsQUFNQyxBQU9FLEFBSUEsY0FWSixFQU9kLEFBSUEsRUF0QmtCLFFBWUosUUFYZCxJQVlrQixnQkFDbEIsb0JBVHdCLDhFQUNILDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvV2ViU3Rvcm1Qcm9qZWN0cy9iZWFjaC1jbGVhbnVwL2Zyb250ZW5kL3BhZ2VzL2ZvcnVtcy9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuY29uc3QgQ3JlYXRlRm9ydW0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpLmRhdGE7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIikgPT09IG51bGwgfHxcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIikgPT09IG51bGxcbiAgICApIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5DcmVhdGUgUG9zdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3R9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgICAgICAgIGlkPVwiYm9keVwiXG4gICAgICAgICAgICAgIGNvbHM9XCI2NFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIzMFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdCBCb2R5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUZvcnVtO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/create.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CreateForum, \"ZfMaBLHoU2e0MRjLNX0ic67qSb8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = CreateForum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateForum);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateForum\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ydW1zL2NyZWF0ZS5qcz9jNDZiIl0sIm5hbWVzIjpbIkNyZWF0ZUZvcnVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJkYXRhIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJwb3N0IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUFWLENBQXdCQyxJQUF6QztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFBdkMsSUFDQUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLElBRnZDLEVBR0U7QUFDQVIsWUFBTSxDQUFDUyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQU87QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBRUYsSUFBaEI7QUFBQTtBQUFBLGtDQUNFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLHVCQUFXLEVBQUMsT0FIZDtBQUlFLGNBQUUsRUFBQyxPQUpMO0FBS0UsZ0JBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxvQkFBUSxNQURWO0FBRUUsZ0JBQUksRUFBQyxNQUZQO0FBR0UsY0FBRSxFQUFDLE1BSEw7QUFJRSxnQkFBSSxFQUFDLElBSlA7QUFLRSxnQkFBSSxFQUFDLElBTFA7QUFNRSx1QkFBVyxFQUFDLFdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFnQkU7QUFBUSxnQkFBSSxFQUFFLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQXhFRDs7R0FBTVgsVztVQUNXRSxxRDs7O0tBRFhGLFc7QUEwRVNBLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZm9ydW1zL2NyZWF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuXG5jb25zdCBDcmVhdGVGb3J1bSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCkuZGF0YTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRlbnRpZmllclwiKSA9PT0gbnVsbCB8fFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKSA9PT0gbnVsbFxuICAgICkge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxPkNyZWF0ZSBQb3N0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgICAgaWQ9XCJib2R5XCJcbiAgICAgICAgICAgICAgY29scz1cIjY0XCJcbiAgICAgICAgICAgICAgcm93cz1cIjMwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3N0IEJvZHlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+UG9zdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRm9ydW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forums/create.js\n");

/***/ })

})