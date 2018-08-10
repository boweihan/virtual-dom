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

/***/ "./src/clazz.js":
/*!**********************!*\
  !*** ./src/clazz.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/** custom implementation of h()\n * set props to empty object if there are no attributes\n */\n// prettier-ignore\nvar clazz = function clazz(type, props) {\n  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  // eslint-disable-line\n  return { type: type, props: props || {}, children: children };\n};\n\nexports.default = clazz;\n\n//# sourceURL=webpack:///./src/clazz.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _clazz = __webpack_require__(/*! ./clazz */ \"./src/clazz.js\");\n\nvar _clazz2 = _interopRequireDefault(_clazz);\n\nvar _vdom = __webpack_require__(/*! ./vdom */ \"./src/vdom.js\");\n\nvar _vdom2 = _interopRequireDefault(_vdom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** @jsx clazz */\nvar log = function log(e) {\n  console.log(e.target.value); // eslint-disable-line\n}; // eslint-disable-line\n\n\nvar f = (0, _clazz2.default)(\n  'ul',\n  { style: 'list-style: none;' },\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item' },\n    (0, _clazz2.default)('input', { type: 'checkbox', checked: true }),\n    (0, _clazz2.default)('input', { type: 'text', onInput: log })\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n);\n\nvar g = (0, _clazz2.default)(\n  'ul',\n  { style: 'list-style: none;' },\n  (0, _clazz2.default)(\n    'li',\n    { className: 'item item2', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { style: 'background: red;' },\n    (0, _clazz2.default)('input', { type: 'checkbox', checked: false }),\n    (0, _clazz2.default)('input', { type: 'text', onInput: log })\n  ),\n  (0, _clazz2.default)(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n);\n\nvar $root = document.getElementById('root');\nvar $reload = document.getElementById('reload');\n\n_vdom2.default.updateElement($root, f);\n$reload.addEventListener('click', function () {\n  _vdom2.default.updateElement($root, g, f);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/vdom.js":
/*!*********************!*\
  !*** ./src/vdom.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualDom = function VirtualDom() {\n  _classCallCheck(this, VirtualDom);\n};\n\nVirtualDom.createElement = function (node) {\n  if (!node) {\n    // handle falsy nodes\n    return;\n  }\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  }\n  var $el = document.createElement(node.type);\n\n  // set props\n  VirtualDom.setProps($el, node.props);\n\n  // set event listeners\n  VirtualDom.addEventListeners($el, node.props);\n\n  // bind appendChild to the parent element\n  node.children.map(VirtualDom.createElement).forEach($el.appendChild.bind($el));\n  return $el;\n};\n\nVirtualDom.updateElement = function ($parent, newNode, oldNode) /* index of child */\n{\n  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  if (newNode && !oldNode) {\n    // there is a new node and no old node, create the new node\n    $parent.appendChild(VirtualDom.createElement(newNode));\n  } else if (!newNode && oldNode) {\n    // there is no new node but there was an old node, remove the old node from the DOM\n    $parent.removeChild($parent.childNodes[index]);\n  } else if (VirtualDom.changed(newNode, oldNode)) {\n    // the two nodes exist but are different, replace the old node\n    $parent.replaceChild(VirtualDom.createElement(newNode), $parent.childNodes[index]);\n  } else if (newNode.type) {\n    // node types haven't changed, update the props\n    VirtualDom.updateProps($parent.childNodes[index], newNode.props, oldNode.props);\n    // the node is not a text node and therefore has children\n    // DFS through children to update\n    var newLength = newNode.children.length;\n    var oldLength = oldNode.children.length;\n    var maxLen = Math.max(newLength, oldLength);\n    for (var i = 0; i < maxLen; i++) {\n      VirtualDom.updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);\n    }\n  }\n};\n\nVirtualDom.changed = function (node1, node2) {\n  return (typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2)) || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate // hacky solution for forcing updates for event listeners\n  ;\n};\n\nVirtualDom.setProp = function ($target, name, value) {\n  if (VirtualDom.isCustomProp(name)) {\n    return;\n  } else if (name === 'className') {\n    $target.setAttribute('class', value);\n  } else if (typeof value === 'boolean') {\n    VirtualDom.setBooleanProp($target, name, value);\n  } else {\n    $target.setAttribute(name, value);\n  }\n};\n\nVirtualDom.setProps = function ($target, props) {\n  Object.keys(props).forEach(function (name) {\n    VirtualDom.setProp($target, name, props[name]);\n  });\n};\n\nVirtualDom.setBooleanProp = function ($target, name, value) {\n  if (value) {\n    $target.setAttribute(name, value);\n    $target[name] = true;\n  } else {\n    $target[name] = false;\n  }\n};\n\nVirtualDom.removeProp = function ($target, name, value) {\n  if (VirtualDom.isCustomProp(name)) {\n    return;\n  } else if (name === 'className') {\n    $target.removeAttribute('class');\n  } else if (typeof value === 'boolean') {\n    VirtualDom.removeBooleanProp($target, name);\n  } else {\n    $target.removeAttribute(name);\n  }\n};\n\nVirtualDom.removeBooleanProp = function ($target, name) {\n  $target.removeAttribute(name);\n  $target[name] = false;\n};\n\nVirtualDom.updateProp = function ($target, name, newVal, oldVal) {\n  if (!newVal) {\n    VirtualDom.removeProp($target, name, oldVal);\n  } else if (!oldVal || newVal !== oldVal) {\n    VirtualDom.setProp($target, name, newVal);\n  }\n};\n\nVirtualDom.updateProps = function ($target, newProps) {\n  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var props = Object.assign({}, newProps, oldProps);\n  Object.keys(props).forEach(function (name) {\n    VirtualDom.updateProp($target, name, newProps[name], oldProps[name]);\n  });\n};\n\nVirtualDom.addEventListeners = function ($target, props) {\n  Object.keys(props).forEach(function (name) {\n    if (VirtualDom.isEventProp(name)) {\n      $target.addEventListener(VirtualDom.extractEventName(name), props[name]);\n    }\n  });\n};\n\nVirtualDom.isCustomProp = function (name) {\n  return VirtualDom.isEventProp(name) || name === 'forceUpdate';\n};\n\nVirtualDom.isEventProp = function (name) {\n  return (/^on/.test(name)\n  );\n};\n\nVirtualDom.extractEventName = function (name) {\n  return name.slice(2).toLowerCase();\n};\n\nexports.default = VirtualDom;\n\n//# sourceURL=webpack:///./src/vdom.js?");

/***/ })

/******/ });