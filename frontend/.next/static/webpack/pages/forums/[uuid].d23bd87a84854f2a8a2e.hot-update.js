webpackHotUpdate_N_E("pages/forums/[uuid]",{

/***/ "./pages/forums/[uuid]/index.js":
/*!**************************************!*\
  !*** ./pages/forums/[uuid]/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/[uuid]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Post = function Post() {\n  _s();\n\n  var _forum$, _forum$2, _forum$3, _forum$4;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var uuid = router.query.uuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      forum = _useState[0],\n      setForum = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch(\"\".concat(\"http://localhost:1337\", \"/forums\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setForum(data.filter(function (forum) {\n        return forum.uuid === uuid;\n      }));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n\n  function styleBody(body) {\n    for (var i = 0; i < body.length; i++) {}\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-2034885642\",\n        children: forum === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2034885642\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2034885642\" + \" \" + \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"jsx-2034885642\",\n            children: (_forum$ = forum[0]) === null || _forum$ === void 0 ? void 0 : _forum$.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"jsx-2034885642\",\n            children: [\"by \", (_forum$2 = forum[0]) === null || _forum$2 === void 0 ? void 0 : _forum$2.user]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2034885642\",\n            children: (_forum$3 = forum[0]) === null || _forum$3 === void 0 ? void 0 : _forum$3.body\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n            className: \"jsx-2034885642\",\n            children: [\"Publication Date: \", (_forum$4 = forum[0]) === null || _forum$4 === void 0 ? void 0 : _forum$4.date]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2034885642\",\n      children: \".container.jsx-2034885642{width:60%;margin:0 auto;}h1.jsx-2034885642,h5.jsx-2034885642,h6.jsx-2034885642{text-align:center;margin-top:30px;}h5.jsx-2034885642{margin-top:5px;}h6.jsx-2034885642{margin-top:30px;}p.jsx-2034885642{margin-top:20px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvZm9ydW1zL1t1dWlkXS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3FCLEFBT1EsQUFLSCxBQUlDLEFBSUEsVUFuQkYsS0FZaEIsQ0FJQSxBQUlBLEVBYmtCLE1BTmxCLFVBT0EiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9mb3J1bXMvW3V1aWRdL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1dWlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtmb3J1bSwgc2V0Rm9ydW1dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2ZvcnVtc2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEZvcnVtKGRhdGEuZmlsdGVyKChmb3J1bSkgPT4gZm9ydW0udXVpZCA9PT0gdXVpZCkpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gc3R5bGVCb2R5KGJvZHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHt9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIHtmb3J1bSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMT57Zm9ydW1bMF0/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoNT5ieSB7Zm9ydW1bMF0/LnVzZXJ9PC9oNT5cbiAgICAgICAgICAgICAgPHA+e2ZvcnVtWzBdPy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgPGg2PlB1YmxpY2F0aW9uIERhdGU6IHtmb3J1bVswXT8uZGF0ZX08L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/forums/[uuid]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"QMPri8lVXUnObz84+FTikQPCIRo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ydW1zL1t1dWlkXS9pbmRleC5qcz9kYmYxIl0sIm5hbWVzIjpbIlBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1dWlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImZvcnVtIiwic2V0Rm9ydW0iLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3R5bGVCb2R5IiwiYm9keSIsImkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsInVzZXIiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUIsTUFFVEMsSUFGUyxHQUVBRixNQUFNLENBQUNHLEtBRlAsQ0FFVEQsSUFGUzs7QUFBQSxrQkFHU0Usc0RBQVEsRUFIakI7QUFBQSxNQUdWQyxLQUhVO0FBQUEsTUFHSEMsUUFIRzs7QUFLakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLFdBQUlDLHVCQUFKLGFBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVUCxRQUFRLENBQUNPLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNULEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNILElBQU4sS0FBZUEsSUFBMUI7QUFBQSxPQUFaLENBQUQsQ0FBbEI7QUFBQSxLQUZSLFdBR1MsVUFBQ2EsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQUhUO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxXQUFTRyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0MsQ0FBRTtBQUN6Qzs7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQSxrQkFDR2YsS0FBSyxLQUFLaUIsU0FBVixnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUdDO0FBQUEsOENBQWUsV0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQSxpQ0FBS2pCLEtBQUssQ0FBQyxDQUFELENBQVYsNENBQUssUUFBVWtCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQSwwQ0FBUWxCLEtBQUssQ0FBQyxDQUFELENBQWIsNkNBQVEsU0FBVW1CLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQSxrQ0FBSW5CLEtBQUssQ0FBQyxDQUFELENBQVQsNkNBQUksU0FBVWM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQTtBQUFBLHlEQUF1QmQsS0FBSyxDQUFDLENBQUQsQ0FBNUIsNkNBQXVCLFNBQVVvQixJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQTVERDs7R0FBTTFCLEk7VUFDV0UscUQ7OztLQURYRixJO0FBOERTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZvcnVtcy9bdXVpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHV1aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2ZvcnVtLCBzZXRGb3J1bV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vZm9ydW1zYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0Rm9ydW0oZGF0YS5maWx0ZXIoKGZvcnVtKSA9PiBmb3J1bS51dWlkID09PSB1dWlkKSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzdHlsZUJvZHkoYm9keSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge31cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge2ZvcnVtID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgxPntmb3J1bVswXT8udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGg1PmJ5IHtmb3J1bVswXT8udXNlcn08L2g1PlxuICAgICAgICAgICAgICA8cD57Zm9ydW1bMF0/LmJvZHl9PC9wPlxuICAgICAgICAgICAgICA8aDY+UHVibGljYXRpb24gRGF0ZToge2ZvcnVtWzBdPy5kYXRlfTwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forums/[uuid]/index.js\n");

/***/ })

})