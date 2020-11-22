module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/CountryContext.js":
/*!***********************************!*\
  !*** ./context/CountryContext.js ***!
  \***********************************/
/*! exports provided: CountryContext, CountryContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountryContext\", function() { return CountryContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountryContextProvider\", function() { return CountryContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/context/CountryContext.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst CountryContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(undefined);\nclass CountryContextProvider extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      storeCountry: country => this.setState(_objectSpread(_objectSpread({}, this.state), {}, {\n        country\n      })),\n      country: \"\"\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountryContext.Provider, {\n      value: this.state,\n      children: this.props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0NvdW50cnlDb250ZXh0LmpzPzUxOGYiXSwibmFtZXMiOlsiQ291bnRyeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiQ291bnRyeUNvbnRleHRQcm92aWRlciIsIkNvbXBvbmVudCIsInN0b3JlQ291bnRyeSIsImNvdW50cnkiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsQ0FBQ0MsU0FBRCxDQUFwQztBQUVBLE1BQU1DLHNCQUFOLFNBQXFDQywrQ0FBckMsQ0FBK0M7QUFBQTtBQUFBOztBQUFBLG1DQUM1QztBQUNOQyxrQkFBWSxFQUFHQyxPQUFELElBQWEsS0FBS0MsUUFBTCxpQ0FBbUIsS0FBS0MsS0FBeEI7QUFBK0JGO0FBQS9CLFNBRHJCO0FBRU5BLGFBQU8sRUFBRTtBQUZILEtBRDRDO0FBQUE7O0FBTXBERyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFdBQUssRUFBRSxLQUFLRCxLQUFyQztBQUFBLGdCQUNHLEtBQUtFLEtBQUwsQ0FBV0M7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFabUQiLCJmaWxlIjoiLi9jb250ZXh0L0NvdW50cnlDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ291bnRyeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjbGFzcyBDb3VudHJ5Q29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RvcmVDb3VudHJ5OiAoY291bnRyeSkgPT4gdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGNvdW50cnkgfSksXG4gICAgY291bnRyeTogXCJcIixcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb3VudHJ5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zdGF0ZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db3VudHJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CountryContext.js\n");

/***/ }),

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContextProvider\", function() { return UserContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/context/UserContext.js\";\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(undefined);\nclass UserContextProvider extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  async componentDidMount() {\n    const pass = \"123456789\";\n\n    if (localStorage.getItem(\"identifier\") === null || localStorage.getItem(\"password\") === null) {// const { data } = await axios\n      //   .post(`${process.env.NEXT_PUBLIC_HOST}/auth/local`, {\n      //     identifier: \"dummy@gmail.com\",\n      //     password: pass,\n      //   })\n      //   .catch((err) => console.log(err));\n      // localStorage.setItem(\"identifier\", data.user.email);\n      // localStorage.setItem(\"password\", pass);\n      // this.setState(data);\n    } else {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${\"http://localhost:1337\"}/auth/local`, {\n        identifier: localStorage.getItem(\"identifier\"),\n        password: localStorage.getItem(\"password\")\n      }).catch(err => console.log(err));\n      this.setState(data);\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n      value: this.state,\n      children: this.props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzPzExYzciXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiVXNlckNvbnRleHRQcm92aWRlciIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwicGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhdGUiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELENBQWpDO0FBRUEsTUFBTUMsbUJBQU4sU0FBa0NDLCtDQUFsQyxDQUE0QztBQUNqRCxRQUFNQyxpQkFBTixHQUEwQjtBQUN4QixVQUFNQyxJQUFJLEdBQUcsV0FBYjs7QUFFQSxRQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFBdkMsSUFDQUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLElBRnZDLEVBR0UsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQWJELE1BYU87QUFDTCxZQUFNO0FBQUVDO0FBQUYsVUFBVyxNQUFNQyw0Q0FBSyxDQUN6QkMsSUFEb0IsQ0FDZCxHQUFFQyx1QkFBNkIsYUFEakIsRUFDK0I7QUFDbERDLGtCQUFVLEVBQUVOLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQURzQztBQUVsRE0sZ0JBQVEsRUFBRVAsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCO0FBRndDLE9BRC9CLEVBS3BCTyxLQUxvQixDQUtiQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTEssQ0FBdkI7QUFNQSxXQUFLRyxRQUFMLENBQWNWLElBQWQ7QUFDRDtBQUNGOztBQUVEVyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUUsS0FBS0MsS0FBbEM7QUFBQSxnQkFDRyxLQUFLQyxLQUFMLENBQVdDO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBbENnRCIsImZpbGUiOiIuL2NvbnRleHQvVXNlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxuZXhwb3J0IGNsYXNzIFVzZXJDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwYXNzID0gXCIxMjM0NTY3ODlcIjtcblxuICAgIGlmIChcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRlbnRpZmllclwiKSA9PT0gbnVsbCB8fFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKSA9PT0gbnVsbFxuICAgICkge1xuICAgICAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvc1xuICAgICAgLy8gICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9hdXRoL2xvY2FsYCwge1xuICAgICAgLy8gICAgIGlkZW50aWZpZXI6IFwiZHVtbXlAZ21haWwuY29tXCIsXG4gICAgICAvLyAgICAgcGFzc3dvcmQ6IHBhc3MsXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRlbnRpZmllclwiLCBkYXRhLnVzZXIuZW1haWwpO1xuICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwYXNzd29yZFwiLCBwYXNzKTtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkZW50aWZpZXJcIiksXG4gICAgICAgICAgcGFzc3dvcmQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc3dvcmRcIiksXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _context_CountryContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/CountryContext */ \"./context/CountryContext.js\");\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/beach-cleanup/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContextProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_CountryContext__WEBPACK_IMPORTED_MODULE_4__[\"CountryContextProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSxxRUFBQyx3RUFBRDtBQUFBLDJCQUNFLHFFQUFDLDhFQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IFVzZXJDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgQ291bnRyeUNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0NvdW50cnlDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvdW50cnlDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ291bnRyeUNvbnRleHRQcm92aWRlcj5cbiAgICA8L1VzZXJDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });