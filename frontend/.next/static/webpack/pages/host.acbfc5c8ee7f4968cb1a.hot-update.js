webpackHotUpdate_N_E("pages/host",{

/***/ "./pages/host/index.js":
/*!*****************************!*\
  !*** ./pages/host/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../countries */ \"./countries.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Dropdown */ \"./components/Dropdown.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/UserContext */ \"./context/UserContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Host = function Host() {\n  _s();\n\n  var initialText = \"Select Country\";\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]).data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (localStorage.getItem(\"identifier\") === null || localStorage.getItem(\"password\") === null) {\n      router.push(\"/signup\");\n    }\n  }, []);\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var location, country, description, date, time, duration, remarks, uuid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              location = document.getElementById(\"location\").value;\n              country = document.getElementById(\"btn-text\").innerText;\n              description = document.getElementById(\"description\").value;\n              date = document.getElementById(\"date\").value;\n              time = document.getElementById(\"time\").value;\n              duration = document.getElementById(\"duration\").value;\n              remarks = document.getElementById(\"remarks\").value;\n              uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])();\n\n              if (!(country !== initialText)) {\n                _context.next = 14;\n                break;\n              }\n\n              _context.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: \"POST\",\n                url: \"\".concat(\"http://localhost:1337\", \"/hostings\"),\n                data: {\n                  location: location,\n                  country: country,\n                  description: description,\n                  date: date,\n                  time: time,\n                  duration: duration,\n                  remarks: remarks,\n                  uuid: uuid,\n                  user: data.user.username\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(data.jwt)\n                }\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 12:\n              _context.next = 14;\n              return router.push(\"/results/\".concat(uuid));\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"jsx-1569857485\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-1569857485\",\n          children: \"Host your own Beach Cleanup\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submit,\n          className: \"jsx-1569857485\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"location\",\n            className: \"jsx-1569857485\",\n            children: \"Location of your cleanup (Example: Stanley Beach, Hong Kong)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"text\",\n            id: \"location\",\n            name: \"location\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"country\",\n            className: \"jsx-1569857485\",\n            children: \"Choose the country of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            array: _countries__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            text: initialText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"description\",\n            className: \"jsx-1569857485\",\n            children: \"Give a description of this cleanup (provide information, what to bring etc.)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            required: true,\n            name: \"description\",\n            id: \"description\",\n            cols: \"50\",\n            rows: \"10\",\n            minLength: \"150\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"date\",\n            className: \"jsx-1569857485\",\n            children: \"Date and Start Time of this cleanup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-1569857485\" + \" \" + \"date-time\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"date\",\n              id: \"date\",\n              name: \"date\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n              required: true,\n              type: \"time\",\n              id: \"time\",\n              name: \"time\",\n              className: \"jsx-1569857485\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"duration\",\n            className: \"jsx-1569857485\",\n            children: \"Duration of this cleanup (in hrs)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"number\",\n            step: \"0.1\",\n            id: \"duration\",\n            name: \"duration\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"remarks\",\n            className: \"jsx-1569857485\",\n            children: \"Any remarks?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            name: \"remarks\",\n            id: \"remarks\",\n            cols: \"50\",\n            rows: \"7\",\n            className: \"jsx-1569857485\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"jsx-1569857485\",\n            children: \"Host\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1569857485\",\n      children: \"h1.jsx-1569857485{text-align:center;margin-top:15px;}form.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}label.jsx-1569857485{display:block;margin-top:10px;}input.jsx-1569857485{display:block;height:25px;width:160px;margin-top:10px;}textarea.jsx-1569857485{margin-top:10px;}.date-time.jsx-1569857485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#date.jsx-1569857485,#time.jsx-1569857485{width:120px;margin:10px 20px;}button.jsx-1569857485{margin:20px 0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R2tCLEFBRzZCLEFBS0wsQUFNQyxBQUtBLEFBT0UsQUFJSCxBQUtELEFBS0UsWUFKRyxFQXJCRCxBQUtKLEFBcUJkLEVBZEEsRUF2QmtCLFFBaUJKLEdBZ0JkLENBckJBLElBWEEsSUFpQmtCLGdCQUNsQixvQkFkd0IsQUFzQnhCLDhFQXJCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvaG9zdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uLy4uL2NvdW50cmllc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IEhvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUZXh0ID0gXCJTZWxlY3QgQ291bnRyeVwiO1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCkuZGF0YTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIikgPT09IG51bGwgfHxcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIikgPT09IG51bGxcbiAgICApIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIikudmFsdWU7XG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10ZXh0XCIpLmlubmVyVGV4dDtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuICAgIGxldCBkdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb25cIikudmFsdWU7XG4gICAgbGV0IHJlbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3NcIikudmFsdWU7XG4gICAgbGV0IHV1aWQgPSB1dWlkdjQoKTtcblxuICAgIGlmIChjb3VudHJ5ICE9PSBpbml0aWFsVGV4dCkge1xuICAgICAgYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHJlbWFya3M6IHJlbWFya3MsXG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICB1c2VyOiBkYXRhLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7ZGF0YS5qd3R9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHt1dWlkfWApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5Ib3N0IHlvdXIgb3duIEJlYWNoIENsZWFudXA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB5b3VyIGNsZWFudXAgKEV4YW1wbGU6IFN0YW5sZXkgQmVhY2gsIEhvbmcgS29uZylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNob29zZSB0aGUgY291bnRyeSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duIGFycmF5PXtjb3VudHJpZXN9IHRleHQ9e2luaXRpYWxUZXh0fSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBHaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhpcyBjbGVhbnVwIChwcm92aWRlIGluZm9ybWF0aW9uLCB3aGF0IHRvXG4gICAgICAgICAgICAgIGJyaW5nIGV0Yy4pXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBtaW5MZW5ndGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGUgYW5kIFN0YXJ0IFRpbWUgb2YgdGhpcyBjbGVhbnVwPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0aW1lXCIgaWQ9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1cmF0aW9uXCI+RHVyYXRpb24gb2YgdGhpcyBjbGVhbnVwIChpbiBocnMpPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgIGlkPVwiZHVyYXRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwiZHVyYXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtYXJrc1wiPkFueSByZW1hcmtzPzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJlbWFya3NcIiBpZD1cInJlbWFya3NcIiBjb2xzPVwiNTBcIiByb3dzPVwiN1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Ib3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgICNkYXRlLFxuICAgICAgICAjdGltZSB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0O1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/host/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Host, \"uGCljsQsxhgUC7Wz/AGJIpdsgdU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Host;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Host);\n\nvar _c;\n\n$RefreshReg$(_c, \"Host\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zdC9pbmRleC5qcz85YjU2Il0sIm5hbWVzIjpbIkhvc3QiLCJpbml0aWFsVGV4dCIsImRhdGEiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY291bnRyeSIsImlubmVyVGV4dCIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInRpbWUiLCJkdXJhdGlvbiIsInJlbWFya3MiLCJ1dWlkIiwidXVpZHY0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwidXNlciIsInVzZXJuYW1lIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY291bnRyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFdBQVcsR0FBRyxnQkFBcEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQVYsQ0FBd0JGLElBQXJDO0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFBdkMsSUFDQUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLElBRnZDLEVBR0U7QUFDQUosWUFBTSxDQUFDSyxJQUFQLENBQVksU0FBWjtBQUNEO0FBQ0YsR0FQUSxFQU9O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QUksRUFBQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQ0YsZUFrQ0U7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQTFJRDs7R0FBTUQsSTtVQUdXTSxxRDs7O0tBSFhOLEk7QUE0SVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9zdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4uLy4uL2NvdW50cmllc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IEhvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUZXh0ID0gXCJTZWxlY3QgQ291bnRyeVwiO1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCkuZGF0YTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIikgPT09IG51bGwgfHxcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIikgPT09IG51bGxcbiAgICApIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIikudmFsdWU7XG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10ZXh0XCIpLmlubmVyVGV4dDtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuICAgIGxldCBkdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb25cIikudmFsdWU7XG4gICAgbGV0IHJlbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWFya3NcIikudmFsdWU7XG4gICAgbGV0IHV1aWQgPSB1dWlkdjQoKTtcblxuICAgIGlmIChjb3VudHJ5ICE9PSBpbml0aWFsVGV4dCkge1xuICAgICAgYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHJlbWFya3M6IHJlbWFya3MsXG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICB1c2VyOiBkYXRhLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7ZGF0YS5qd3R9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgICBhd2FpdCByb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHt1dWlkfWApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5Ib3N0IHlvdXIgb3duIEJlYWNoIENsZWFudXA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB5b3VyIGNsZWFudXAgKEV4YW1wbGU6IFN0YW5sZXkgQmVhY2gsIEhvbmcgS29uZylcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNob29zZSB0aGUgY291bnRyeSBvZiB0aGlzIGNsZWFudXA8L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duIGFycmF5PXtjb3VudHJpZXN9IHRleHQ9e2luaXRpYWxUZXh0fSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBHaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhpcyBjbGVhbnVwIChwcm92aWRlIGluZm9ybWF0aW9uLCB3aGF0IHRvXG4gICAgICAgICAgICAgIGJyaW5nIGV0Yy4pXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBtaW5MZW5ndGg9XCIxNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGUgYW5kIFN0YXJ0IFRpbWUgb2YgdGhpcyBjbGVhbnVwPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0aW1lXCIgaWQ9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1cmF0aW9uXCI+RHVyYXRpb24gb2YgdGhpcyBjbGVhbnVwIChpbiBocnMpPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgIGlkPVwiZHVyYXRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwiZHVyYXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtYXJrc1wiPkFueSByZW1hcmtzPzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJlbWFya3NcIiBpZD1cInJlbWFya3NcIiBjb2xzPVwiNTBcIiByb3dzPVwiN1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Ib3N0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgICNkYXRlLFxuICAgICAgICAjdGltZSB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/host/index.js\n");

/***/ })

})