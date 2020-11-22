webpackHotUpdate_N_E("pages/myhostings",{

/***/ "./pages/myhostings.js":
/*!*****************************!*\
  !*** ./pages/myhostings.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Utils */ \"./Utils.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar MyHostings = function MyHostings() {\n  _s();\n\n  var userData = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__[\"UserContext\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var timeout = setTimeout(function () {\n      router.push(\"/signup\");\n    }, 1000);\n\n    if (userData !== null) {\n      clearTimeout(timeout);\n    }\n  }, [userData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (userData !== null) {\n      fetch(\"\".concat(\"http://localhost:1337\", \"/hostings\")).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return setState(data.filter(function (hosting) {\n          return hosting.user === userData.user.username;\n        }));\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [userData]);\n\n  var remove = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hosting) {\n      var confirm;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              confirm = window.confirm(\"Are you sure you want to delete your hosting?\");\n\n              if (!confirm) {\n                _context.next = 5;\n                break;\n              }\n\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_9___default()({\n                method: \"DELETE\",\n                url: \"\".concat(\"http://localhost:1337\", \"/hostings/\").concat(hosting.id),\n                data: {\n                  hosting: hosting\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(userData.jwt)\n                }\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 4:\n              router.reload();\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function remove(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"script\", {\n        src: \"https://kit.fontawesome.com/a40d908160.js\",\n        crossOrigin: \"anonymous\",\n        className: \"jsx-2810654915\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      children: state === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2810654915\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 11\n      }, _this) : state.map(function (hosting) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2810654915\" + \" \" + \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/results/\".concat(hosting.uuid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-2810654915\" + \" \" + \"location\",\n              children: [\"Location: \", hosting.location]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/host/\".concat(hosting.uuid, \"/edit/\").concat(Object(uuid__WEBPACK_IMPORTED_MODULE_8__[\"v4\"])()),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n              className: \"jsx-2810654915\" + \" \" + \"far fa-edit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n            onClick: function onClick() {\n              return remove(hosting);\n            },\n            className: \"jsx-2810654915\" + \" \" + \"far fa-trash-alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2810654915\" + \" \" + \"date\",\n            children: [\"Date:\", \" \", \"\".concat(hosting.date.slice(8, 10)).concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_12__[\"determineEnd\"])(hosting.date.charAt(9)), \" \").concat(Object(_Utils__WEBPACK_IMPORTED_MODULE_12__[\"determineMonth\"])(hosting.date.slice(5, 7)), \" \").concat(hosting.date.slice(0, 4))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2810654915\",\n      children: \".container.jsx-2810654915{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;height:90px;border:1px solid lightgray;border-radius:30px;margin:40px auto;position:relative;}p.jsx-2810654915{color:grey;margin:0 50px;}.location.jsx-2810654915{font-size:1.4rem;cursor:pointer;}.date.jsx-2810654915{font-size:1.1rem;}i.jsx-2810654915{position:absolute;left:55%;color:grey;cursor:pointer;}i.jsx-2810654915:hover{color:black;}.fa-trash-alt.jsx-2810654915{left:65%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL2JlYWNoLWNsZWFudXAvZnJvbnRlbmQvcGFnZXMvbXlob3N0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBR3dCLEFBWUYsQUFLTSxBQUtBLEFBSUMsQUFPTixBQUlILFNBQ1gsRUF6QmdCLENBcUJoQixLQWhCaUIsQUFLakIsQ0FJVyxPQWJYLEVBY2EsS0FUYixNQVVpQixlQUNqQixxQkE3QmdDLG1IQUNYLDZGQUNULFVBQ0UsWUFDZSwyQkFDUixtQkFDRixpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvYmVhY2gtY2xlYW51cC9mcm9udGVuZC9wYWdlcy9teWhvc3RpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGRldGVybWluZUVuZCwgZGV0ZXJtaW5lTW9udGggfSBmcm9tIFwiLi4vVXRpbHNcIjtcblxuY29uc3QgTXlIb3N0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaChcIi9zaWdudXBcIik7XG4gICAgfSwgMTAwMCk7XG4gICAgaWYgKHVzZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfVxuICB9LCBbdXNlckRhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3NgKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKChob3N0aW5nKSA9PiBob3N0aW5nLnVzZXIgPT09IHVzZXJEYXRhLnVzZXIudXNlcm5hbWUpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YV0pO1xuXG4gIGNvbnN0IHJlbW92ZSA9IGFzeW5jIChob3N0aW5nKSA9PiB7XG4gICAgY29uc3QgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgaG9zdGluZz9cIlxuICAgICk7XG4gICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2hvc3RpbmdzLyR7aG9zdGluZy5pZH1gLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaG9zdGluZyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyRGF0YS5qd3R9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2E0MGQ5MDgxNjAuanNcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtzdGF0ZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIHN0YXRlLm1hcCgoaG9zdGluZykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXN1bHRzLyR7aG9zdGluZy51dWlkfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+TG9jYXRpb246IHtob3N0aW5nLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hvc3QvJHtob3N0aW5nLnV1aWR9L2VkaXQvJHt1dWlkdjQoKX1gfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRyYXNoLWFsdFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShob3N0aW5nKX0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIERhdGU6e1wiIFwifVxuICAgICAgICAgICAgICAgIHtgJHtob3N0aW5nLmRhdGUuc2xpY2UoOCwgMTApfSR7ZGV0ZXJtaW5lRW5kKFxuICAgICAgICAgICAgICAgICAgaG9zdGluZy5kYXRlLmNoYXJBdCg5KVxuICAgICAgICAgICAgICAgICl9ICR7ZGV0ZXJtaW5lTW9udGgoXG4gICAgICAgICAgICAgICAgICBob3N0aW5nLmRhdGUuc2xpY2UoNSwgNylcbiAgICAgICAgICAgICAgICApfSAke2hvc3RpbmcuZGF0ZS5zbGljZSgwLCA0KX1gfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBtYXJnaW46IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDU1JTtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtdHJhc2gtYWx0IHtcbiAgICAgICAgICBsZWZ0OiA2NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlIb3N0aW5ncztcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/myhostings.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyHostings, \"LqdXUcETVl5+Jr7DF/SCgdYdjnc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = MyHostings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyHostings);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyHostings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlob3N0aW5ncy5qcz9iZDkxIl0sIm5hbWVzIjpbIk15SG9zdGluZ3MiLCJ1c2VyRGF0YSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNsZWFyVGltZW91dCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZpbHRlciIsImhvc3RpbmciLCJ1c2VyIiwidXNlcm5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiY29uZmlybSIsIndpbmRvdyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiaWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImp3dCIsInJlbG9hZCIsInVuZGVmaW5lZCIsIm1hcCIsInV1aWQiLCJsb2NhdGlvbiIsInV1aWR2NCIsImRhdGUiLCJzbGljZSIsImRldGVybWluZUVuZCIsImNoYXJBdCIsImRldGVybWluZU1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUEzQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRnVCLGtCQUdHQyxzREFBUSxFQUhYO0FBQUEsTUFHaEJDLEtBSGdCO0FBQUEsTUFHVEMsUUFIUzs7QUFLdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDN0JQLFlBQU0sQ0FBQ1EsSUFBUCxDQUFZ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QSxtQkFKRixlQU9FO0FBQWdDLG1CQUFPLEVBQUU7QUFBQSxxQkFBTWYsTUFBTSxDQUFDTixPQUFELENBQVo7QUFBQSxhQUF6QztBQUFBLGdEQUFhO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQUEsZ0RBQWEsTUFBYjtBQUFBLGdDQUNRLEdBRFIsWUFFTUEsT0FBTyxDQUFDc0IsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLEVBQXRCLENBRk4sU0FFa0NDLDREQUFZLENBQzFDeEIsT0FBTyxDQUFDc0IsSUFBUixDQUFhRyxNQUFiLENBQW9CLENBQXBCLENBRDBDLENBRjlDLGNBSU9DLDhEQUFjLENBQ2pCMUIsT0FBTyxDQUFDc0IsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBRGlCLENBSnJCLGNBTU92QixPQUFPLENBQUNzQixJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQTVIRDs7R0FBTTVDLFU7VUFFV0sscUQ7OztLQUZYTCxVO0FBOEhTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL215aG9zdGluZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgZGV0ZXJtaW5lRW5kLCBkZXRlcm1pbmVNb250aCB9IGZyb20gXCIuLi9VdGlsc1wiO1xuXG5jb25zdCBNeUhvc3RpbmdzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcbiAgICB9LCAxMDAwKTtcbiAgICBpZiAodXNlckRhdGEgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9ob3N0aW5nc2ApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PlxuICAgICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoKGhvc3RpbmcpID0+IGhvc3RpbmcudXNlciA9PT0gdXNlckRhdGEudXNlci51c2VybmFtZSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3VzZXJEYXRhXSk7XG5cbiAgY29uc3QgcmVtb3ZlID0gYXN5bmMgKGhvc3RpbmcpID0+IHtcbiAgICBjb25zdCBjb25maXJtID0gd2luZG93LmNvbmZpcm0oXG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBob3N0aW5nP1wiXG4gICAgKTtcbiAgICBpZiAoY29uZmlybSkge1xuICAgICAgYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vaG9zdGluZ3MvJHtob3N0aW5nLmlkfWAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBob3N0aW5nLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJEYXRhLmp3dH1gLFxuICAgICAgICB9LFxuICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICByb3V0ZXIucmVsb2FkKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYTQwZDkwODE2MC5qc1wiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAge3N0YXRlID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgc3RhdGUubWFwKChob3N0aW5nKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jlc3VsdHMvJHtob3N0aW5nLnV1aWR9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5Mb2NhdGlvbjoge2hvc3RpbmcubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaG9zdC8ke2hvc3RpbmcudXVpZH0vZWRpdC8ke3V1aWR2NCgpfWB9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGhvc3RpbmcpfSAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgRGF0ZTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAge2Ake2hvc3RpbmcuZGF0ZS5zbGljZSg4LCAxMCl9JHtkZXRlcm1pbmVFbmQoXG4gICAgICAgICAgICAgICAgICBob3N0aW5nLmRhdGUuY2hhckF0KDkpXG4gICAgICAgICAgICAgICAgKX0gJHtkZXRlcm1pbmVNb250aChcbiAgICAgICAgICAgICAgICAgIGhvc3RpbmcuZGF0ZS5zbGljZSg1LCA3KVxuICAgICAgICAgICAgICAgICl9ICR7aG9zdGluZy5kYXRlLnNsaWNlKDAsIDQpfWB9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTUlO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGk6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYS10cmFzaC1hbHQge1xuICAgICAgICAgIGxlZnQ6IDY1JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUhvc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/myhostings.js\n");

/***/ })

})