webpackHotUpdate_N_E("pages/myhostings",{

/***/ "./pages/myhostings.js":
/*!*****************************!*\
  !*** ./pages/myhostings.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Utils */ \"./Utils.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar MyHostings = function MyHostings() {\n  _s();\n\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userData === null) {\n      router.push(\"/signup\");\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userData !== null) {\n      fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return setState(data.filter(function (hosting) {\n          return hosting.user === userData.user.username;\n        }));\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [userData]);\n\n  var remove = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hosting) {\n      var confirm;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              confirm = window.confirm(\"Are you sure you want to delete your hosting?\");\n\n              if (!confirm) {\n                _context.next = 4;\n                break;\n              }\n\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_9___default()({\n                method: \"DELETE\",\n                url: \"\".concat(\"http://localhost:1337\", \"/hostings\"),\n                data: {\n                  hosting: hosting\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(userData.jwt)\n                }\n              }).then(router.reload())[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function remove(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"script\", {\n        src: \"https://kit.fontawesome.com/a40d908160.js\",\n        crossOrigin: \"anonymous\",\n        className: \"jsx-2810654915\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2810654915\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, _this) : state.map(function (hosting) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2810654915\" + \" \" + \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/results/\".concat(hosting.uuid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-2810654915\" + \" \" + \"location\",\n              children: [\"Location: \", hosting.location]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/host/\".concat(hosting.uuid, \"/edit/\").concat(Object(uuid__WEBPACK_IMPORTED_MODULE_8__[\"v4\"])()),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n              className: \"jsx-2810654915\" + \" \" + \"far fa-edit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n            onClick: function onClick() {\n              return remove(hosting);\n            },\n            className: \"jsx-2810654915\" + \" \" + \"far fa-trash-alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2810654915\" + \" \" + \"date\",\n            children: [\"Date:\", \" \", \"\".concat(hosting.date.slice(8, 10)).concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_12__[\"determineEnd\"])(hosting.date.charAt(9)), \" \").concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_12__[\"determineMonth\"])(hosting.date.slice(5, 7)), \" \").concat(hosting.date.slice(0, 4))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2810654915\",\n      children: \".container.jsx-2810654915{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;height:90px;border:1px solid lightgray;border-radius:30px;margin:40px auto;position:relative;}p.jsx-2810654915{color:grey;margin:0 50px;}.location.jsx-2810654915{font-size:1.4rem;cursor:pointer;}.date.jsx-2810654915{font-size:1.1rem;}i.jsx-2810654915{position:absolute;left:55%;color:grey;cursor:pointer;}i.jsx-2810654915:hover{color:black;}.fa-trash-alt.jsx-2810654915{left:65%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvbXlob3N0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RmtCLEFBR3dCLEFBWUYsQUFLTSxBQUtBLEFBSUMsQUFPTixBQUlILFNBQ1gsRUF6QmdCLENBcUJoQixLQWhCaUIsQUFLakIsQ0FJVyxPQWJYLEVBY2EsS0FUYixNQVVpQixlQUNqQixxQkE3QmdDLG1IQUNYLDZGQUNULFVBQ0UsWUFDZSwyQkFDUixtQkFDRixpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9teWhvc3RpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGRldGVybWluZUVuZCwgZGV0ZXJtaW5lTW9udGggfSBmcm9tIFwiLi4vVXRpbHNcIjtcblxuY29uc3QgTXlIb3N0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyRGF0YSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbnVwXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PlxuICAgICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXNlciA9PT0gdXNlckRhdGEudXNlci51c2VybmFtZSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3VzZXJEYXRhXSk7XG5cbiAgY29uc3QgcmVtb3ZlID0gYXN5bmMgKGhvc3RpbmcpID0+IHtcbiAgICBjb25zdCBjb25maXJtID0gd2luZG93LmNvbmZpcm0oXG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBob3N0aW5nP1wiXG4gICAgKTtcbiAgICBpZiAoY29uZmlybSkge1xuICAgICAgYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaG9zdGluZyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyRGF0YS5qd3R9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJvdXRlci5yZWxvYWQoKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2E0MGQ5MDgxNjAuanNcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIHN0YXRlLm1hcCgoaG9zdGluZykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXN1bHRzLyR7aG9zdGluZy51dWlkfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtob3N0aW5nLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hvc3QvJHtob3N0aW5nLnV1aWR9L2VkaXQvJHt1dWlkdjQoKX1gfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRyYXNoLWFsdFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShob3N0aW5nKX0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICAgIHtgJHtob3N0aW5nLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgICAgaG9zdGluZy5kYXRlLmNoYXJBdCg5KVxuICAgICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgICBob3N0aW5nLmRhdGUuc2xpY2UoNSwgNylcbiAgICAgICAgICAgICAgICApfSAke2hvc3RpbmcuZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBtYXJnaW46IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDU1JTtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtdHJhc2gtYWx0IHtcbiAgICAgICAgICBsZWZ0OiA2NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlIb3N0aW5ncztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyHostings, \"LqdXUcETVl5+Jr7DF/SCgdYdjnc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = MyHostings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyHostings);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyHostings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlob3N0aW5ncy5qcz9iZDkxIl0sIm5hbWVzIjpbIk15SG9zdGluZ3MiLCJ1c2VyRGF0YSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsInB1c2giLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJmaWx0ZXIiLCJob3N0aW5nIiwidXNlciIsInVzZXJuYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsImNvbmZpcm0iLCJ3aW5kb3ciLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiand0IiwicmVsb2FkIiwidW5kZWZpbmVkIiwibWFwIiwidXVpZCIsImxvY2F0aW9uIiwidXVpZHY0IiwiZGF0ZSIsInNsaWNlIiwiZGV0ZXJtaW5lRW5kIiwiY2hhckF0IiwiZGV0ZXJtaW5lTW9udGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQTNCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGdUIsa0JBR0dDLHNEQUFRLEVBSFg7QUFBQSxNQUdoQkMsS0FIZ0I7QUFBQSxNQUdUQyxRQUhTOztBQUt2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCRyxZQUFNLENBQUNNLElBQVAsQ0FBWSxTQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFELHlEQUFT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QUNxQixJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsQ0FGTixTQUVrQ0MsNERBQVksQ0FDMUN2QixPQUFPLENBQUNxQixJQUFSLENBQWFHLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FEMEMsQ0FGOUMsY0FJT0MsOERBQWMsQ0FDakJ6QixPQUFPLENBQUNxQixJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FEaUIsQ0FKckIsY0FNT3RCLE9BQU8sQ0FBQ3FCLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEVELENBMUhEOztHQUFNeEMsVTtVQUVXSyxxRDs7O0tBRlhMLFU7QUE0SFNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbXlob3N0aW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVFbmQsIGRldGVybWluZU1vbnRoIH0gZnJvbSBcIi4uL1V0aWxzXCI7XG5cbmNvbnN0IE15SG9zdGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlckRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnVzZXIgPT09IHVzZXJEYXRhLnVzZXIudXNlcm5hbWUpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YV0pO1xuXG4gIGNvbnN0IHJlbW92ZSA9IGFzeW5jIChob3N0aW5nKSA9PiB7XG4gICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgaG9zdGluZz9cIlxuICAgICk7XG4gICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGhvc3RpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckRhdGEuand0fWAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbihyb3V0ZXIucmVsb2FkKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hNDBkOTA4MTYwLmpzXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7c3RhdGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBzdGF0ZS5tYXAoKGhvc3RpbmcpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVzdWx0cy8ke2hvc3RpbmcudXVpZH1gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiB7aG9zdGluZy5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ob3N0LyR7aG9zdGluZy51dWlkfS9lZGl0LyR7dXVpZHY0KCl9YH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS10cmFzaC1hbHRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaG9zdGluZyl9IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICBEYXRlOntcIiBcIn1cbiAgICAgICAgICAgICAgICB7YCR7aG9zdGluZy5kYXRlLnNsaWNlKDgsIDEwKX0ke2RldGVybWluZUVuZChcbiAgICAgICAgICAgICAgICAgIGhvc3RpbmcuZGF0ZS5jaGFyQXQoOSlcbiAgICAgICAgICAgICAgICApfSAke2RldGVybWluZU1vbnRoKFxuICAgICAgICAgICAgICAgICAgaG9zdGluZy5kYXRlLnNsaWNlKDUsIDcpXG4gICAgICAgICAgICAgICAgKX0gJHtob3N0aW5nLmRhdGUuc2xpY2UoMCwgNCl9YH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgbWFyZ2luOiAwIDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1NSU7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhLXRyYXNoLWFsdCB7XG4gICAgICAgICAgbGVmdDogNjUlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SG9zdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/myhostings.js\n");

/***/ })

})