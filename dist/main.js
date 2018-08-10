/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/clazz.js":
/*!******************************!*\
  !*** ./src/helpers/clazz.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n\n// prettier-ignore\nvar clazz = function clazz(type, props) {\n  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  // eslint-disable-line\n  return { type: type, props: props || {}, children: children };\n};\n\nexports.default = clazz;\n\n//# sourceURL=webpack:///./src/helpers/clazz.js?");

/***/ }),

/***/ "./src/helpers/logger.js":
/*!*******************************!*\
  !*** ./src/helpers/logger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: Unexpected token (4:18)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mLogger\\u001b[39m {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m  static logEvent \\u001b[33m=\\u001b[39m (e\\u001b[33m:\\u001b[39m \\u001b[33mObject\\u001b[39m)\\u001b[33m:\\u001b[39m \\u001b[36mvoid\\u001b[39m \\u001b[33m=>\\u001b[39m {\\n \\u001b[90m   | \\u001b[39m                  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 5 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(e\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mvalue)\\u001b[33m;\\u001b[39m \\u001b[90m// eslint-disable-line\\u001b[39m\\n \\u001b[90m 6 | \\u001b[39m  }\\u001b[33m;\\u001b[39m\\n \\u001b[90m 7 | \\u001b[39m}\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/helpers/logger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vdom = __webpack_require__(/*! ./vdom */ \"./src/vdom.js\");\n\nvar _vdom2 = _interopRequireDefault(_vdom);\n\nvar _tree = __webpack_require__(/*! ./samples/tree1 */ \"./src/samples/tree1.js\");\n\nvar _tree2 = _interopRequireDefault(_tree);\n\nvar _tree3 = __webpack_require__(/*! ./samples/tree2 */ \"./src/samples/tree2.js\");\n\nvar _tree4 = _interopRequireDefault(_tree3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar $root = document.getElementById('root');\n\nvar $reload = document.getElementById('reload');\n\nif ($root) {\n  var elem = _vdom2.default.createElement(_tree2.default);\n  if (elem) {\n    $root.appendChild(elem);\n  }\n  if ($reload) {\n    $reload.addEventListener('click', function () {\n      _vdom2.default.updateElement($root, _tree4.default, _tree2.default);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/samples/tree1.js":
/*!******************************!*\
  !*** ./src/samples/tree1.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _clazz = __webpack_require__(/*! ../helpers/clazz */ \"./src/helpers/clazz.js\");\n\nvar _clazz2 = _interopRequireDefault(_clazz);\n\nvar _logger = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** @jsx clazz */\n\nvar tree1 = (0, _clazz2.default)(\n  'ul',\n  { style: 'list-style: none;' },\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item' },\n    (0, _clazz2.default)('input', { type: 'checkbox', checked: true }),\n    (0, _clazz2.default)('input', { type: 'text', onInput: _logger2.default.logEvent })\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n); // eslint-disable-line\nexports.default = tree1;\n\n//# sourceURL=webpack:///./src/samples/tree1.js?");

/***/ }),

/***/ "./src/samples/tree2.js":
/*!******************************!*\
  !*** ./src/samples/tree2.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _clazz = __webpack_require__(/*! ../helpers/clazz */ \"./src/helpers/clazz.js\");\n\nvar _clazz2 = _interopRequireDefault(_clazz);\n\nvar _logger = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** @jsx clazz */\n\nvar tree2 = (0, _clazz2.default)(\n  'ul',\n  { style: 'list-style: none;' },\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item item2', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { style: 'background: red;' },\n    (0, _clazz2.default)('input', { type: 'checkbox', checked: false }),\n    (0, _clazz2.default)('input', { type: 'text', onInput: _logger2.default.logEvent })\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n); // eslint-disable-line\nexports.default = tree2;\n\n//# sourceURL=webpack:///./src/samples/tree2.js?");

/***/ }),

/***/ "./src/vdom.js":
/*!*********************!*\
  !*** ./src/vdom.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: Unexpected token (12:23)\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[90m   * @param node virtual dom node representation\\u001b[39m\\n \\u001b[90m 11 | \\u001b[39m\\u001b[90m   */\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39m  static createElement \\u001b[33m=\\u001b[39m (node\\u001b[33m?\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[33mNode\\u001b[39m)\\u001b[33m:\\u001b[39m \\u001b[33m?\\u001b[39m\\u001b[33mElement\\u001b[39m \\u001b[33m|\\u001b[39m \\u001b[33m?\\u001b[39m\\u001b[33mText\\u001b[39m \\u001b[33m=>\\u001b[39m {\\n \\u001b[90m    | \\u001b[39m                       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 13 | \\u001b[39m    \\u001b[36mif\\u001b[39m (\\u001b[33m!\\u001b[39mnode) {\\n \\u001b[90m 14 | \\u001b[39m      \\u001b[90m// handle falsy nodes\\u001b[39m\\n \\u001b[90m 15 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/vdom.js?");

/***/ })

/******/ });