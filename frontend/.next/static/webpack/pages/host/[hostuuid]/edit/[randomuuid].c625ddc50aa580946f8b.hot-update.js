webpackHotUpdate_N_E("pages/host/[hostuuid]/edit/[randomuuid]",{

/***/ "./pages/host/[hostuuid]/edit/[randomuuid]/index.js":
/*!**********************************************************!*\
  !*** ./pages/host/[hostuuid]/edit/[randomuuid]/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/Dropdown */ \"./components/Dropdown.js\");\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../countries */ \"./countries.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/[hostuuid]/edit/[randomuuid]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar EditHosting = function EditHosting() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var hostuuid = router.query.hostuuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setState(data.filter(function (hosting) {\n        return hosting.uuid === hostuuid;\n      }));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n  console.log(state);\n\n  function submit(e) {\n    e.preventDefault();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submit,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"location\",\n            children: \"Location of your cleanup (Example: Stanley Beach, Hong Kong)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            id: \"location\",\n            name: \"location\",\n            value: state === null || state === void 0 ? void 0 : state.location\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"country\",\n            children: \"Choose the country of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            array: _countries__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            text: state === null || state === void 0 ? void 0 : state.country\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"description\",\n            children: \"Give a description of this cleanup (provide information, what to bring etc.)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"description\",\n            id: \"description\",\n            cols: \"50\",\n            rows: \"10\",\n            minLength: \"150\",\n            value: state === null || state === void 0 ? void 0 : state.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"date\",\n            children: \"Date and Start Time of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"date-time\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"date\",\n              id: \"date\",\n              name: \"date\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"time\",\n              id: \"time\",\n              name: \"time\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"duration\",\n            children: \"Duration of this cleanup (in hrs)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"number\",\n            step: \"0.1\",\n            id: \"duration\",\n            name: \"duration\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"remarks\",\n            children: \"Any remarks?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n            name: \"remarks\",\n            id: \"remarks\",\n            cols: \"50\",\n            rows: \"7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            children: \"Host\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditHosting, \"VXPEcb4kU8tnleOhUGagYlvueH4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = EditHosting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditHosting);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditHosting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zdC9baG9zdHV1aWRdL2VkaXQvW3JhbmRvbXV1aWRdL2luZGV4LmpzPzZmMDIiXSwibmFtZXMiOlsiRWRpdEhvc3RpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJob3N0dXVpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyIiwiaG9zdGluZyIsInV1aWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJjb3VudHJpZXMiLCJjb3VudHJ5IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR3QixNQUVoQkMsUUFGZ0IsR0FFSEYsTUFBTSxDQUFDRyxLQUZKLENBRWhCRCxRQUZnQjs7QUFBQSxrQkFHRUUsc0RBQVEsRUFIVjtBQUFBLE1BR2pCQyxLQUhpQjtBQUFBLE1BR1ZDLFFBSFU7O0FBS3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxXQUFJQyx1QkFBSixlQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsYUFDSlAsUUFBUSxDQUFDTyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCZCxRQUE5QjtBQUFBLE9BQVosQ0FBRCxDQURKO0FBQUEsS0FGUixXQUtTLFVBQUNlLEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsS0FMVDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7O0FBRUEsV0FBU2UsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDakJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBRUYsTUFBaEI7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGNBQUUsRUFBQyxVQUhMO0FBSUUsZ0JBQUksRUFBQyxVQUpQO0FBS0UsaUJBQUssRUFBRWYsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVrQjtBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBV0U7QUFBTyxtQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFZRSxxRUFBQyw0REFBRDtBQUFVLGlCQUFLLEVBQUVDLGtEQUFqQjtBQUE0QixnQkFBSSxFQUFFbkIsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVvQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBYUU7QUFBTyxtQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFpQkU7QUFDRSxvQkFBUSxNQURWO0FBRUUsZ0JBQUksRUFBQyxhQUZQO0FBR0UsY0FBRSxFQUFDLGFBSEw7QUFJRSxnQkFBSSxFQUFDLElBSlA7QUFLRSxnQkFBSSxFQUFDLElBTFA7QUFNRSxxQkFBUyxFQUFDLEtBTlo7QUFPRSxpQkFBSyxFQUFFcEIsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVxQjtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQTBCRTtBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQkYsZUEyQkU7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDRTtBQUFPLHNCQUFRLE1BQWY7QUFBZ0Isa0JBQUksRUFBQyxNQUFyQjtBQUE0QixnQkFBRSxFQUFDLE1BQS9CO0FBQXNDLGtCQUFJLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sc0JBQVEsTUFBZjtBQUFnQixrQkFBSSxFQUFDLE1BQXJCO0FBQTRCLGdCQUFFLEVBQUMsTUFBL0I7QUFBc0Msa0JBQUksRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkYsZUErQkU7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JGLGVBZ0NFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsUUFGUDtBQUdFLGdCQUFJLEVBQUMsS0FIUDtBQUlFLGNBQUUsRUFBQyxVQUpMO0FBS0UsZ0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGLGVBdUNFO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRixlQXdDRTtBQUFVLGdCQUFJLEVBQUMsU0FBZjtBQUF5QixjQUFFLEVBQUMsU0FBNUI7QUFBc0MsZ0JBQUksRUFBQyxJQUEzQztBQUFnRCxnQkFBSSxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENGLGVBeUNFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQXZFRDs7R0FBTTNCLFc7VUFDV0UscUQ7OztLQURYRixXO0FBeUVTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvc3QvW2hvc3R1dWlkXS9lZGl0L1tyYW5kb211dWlkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY291bnRyaWVzXCI7XG5cbmNvbnN0IEVkaXRIb3N0aW5nID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBob3N0dXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldFN0YXRlKGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnV1aWQgPT09IGhvc3R1dWlkKSlcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG5cbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5FZGl0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgTG9jYXRpb24gb2YgeW91ciBjbGVhbnVwIChFeGFtcGxlOiBTdGFubGV5IEJlYWNoLCBIb25nIEtvbmcpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZT8ubG9jYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q2hvb3NlIHRoZSBjb3VudHJ5IG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8RHJvcGRvd24gYXJyYXk9e2NvdW50cmllc30gdGV4dD17c3RhdGU/LmNvdW50cnl9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIEdpdmUgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIGNsZWFudXAgKHByb3ZpZGUgaW5mb3JtYXRpb24sIHdoYXQgdG9cbiAgICAgICAgICAgICAgYnJpbmcgZXRjLilcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbHM9XCI1MFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjE1MFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZT8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZSBhbmQgU3RhcnQgVGltZSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiBuYW1lPVwidGltZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbiBvZiB0aGlzIGNsZWFudXAgKGluIGhycyk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1hcmtzXCI+QW55IHJlbWFya3M/PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwicmVtYXJrc1wiIGlkPVwicmVtYXJrc1wiIGNvbHM9XCI1MFwiIHJvd3M9XCI3XCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkhvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0SG9zdGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/host/[hostuuid]/edit/[randomuuid]/index.js\n");

/***/ })

})