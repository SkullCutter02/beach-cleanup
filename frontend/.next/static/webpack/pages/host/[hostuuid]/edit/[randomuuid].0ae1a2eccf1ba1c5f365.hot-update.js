webpackHotUpdate_N_E("pages/host/[hostuuid]/edit/[randomuuid]",{

/***/ "./pages/host/[hostuuid]/edit/[randomuuid]/index.js":
/*!**********************************************************!*\
  !*** ./pages/host/[hostuuid]/edit/[randomuuid]/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/Dropdown */ \"./components/Dropdown.js\");\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../countries */ \"./countries.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/[hostuuid]/edit/[randomuuid]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EditHosting = function EditHosting() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var hostuuid = router.query.hostuuid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setState(data.filter(function (hosting) {\n        return hosting.uuid === hostuuid;\n      }));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n  console.log(state);\n\n  var submit = function submit(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1569857485\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-1569857485\",\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submit,\n          className: \"jsx-1569857485\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"location\",\n            className: \"jsx-1569857485\",\n            children: \"Location of your cleanup (Example: Stanley Beach, Hong Kong)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            id: \"location\",\n            name: \"location\",\n            value: state && state[0].location,\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"country\",\n            className: \"jsx-1569857485\",\n            children: \"Choose the country of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            array: _countries__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            text: state && state[0].country\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"description\",\n            className: \"jsx-1569857485\",\n            children: \"Give a description of this cleanup (provide information, what to bring etc.)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"description\",\n            id: \"description\",\n            cols: \"50\",\n            rows: \"10\",\n            minLength: \"150\",\n            value: state && state[0].description,\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"date\",\n            className: \"jsx-1569857485\",\n            children: \"Date and Start Time of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1569857485\" + \" \" + \"date-time\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"date\",\n              id: \"date\",\n              name: \"date\",\n              value: state && state[0].date,\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"time\",\n              id: \"time\",\n              name: \"time\",\n              value: state && state[0].time,\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"duration\",\n            className: \"jsx-1569857485\",\n            children: \"Duration of this cleanup (in hrs)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"number\",\n            step: \"0.1\",\n            id: \"duration\",\n            name: \"duration\",\n            value: state && state[0].duration,\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"remarks\",\n            className: \"jsx-1569857485\",\n            children: \"Any remarks?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n            name: \"remarks\",\n            id: \"remarks\",\n            cols: \"50\",\n            rows: \"7\",\n            value: state && state[0].remarks,\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1569857485\",\n            children: \"Host\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1569857485\",\n      children: \"h1.jsx-1569857485{text-align:center;margin-top:15px;}form.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}label.jsx-1569857485{display:block;margin-top:10px;}input.jsx-1569857485{display:block;height:25px;width:160px;margin-top:10px;}textarea.jsx-1569857485{margin-top:10px;}.date-time.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#date.jsx-1569857485,#time.jsx-1569857485{width:120px;margin:10px 20px;}button.jsx-1569857485{margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9baG9zdHV1aWRdL2VkaXQvW3JhbmRvbXV1aWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHa0IsQUFHNkIsQUFLTCxBQU1DLEFBS0EsQUFPRSxBQUlILEFBS0QsQUFLRSxZQUpHLEVBckJELEFBS0osQUFxQmQsRUFkQSxFQXZCa0IsUUFpQkosR0FnQmQsQ0FyQkEsSUFYQSxJQWlCa0IsZ0JBQ2xCLG9CQWR3QixBQXNCeEIsOEVBckJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9ob3N0L1tob3N0dXVpZF0vZWRpdC9bcmFuZG9tdXVpZF0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvdW50cmllc1wiO1xuXG5jb25zdCBFZGl0SG9zdGluZyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaG9zdHV1aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PlxuICAgICAgICBzZXRTdGF0ZShkYXRhLmZpbHRlcigoaG9zdGluZykgPT4gaG9zdGluZy51dWlkID09PSBob3N0dXVpZCkpXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coc3RhdGUpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxPkVkaXQ8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB5b3VyIGNsZWFudXAgKEV4YW1wbGU6IFN0YW5sZXkgQmVhY2gsIEhvbmcgS29uZylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlICYmIHN0YXRlWzBdLmxvY2F0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNob29zZSB0aGUgY291bnRyeSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duIGFycmF5PXtjb3VudHJpZXN9IHRleHQ9e3N0YXRlICYmIHN0YXRlWzBdLmNvdW50cnl9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIEdpdmUgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIGNsZWFudXAgKHByb3ZpZGUgaW5mb3JtYXRpb24sIHdoYXQgdG9cbiAgICAgICAgICAgICAgYnJpbmcgZXRjLilcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbHM9XCI1MFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjE1MFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZSAmJiBzdGF0ZVswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5EYXRlIGFuZCBTdGFydCBUaW1lIG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUgJiYgc3RhdGVbMF0uZGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGltZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlICYmIHN0YXRlWzBdLnRpbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbiBvZiB0aGlzIGNsZWFudXAgKGluIGhycyk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZSAmJiBzdGF0ZVswXS5kdXJhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbWFya3NcIj5BbnkgcmVtYXJrcz88L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyZW1hcmtzXCJcbiAgICAgICAgICAgICAgaWQ9XCJyZW1hcmtzXCJcbiAgICAgICAgICAgICAgY29scz1cIjUwXCJcbiAgICAgICAgICAgICAgcm93cz1cIjdcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUgJiYgc3RhdGVbMF0ucmVtYXJrc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Ib3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgICNkYXRlLFxuICAgICAgICAjdGltZSB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0SG9zdGluZztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/[hostuuid]/edit/[randomuuid]/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditHosting, \"VXPEcb4kU8tnleOhUGagYlvueH4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = EditHosting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditHosting);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditHosting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zdC9baG9zdHV1aWRdL2VkaXQvW3JhbmRvbXV1aWRdL2luZGV4LmpzPzZmMDIiXSwibmFtZXMiOlsiRWRpdEhvc3RpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJob3N0dXVpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmlsdGVyIiwiaG9zdGluZyIsInV1aWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJjb3VudHJpZXMiLCJjb3VudHJ5IiwiZGVzY3JpcHRpb24iLCJkYXRlIiwidGltZSIsImR1cmF0aW9uIiwicmVtYXJrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHdCLE1BRWhCQyxRQUZnQixHQUVIRixNQUFNLENBQUNHLEtBRkosQ0FFaEJELFFBRmdCOztBQUFBLGtCQUdFRSxzREFBUSxFQUhWO0FBQUEsTUFHakJDLEtBSGlCO0FBQUEsTUFHVkMsUUFIVTs7QUFLeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLFdBQUlDLHVCQUFKLGVBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUNKUCxRQUFRLENBQUNPLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLElBQVIsS0FBaUJkLFFBQTlCO0FB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QUxQO0FBTUUsaUJBQUssRUFBRXZCLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTd0IsUUFOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUNGLGVBb0RFO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcERGLGVBcURFO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUsY0FBRSxFQUFDLFNBRkw7QUFHRSxnQkFBSSxFQUFDLElBSFA7QUFJRSxnQkFBSSxFQUFDLEdBSlA7QUFLRSxpQkFBSyxFQUFFeEIsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVN5QixPQUwzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyREYsZUE0REU7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtIRCxDQXJJRDs7R0FBTS9CLFc7VUFDV0UscUQ7OztLQURYRixXO0FBdUlTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvc3QvW2hvc3R1dWlkXS9lZGl0L1tyYW5kb211dWlkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY291bnRyaWVzXCI7XG5cbmNvbnN0IEVkaXRIb3N0aW5nID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBob3N0dXVpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldFN0YXRlKGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnV1aWQgPT09IGhvc3R1dWlkKSlcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aDE+RWRpdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgIExvY2F0aW9uIG9mIHlvdXIgY2xlYW51cCAoRXhhbXBsZTogU3RhbmxleSBCZWFjaCwgSG9uZyBLb25nKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUgJiYgc3RhdGVbMF0ubG9jYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q2hvb3NlIHRoZSBjb3VudHJ5IG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8RHJvcGRvd24gYXJyYXk9e2NvdW50cmllc30gdGV4dD17c3RhdGUgJiYgc3RhdGVbMF0uY291bnRyeX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgR2l2ZSBhIGRlc2NyaXB0aW9uIG9mIHRoaXMgY2xlYW51cCAocHJvdmlkZSBpbmZvcm1hdGlvbiwgd2hhdCB0b1xuICAgICAgICAgICAgICBicmluZyBldGMuKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgY29scz1cIjUwXCJcbiAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiMTUwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlICYmIHN0YXRlWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGUgYW5kIFN0YXJ0IFRpbWUgb2YgdGhpcyBjbGVhbnVwPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZSAmJiBzdGF0ZVswXS5kYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInRpbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUgJiYgc3RhdGVbMF0udGltZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiPkR1cmF0aW9uIG9mIHRoaXMgY2xlYW51cCAoaW4gaHJzKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cImR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlICYmIHN0YXRlWzBdLmR1cmF0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtYXJrc1wiPkFueSByZW1hcmtzPzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJlbWFya3NcIlxuICAgICAgICAgICAgICBpZD1cInJlbWFya3NcIlxuICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICByb3dzPVwiN1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZSAmJiBzdGF0ZVswXS5yZW1hcmtzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkhvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZS10aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2RhdGUsXG4gICAgICAgICN0aW1lIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRIb3N0aW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/host/[hostuuid]/edit/[randomuuid]/index.js\n");

/***/ })

})