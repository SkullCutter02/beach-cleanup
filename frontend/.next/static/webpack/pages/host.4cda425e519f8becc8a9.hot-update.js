webpackHotUpdate_N_E("pages/host",{

/***/ "./pages/host/index.js":
/*!*****************************!*\
  !*** ./pages/host/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../countries */ \"./countries.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Dropdown */ \"./components/Dropdown.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Host = function Host() {\n  var initialText = \"Select Country\";\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var location, country, description, date, time, duration, remarks;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              location = document.getElementById(\"location\").value;\n              country = document.getElementById(\"btn-text\").innerText;\n              description = document.getElementById(\"description\").value;\n              date = document.getElementById(\"date\").value;\n              time = document.getElementById(\"time\").value;\n              duration = document.getElementById(\"duration\").value;\n              remarks = document.getElementById(\"remarks\").value;\n\n              if (country !== initialText) {\n                console.log(location, country, description, date, time, duration, remarks);\n              }\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1569857485\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-1569857485\",\n          children: \"Host your own Beach Cleanup\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submit,\n          className: \"jsx-1569857485\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"location\",\n            className: \"jsx-1569857485\",\n            children: \"Location of your cleanup (Example: Stanley Beach, Hong Kong)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            id: \"location\",\n            name: \"location\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"country\",\n            className: \"jsx-1569857485\",\n            children: \"Choose the country of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            array: _countries__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            text: initialText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"description\",\n            className: \"jsx-1569857485\",\n            children: \"Give a description of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"description\",\n            id: \"description\",\n            cols: \"50\",\n            rows: \"10\",\n            minLength: \"50\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"date\",\n            className: \"jsx-1569857485\",\n            children: \"Date and Start Time of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1569857485\" + \" \" + \"date-time\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"date\",\n              id: \"date\",\n              name: \"date\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"time\",\n              id: \"time\",\n              name: \"time\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"duration\",\n            className: \"jsx-1569857485\",\n            children: \"Duration of this cleanup (in hrs)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"number\",\n            id: \"duration\",\n            name: \"duration\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"remarks\",\n            className: \"jsx-1569857485\",\n            children: \"Any remarks?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            name: \"remarks\",\n            id: \"remarks\",\n            cols: \"50\",\n            rows: \"7\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1569857485\",\n            children: \"Host\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1569857485\",\n      children: \"h1.jsx-1569857485{text-align:center;margin-top:15px;}form.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}label.jsx-1569857485{display:block;margin-top:10px;}input.jsx-1569857485{display:block;height:25px;width:160px;margin-top:10px;}textarea.jsx-1569857485{margin-top:10px;}.date-time.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#date.jsx-1569857485,#time.jsx-1569857485{width:120px;margin:10px 20px;}button.jsx-1569857485{margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBRzZCLEFBS0wsQUFNQyxBQUtBLEFBT0UsQUFJSCxBQUtELEFBS0UsWUFKRyxFQXJCRCxBQUtKLEFBcUJkLEVBZEEsRUF2QmtCLFFBaUJKLEdBZ0JkLENBckJBLElBWEEsSUFpQmtCLGdCQUNsQixvQkFkd0IsQUFzQnhCLDhFQXJCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uLy4uL2NvdW50cmllc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XG5cbmNvbnN0IEhvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUZXh0ID0gXCJTZWxlY3QgQ291bnRyeVwiO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIikudmFsdWU7XG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10ZXh0XCIpLmlubmVyVGV4dDtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuICAgIGxldCBkdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb25cIikudmFsdWU7XG4gICAgbGV0IHJlbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3NcIikudmFsdWU7XG5cbiAgICBpZiAoY291bnRyeSAhPT0gaW5pdGlhbFRleHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICByZW1hcmtzXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5Ib3N0IHlvdXIgb3duIEJlYWNoIENsZWFudXA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB5b3VyIGNsZWFudXAgKEV4YW1wbGU6IFN0YW5sZXkgQmVhY2gsIEhvbmcgS29uZylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNob29zZSB0aGUgY291bnRyeSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duIGFycmF5PXtjb3VudHJpZXN9IHRleHQ9e2luaXRpYWxUZXh0fSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBHaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhpcyBjbGVhbnVwXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBtaW5MZW5ndGg9XCI1MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZSBhbmQgU3RhcnQgVGltZSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiBuYW1lPVwidGltZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbiBvZiB0aGlzIGNsZWFudXAgKGluIGhycyk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cImR1cmF0aW9uXCIgbmFtZT1cImR1cmF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtYXJrc1wiPkFueSByZW1hcmtzPzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJlbWFya3NcIiBpZD1cInJlbWFya3NcIiBjb2xzPVwiNTBcIiByb3dzPVwiN1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Ib3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgICNkYXRlLFxuICAgICAgICAjdGltZSB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Host;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Host);\n\nvar _c;\n\n$RefreshReg$(_c, \"Host\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zdC9pbmRleC5qcz85YjU2Il0sIm5hbWVzIjpbIkhvc3QiLCJpbml0aWFsVGV4dCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY291bnRyeSIsImlubmVyVGV4dCIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInRpbWUiLCJkdXJhdGlvbiIsInJlbWFya3MiLCJjb25zb2xlIiwibG9nIiwiY291bnRyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLFdBQVcsR0FBRyxnQkFBcEI7O0FBRUEsTUFBTUMsTUFBTTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxlQUFDLENBQUNDLGNBQUY7QUFDSUMsc0JBRlMsR0FFRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUZ0QztBQUdUQyxxQkFIUyxHQUdDSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NHLFNBSHJDO0FBSVRDLHlCQUpTLEdBSUtMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0MsS0FKNUM7QUFLVEksa0JBTFMsR0FLRk4sUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUw5QjtBQU1USyxrQkFOUyxHQU1GUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBTjlCO0FBT1RNLHNCQVBTLEdBT0VSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FQdEM7QUFRVE8scUJBUlMsR0FRQ1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxLQVJwQzs7QUFV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QUEsbUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRkQsQ0EzR0Q7O0tBQU1ELEk7QUE2R1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9zdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uLy4uL2NvdW50cmllc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XG5cbmNvbnN0IEhvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUZXh0ID0gXCJTZWxlY3QgQ291bnRyeVwiO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIikudmFsdWU7XG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10ZXh0XCIpLmlubmVyVGV4dDtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuICAgIGxldCBkdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb25cIikudmFsdWU7XG4gICAgbGV0IHJlbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3NcIikudmFsdWU7XG5cbiAgICBpZiAoY291bnRyeSAhPT0gaW5pdGlhbFRleHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICByZW1hcmtzXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5Ib3N0IHlvdXIgb3duIEJlYWNoIENsZWFudXA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB5b3VyIGNsZWFudXAgKEV4YW1wbGU6IFN0YW5sZXkgQmVhY2gsIEhvbmcgS29uZylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNob29zZSB0aGUgY291bnRyeSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duIGFycmF5PXtjb3VudHJpZXN9IHRleHQ9e2luaXRpYWxUZXh0fSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBHaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhpcyBjbGVhbnVwXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBtaW5MZW5ndGg9XCI1MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZSBhbmQgU3RhcnQgVGltZSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiBuYW1lPVwidGltZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbiBvZiB0aGlzIGNsZWFudXAgKGluIGhycyk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cImR1cmF0aW9uXCIgbmFtZT1cImR1cmF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtYXJrc1wiPkFueSByZW1hcmtzPzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJlbWFya3NcIiBpZD1cInJlbWFya3NcIiBjb2xzPVwiNTBcIiByb3dzPVwiN1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Ib3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgICNkYXRlLFxuICAgICAgICAjdGltZSB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/host/index.js\n");

/***/ })

})