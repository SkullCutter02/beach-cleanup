webpackHotUpdate_N_E("pages/forums/[uuid]",{

/***/ "./pages/forums/[uuid]/index.js":
/*!**************************************!*\
  !*** ./pages/forums/[uuid]/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/[uuid]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Post = function Post() {\n  _s();\n\n  var _forum$, _forum$2, _forum$3, _forum$4;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      forum = _useState[0],\n      setForum = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch(\"\".concat(\"http://localhost:1337\", \"/forums\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setForum(data.filter(function (forum) {\n        return forum.uuid === uuid;\n      }));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n\n  String.prototype.replaceAt = function (index, replacement) {\n    if (index >= this.length) {\n      return this.valueOf();\n    }\n\n    return this.substring(0, index) + replacement + this.substring(index + 1);\n  };\n\n  function styleBody(body) {\n    if (body !== undefined) {\n      body = body.replaceAll(\"|\", \"%0A\");\n      return body;\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-2034885642\",\n        children: forum === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2034885642\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2034885642\" + \" \" + \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"jsx-2034885642\",\n            children: (_forum$ = forum[0]) === null || _forum$ === void 0 ? void 0 : _forum$.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"jsx-2034885642\",\n            children: [\"by \", (_forum$2 = forum[0]) === null || _forum$2 === void 0 ? void 0 : _forum$2.user]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2034885642\",\n            children: styleBody((_forum$3 = forum[0]) === null || _forum$3 === void 0 ? void 0 : _forum$3.body)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n            className: \"jsx-2034885642\",\n            children: [\"Publication Date: \", (_forum$4 = forum[0]) === null || _forum$4 === void 0 ? void 0 : _forum$4.date]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2034885642\",\n      children: \".container.jsx-2034885642{width:60%;margin:0 auto;}h1.jsx-2034885642,h5.jsx-2034885642,h6.jsx-2034885642{text-align:center;margin-top:30px;}h5.jsx-2034885642{margin-top:5px;}h6.jsx-2034885642{margin-top:30px;}p.jsx-2034885642{margin-top:20px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvZm9ydW1zL1t1dWlkXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBR3FCLEFBT1EsQUFLSCxBQUlDLEFBSUEsVUFuQkYsS0FZaEIsQ0FJQSxBQUlBLEVBYmtCLE1BTmxCLFVBT0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9mb3J1bXMvW3V1aWRdL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1dWlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtmb3J1bSwgc2V0Rm9ydW1dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2ZvcnVtc2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEZvcnVtKGRhdGEuZmlsdGVyKChmb3J1bSkgPT4gZm9ydW0udXVpZCA9PT0gdXVpZCkpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbXSk7XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQgPSBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyaW5nKDAsIGluZGV4KSArIHJlcGxhY2VtZW50ICsgdGhpcy5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzdHlsZUJvZHkoYm9keSkge1xuICAgIGlmIChib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGJvZHkgPSBib2R5LnJlcGxhY2VBbGwoXCJ8XCIsIFwiJTBBXCIpO1xuICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7Zm9ydW0gPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDE+e2ZvcnVtWzBdPy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8aDU+Ynkge2ZvcnVtWzBdPy51c2VyfTwvaDU+XG4gICAgICAgICAgICAgIDxwPntzdHlsZUJvZHkoZm9ydW1bMF0/LmJvZHkpfTwvcD5cbiAgICAgICAgICAgICAgPGg2PlB1YmxpY2F0aW9uIERhdGU6IHtmb3J1bVswXT8uZGF0ZX08L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/[uuid]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"QMPri8lVXUnObz84+FTikQPCIRo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ydW1zL1t1dWlkXS9pbmRleC5qcz9kYmYxIl0sIm5hbWVzIjpbIlBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1dWlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImZvcnVtIiwic2V0Rm9ydW0iLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU3RyaW5nIiwicHJvdG90eXBlIiwicmVwbGFjZUF0IiwiaW5kZXgiLCJyZXBsYWNlbWVudCIsImxlbmd0aCIsInZhbHVlT2YiLCJzdWJzdHJpbmciLCJzdHlsZUJvZHkiLCJib2R5IiwidW5kZWZpbmVkIiwicmVwbGFjZUFsbCIsInRpdGxlIiwidXNlciIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURpQixNQUVUQyxJQUZTLEdBRUFGLE1BQU0sQ0FBQ0csS0FGUCxDQUVURCxJQUZTOztBQUFBLGtCQUdTRSxzREFBUSxFQUhqQjtBQUFBLE1BR1ZDLEtBSFU7QUFBQSxNQUdIQyxRQUhHOztBQUtqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssV0FBSUMsdUJBQUosYUFBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRDtBQUFBLGFBQVVQLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ1QsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0gsSUFBTixLQUFlQSxJQUExQjtBQUFBLE9BQVosQ0FBRCxDQUFsQjtBQUFBLEtBRlIsV0FHUyxVQUFDYSxHQUFEO0FBQUEsYUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEtBSFQ7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BRyxRQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQWpCLEdBQTZCLFVBQVVDLEtBQVYsRUFBaUJDLFdBQWpCLEVBQThCO0FBQ3pELFFBQUlELEtBQUssSUFBSSxLQUFLRSxNQUFsQixFQUEwQjtBQUN4QixhQUFPLEtBQUtDLE9BQUwsRUFBUDtBQUNEOztBQUVELFdBQU8sS0FBS0MsU0FBTCxDQUFlLENBQWYsRUFBa0JKLEtBQWxCLElBQTJCQyxXQUEzQixHQUF5QyxLQUFLRyxTQUFMLENBQWVKLEtBQUssR0FBRyxDQUF2QixDQUFoRDtBQUNELEdBTkQ7O0FBUUEsV0FBU0ssU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsUUFBSUEsSUFBSSxLQUFLQyxTQUFiLEVBQXdCO0FBQ3RCRCxVQUFJLEdBQUdBLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixFQUFxQixLQUFyQixDQUFQO0FBQ0EsYUFBT0YsSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUEsa0JBQ0d0QixLQUFLLEtBQUt1QixTQUFWLGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZ0JBR0M7QUFBQSw4Q0FBZSxXQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBLGlDQUFLdkIsS0FBSyxDQUFDLENBQUQsQ0FBViw0Q0FBSyxRQUFVeUI7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBLDBDQUFRekIsS0FBSyxDQUFDLENBQUQsQ0FBYiw2Q0FBUSxTQUFVMEIsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQTtBQUFBLHNCQUFJTCxTQUFTLGFBQUNyQixLQUFLLENBQUMsQ0FBRCxDQUFOLDZDQUFDLFNBQVVzQixJQUFYO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQSx5REFBdUJ0QixLQUFLLENBQUMsQ0FBRCxDQUE1Qiw2Q0FBdUIsU0FBVTJCLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBdkVEOztHQUFNakMsSTtVQUNXRSxxRDs7O0tBRFhGLEk7QUF5RVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZm9ydW1zL1t1dWlkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgUG9zdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbZm9ydW0sIHNldEZvcnVtXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9mb3J1bXNgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRGb3J1bShkYXRhLmZpbHRlcigoZm9ydW0pID0+IGZvcnVtLnV1aWQgPT09IHV1aWQpKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfSwgW10pO1xuXG4gIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUF0ID0gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN1YnN0cmluZygwLCBpbmRleCkgKyByZXBsYWNlbWVudCArIHRoaXMuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3R5bGVCb2R5KGJvZHkpIHtcbiAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBib2R5ID0gYm9keS5yZXBsYWNlQWxsKFwifFwiLCBcIiUwQVwiKTtcbiAgICAgIHJldHVybiBib2R5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge2ZvcnVtID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgxPntmb3J1bVswXT8udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGg1PmJ5IHtmb3J1bVswXT8udXNlcn08L2g1PlxuICAgICAgICAgICAgICA8cD57c3R5bGVCb2R5KGZvcnVtWzBdPy5ib2R5KX08L3A+XG4gICAgICAgICAgICAgIDxoNj5QdWJsaWNhdGlvbiBEYXRlOiB7Zm9ydW1bMF0/LmRhdGV9PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMSxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forums/[uuid]/index.js\n");

/***/ })

})