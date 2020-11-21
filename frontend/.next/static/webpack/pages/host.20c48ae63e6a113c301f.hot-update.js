webpackHotUpdate_N_E("pages/host",{

/***/ "./pages/host/index.js":
/*!*****************************!*\
  !*** ./pages/host/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../countries */ \"./countries.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Dropdown */ \"./components/Dropdown.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/UserContext */ \"./context/UserContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Host = function Host() {\n  _s();\n\n  var initialText = \"Select Country\";\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_10__[\"UserContext\"]);\n  console.log(data);\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var location, country, description, date, time, duration, remarks, uuid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              location = document.getElementById(\"location\").value;\n              country = document.getElementById(\"btn-text\").innerText;\n              description = document.getElementById(\"description\").value;\n              date = document.getElementById(\"date\").value;\n              time = document.getElementById(\"time\").value;\n              duration = document.getElementById(\"duration\").value;\n              remarks = document.getElementById(\"remarks\").value;\n              uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])();\n\n              if (!(country !== initialText)) {\n                _context.next = 12;\n                break;\n              }\n\n              _context.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"\".concat(\"http://localhost:1337\", \"/hostings\"), {\n                data: {\n                  location: location,\n                  country: country,\n                  description: description,\n                  date: date,\n                  time: time,\n                  duration: duration,\n                  remarks: remarks,\n                  uuid: uuid,\n                  user: data.user.username\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(data.jwt)\n                }\n              }).then(function (res) {\n                return console.log(\"Posted!\");\n              });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1569857485\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-1569857485\",\n          children: \"Host your own Beach Cleanup\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submit,\n          className: \"jsx-1569857485\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"location\",\n            className: \"jsx-1569857485\",\n            children: \"Location of your cleanup (Example: Stanley Beach, Hong Kong)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            id: \"location\",\n            name: \"location\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"country\",\n            className: \"jsx-1569857485\",\n            children: \"Choose the country of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            array: _countries__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            text: initialText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"description\",\n            className: \"jsx-1569857485\",\n            children: \"Give a description of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"description\",\n            id: \"description\",\n            cols: \"50\",\n            rows: \"10\",\n            minLength: \"50\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"date\",\n            className: \"jsx-1569857485\",\n            children: \"Date and Start Time of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1569857485\" + \" \" + \"date-time\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"date\",\n              id: \"date\",\n              name: \"date\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"time\",\n              id: \"time\",\n              name: \"time\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"duration\",\n            className: \"jsx-1569857485\",\n            children: \"Duration of this cleanup (in hrs)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"number\",\n            step: \"2\",\n            id: \"duration\",\n            name: \"duration\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"remarks\",\n            className: \"jsx-1569857485\",\n            children: \"Any remarks?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            name: \"remarks\",\n            id: \"remarks\",\n            cols: \"50\",\n            rows: \"7\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1569857485\",\n            children: \"Host\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1569857485\",\n      children: \"h1.jsx-1569857485{text-align:center;margin-top:15px;}form.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}label.jsx-1569857485{display:block;margin-top:10px;}input.jsx-1569857485{display:block;height:25px;width:160px;margin-top:10px;}textarea.jsx-1569857485{margin-top:10px;}.date-time.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#date.jsx-1569857485,#time.jsx-1569857485{width:120px;margin:10px 20px;}button.jsx-1569857485{margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRmtCLEFBRzZCLEFBS0wsQUFNQyxBQUtBLEFBT0UsQUFJSCxBQUtELEFBS0UsWUFKRyxFQXJCRCxBQUtKLEFBcUJkLEVBZEEsRUF2QmtCLFFBaUJKLEdBZ0JkLENBckJBLElBWEEsSUFpQmtCLGdCQUNsQixvQkFkd0IsQUFzQnhCLDhFQXJCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tIFwiLi4vLi4vY291bnRyaWVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuY29uc3QgSG9zdCA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbFRleHQgPSBcIlNlbGVjdCBDb3VudHJ5XCI7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRleHRcIikuaW5uZXJUZXh0O1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgbGV0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikudmFsdWU7XG4gICAgbGV0IGR1cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdXJhdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgcmVtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtYXJrc1wiKS52YWx1ZTtcbiAgICBsZXQgdXVpZCA9IHV1aWR2NCgpO1xuXG4gICAgaWYgKGNvdW50cnkgIT09IGluaXRpYWxUZXh0KSB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2AsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICByZW1hcmtzOiByZW1hcmtzLFxuICAgICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICAgIHVzZXI6IGRhdGEudXNlci51c2VybmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtkYXRhLmp3dH1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKFwiUG9zdGVkIVwiKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxPkhvc3QgeW91ciBvd24gQmVhY2ggQ2xlYW51cDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgIExvY2F0aW9uIG9mIHlvdXIgY2xlYW51cCAoRXhhbXBsZTogU3RhbmxleSBCZWFjaCwgSG9uZyBLb25nKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBuYW1lPVwibG9jYXRpb25cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q2hvb3NlIHRoZSBjb3VudHJ5IG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8RHJvcGRvd24gYXJyYXk9e2NvdW50cmllc30gdGV4dD17aW5pdGlhbFRleHR9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIEdpdmUgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIGNsZWFudXBcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbHM9XCI1MFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5EYXRlIGFuZCBTdGFydCBUaW1lIG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIG5hbWU9XCJ0aW1lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiPkR1cmF0aW9uIG9mIHRoaXMgY2xlYW51cCAoaW4gaHJzKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0ZXA9XCIyXCJcbiAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1hcmtzXCI+QW55IHJlbWFya3M/PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwicmVtYXJrc1wiIGlkPVwicmVtYXJrc1wiIGNvbHM9XCI1MFwiIHJvd3M9XCI3XCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkhvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZS10aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2RhdGUsXG4gICAgICAgICN0aW1lIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3Q7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Host, \"QDbvtl2XjZhCafbmMBOV/hNJip4=\");\n\n_c = Host;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Host);\n\nvar _c;\n\n$RefreshReg$(_c, \"Host\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zdC9pbmRleC5qcz85YjU2Il0sIm5hbWVzIjpbIkhvc3QiLCJpbml0aWFsVGV4dCIsImRhdGEiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJjb3VudHJ5IiwiaW5uZXJUZXh0IiwiZGVzY3JpcHRpb24iLCJkYXRlIiwidGltZSIsImR1cmF0aW9uIiwicmVtYXJrcyIsInV1aWQiLCJ1dWlkdjQiLCJheGlvcyIsInBvc3QiLCJwcm9jZXNzIiwidXNlciIsInVzZXJuYW1lIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJ0aGVuIiwicmVzIiwiY291bnRyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsV0FBVyxHQUFHLGdCQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7O0FBRUEsTUFBTUssTUFBTTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxlQUFDLENBQUNDLGNBQUY7QUFDSUMsc0JBRlMsR0FFRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUZ0QztBQUdUQyxxQkFIUyxHQUdDSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NHLFNBSHJDO0FBSVRDLHlCQUpTLEdBSUtMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0MsS0FK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ImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tIFwiLi4vLi4vY291bnRyaWVzXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcblxuY29uc3QgSG9zdCA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbFRleHQgPSBcIlNlbGVjdCBDb3VudHJ5XCI7XG4gIGNvbnN0IGRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRleHRcIikuaW5uZXJUZXh0O1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgbGV0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikudmFsdWU7XG4gICAgbGV0IGR1cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdXJhdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgcmVtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtYXJrc1wiKS52YWx1ZTtcbiAgICBsZXQgdXVpZCA9IHV1aWR2NCgpO1xuXG4gICAgaWYgKGNvdW50cnkgIT09IGluaXRpYWxUZXh0KSB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2AsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICByZW1hcmtzOiByZW1hcmtzLFxuICAgICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICAgIHVzZXI6IGRhdGEudXNlci51c2VybmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtkYXRhLmp3dH1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKFwiUG9zdGVkIVwiKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxPkhvc3QgeW91ciBvd24gQmVhY2ggQ2xlYW51cDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgIExvY2F0aW9uIG9mIHlvdXIgY2xlYW51cCAoRXhhbXBsZTogU3RhbmxleSBCZWFjaCwgSG9uZyBLb25nKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBuYW1lPVwibG9jYXRpb25cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q2hvb3NlIHRoZSBjb3VudHJ5IG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8RHJvcGRvd24gYXJyYXk9e2NvdW50cmllc30gdGV4dD17aW5pdGlhbFRleHR9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIEdpdmUgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIGNsZWFudXBcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbHM9XCI1MFwiXG4gICAgICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5EYXRlIGFuZCBTdGFydCBUaW1lIG9mIHRoaXMgY2xlYW51cDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIG5hbWU9XCJ0aW1lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiPkR1cmF0aW9uIG9mIHRoaXMgY2xlYW51cCAoaW4gaHJzKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0ZXA9XCIyXCJcbiAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1hcmtzXCI+QW55IHJlbWFya3M/PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwicmVtYXJrc1wiIGlkPVwicmVtYXJrc1wiIGNvbHM9XCI1MFwiIHJvd3M9XCI3XCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkhvc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZS10aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2RhdGUsXG4gICAgICAgICN0aW1lIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/host/index.js\n");

/***/ })

})