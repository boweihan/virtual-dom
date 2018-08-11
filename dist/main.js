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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Logger = function Logger() {\n  _classCallCheck(this, Logger);\n};\n\nLogger.logEvent = function (e) {\n  console.log(e.target.value); // eslint-disable-line\n};\n\nexports.default = Logger;\n\n//# sourceURL=webpack:///./src/helpers/logger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _BroadcastingVirtualDom = __webpack_require__(/*! ./vdom/BroadcastingVirtualDom */ \"./src/vdom/BroadcastingVirtualDom.js\");\n\nvar _BroadcastingVirtualDom2 = _interopRequireDefault(_BroadcastingVirtualDom);\n\nvar _tree = __webpack_require__(/*! ./samples/tree1 */ \"./src/samples/tree1.js\");\n\nvar _tree2 = _interopRequireDefault(_tree);\n\nvar _tree3 = __webpack_require__(/*! ./samples/tree2 */ \"./src/samples/tree2.js\");\n\nvar _tree4 = _interopRequireDefault(_tree3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vDom = new _BroadcastingVirtualDom2.default();\n\nvar $root = document.getElementById('root');\nvar $reload = document.getElementById('reload');\n\nif ($root) {\n  var elem = vDom.createElement(_tree2.default);\n  if (elem) {\n    $root.appendChild(elem);\n  }\n  if ($reload) {\n    $reload.addEventListener('click', function () {\n      vDom.updateElement($root, _tree4.default, _tree2.default);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/vdom/BroadcastingVirtualDom.js":
/*!********************************************!*\
  !*** ./src/vdom/BroadcastingVirtualDom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _VirtualDom2 = __webpack_require__(/*! ./VirtualDom */ \"./src/vdom/VirtualDom.js\");\n\nvar _VirtualDom3 = _interopRequireDefault(_VirtualDom2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BroadcastingVirtualDom = function (_VirtualDom) {\n  _inherits(BroadcastingVirtualDom, _VirtualDom);\n\n  function BroadcastingVirtualDom() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, BroadcastingVirtualDom);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BroadcastingVirtualDom.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom)).call.apply(_ref, [this].concat(args))), _this), _this.createElement = function (node) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'createElement', _this).call(_this, node);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(BroadcastingVirtualDom, [{\n    key: 'updateElement',\n    value: function updateElement($parent, newNode, oldNode) {\n      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'updateElement', this).call(this, $parent, newNode, oldNode, index);\n    }\n  }, {\n    key: 'setProp',\n    value: function setProp($target, name, value) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'setProp', this).call(this, $target, name, value);\n    }\n  }, {\n    key: 'setProps',\n    value: function setProps($target, props) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'setProps', this).call(this, $target, props);\n    }\n  }, {\n    key: 'removeProp',\n    value: function removeProp($target, name, value) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'removeProp', this).call(this, $target, name, value);\n    }\n  }, {\n    key: 'updateProp',\n    value: function updateProp($target, name, newVal, oldVal) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'updateProp', this).call(this, $target, name, newVal, oldVal);\n    }\n  }, {\n    key: 'updateProps',\n    value: function updateProps($target, newProps) {\n      var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'updateProps', this).call(this, $target, newProps, oldProps);\n    }\n  }, {\n    key: 'addEventListeners',\n    value: function addEventListeners($target, props) {\n      _get(BroadcastingVirtualDom.prototype.__proto__ || Object.getPrototypeOf(BroadcastingVirtualDom.prototype), 'addEventListeners', this).call(this, $target, props);\n    }\n  }]);\n\n  return BroadcastingVirtualDom;\n}(_VirtualDom3.default);\n\nexports.default = BroadcastingVirtualDom;\n\n//# sourceURL=webpack:///./src/vdom/BroadcastingVirtualDom.js?");

/***/ }),

/***/ "./src/vdom/VirtualDom.js":
/*!********************************!*\
  !*** ./src/vdom/VirtualDom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualDom = function () {\n  function VirtualDom() {\n    _classCallCheck(this, VirtualDom);\n  }\n\n  _createClass(VirtualDom, [{\n    key: 'createElement',\n\n    /**************************** ELEMENT OPERATIONS ******************************/\n\n    /**\n     * create a new node\n     * @param node virtual dom node representation\n     */\n    value: function createElement(node) {\n      if (!node) {\n        // handle falsy nodes\n        return;\n      }\n      if (typeof node === 'string') {\n        return document.createTextNode(node);\n      }\n      var $el = document.createElement(node.type);\n\n      // set props\n      this.setProps($el, node.props);\n\n      // set event listeners\n      this.addEventListeners($el, node.props);\n\n      // bind appendChild to the parent element\n      node.children.map(this.createElement)\n      // $FlowFixMe\n      .forEach($el.appendChild.bind($el));\n      return $el;\n    }\n\n    /**\n     * handle diff for a node on the virtual dom\n     * @param $parent parent DOM element\n     * @param newNode new child virtual dom node\n     * @param oldNode old child virtual dom node\n     * @param index index of child element, for O(1) access\n     *\n     */\n\n  }, {\n    key: 'updateElement',\n    value: function updateElement($parent, newNode, oldNode) {\n      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n      if (newNode && !oldNode) {\n        // there is a new node and no old node, create the new node\n        $parent.appendChild(this.createElement(newNode));\n      } else if (!newNode && oldNode) {\n        // there is no new node but there was an old node, remove the old node from the DOM\n        $parent.removeChild($parent.childNodes[index]);\n      } else if (this.changed(newNode, oldNode)) {\n        // the two nodes exist but are different, replace the old node\n        $parent.replaceChild(this.createElement(newNode), $parent.childNodes[index]);\n      } else if (\n      // string checks for flow, don't need them in theory because newNode.type returns undefined\n      typeof newNode !== 'string' && typeof oldNode !== 'string' && newNode.type) {\n        // node types haven't changed, update the props\n        this.updateProps($parent.childNodes[index], newNode.props, oldNode.props);\n        // the node is not a text node and therefore has children\n        // DFS through children to update\n        var newLength = newNode.children.length;\n        var oldLength = oldNode.children.length;\n        var maxLen = Math.max(newLength, oldLength);\n        for (var i = 0; i < maxLen; i++) {\n          this.updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);\n        }\n      }\n    }\n\n    /**\n     * determine whether nodes should be diffed\n     * @param node1 virtual dom node\n     * @param node2 virtual dom node\n     */\n\n  }, {\n    key: 'changed',\n    value: function changed(node1, node2) {\n      if ((typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2))) {\n        return true;\n      }\n      if (typeof node1 === 'string' && node1 !== node2) {\n        return true;\n      }\n      if (node1.type && node2.type && node1.type !== node2.type) {\n        return true;\n      }\n      if (node1.props && node1.props.forceUpdate) {\n        return true;\n      }\n      return false;\n    }\n\n    /****************************** PROP OPERATIONS *******************************/\n\n    /**\n     * wrapper around setAttribute\n     * @param $target target DOM element\n     * @param name prop name\n     * @param value prop value\n     */\n\n  }, {\n    key: 'setProp',\n    value: function setProp($target, name, value) {\n      if (this.isCustomProp(name)) {\n        return;\n      } else if (name === 'className') {\n        $target.setAttribute('class', value);\n      } else if (typeof value === 'boolean') {\n        this.setBooleanProp($target, name, value);\n      } else {\n        $target.setAttribute(name, value);\n      }\n    }\n\n    /**\n     * helper for setting props\n     * @param $target target DOM element\n     * @param props list of props for target element\n     */\n\n  }, {\n    key: 'setProps',\n    value: function setProps($target, props) {\n      var _this = this;\n\n      Object.keys(props).forEach(function (name) {\n        _this.setProp($target, name, props[name]);\n      });\n    }\n\n    /**\n     * helper for setting boolean props\n     * @param $target target DOM element\n     * @param name name of prop\n     * @param value boolean value of prop\n     */\n\n  }, {\n    key: 'setBooleanProp',\n    value: function setBooleanProp($target, name, value) {\n      if (value) {\n        $target.setAttribute(name, value);\n        $target[name] = true;\n      } else {\n        $target[name] = false;\n      }\n    }\n\n    /**\n     * remove a prop\n     * @param $target target DOM element\n     * @param name name of prop\n     * @param value boolean value of prop\n     */\n\n  }, {\n    key: 'removeProp',\n    value: function removeProp($target, name, value) {\n      if (this.isCustomProp(name)) {\n        return;\n      } else if (name === 'className') {\n        $target.removeAttribute('class');\n      } else if (typeof value === 'boolean') {\n        this.removeBooleanProp($target, name);\n      } else {\n        $target.removeAttribute(name);\n      }\n    }\n\n    /**\n     * helper for removing boolean prop\n     * @param $target target DOM element\n     * @param name name of prop\n     */\n\n  }, {\n    key: 'removeBooleanProp',\n    value: function removeBooleanProp($target, name) {\n      $target.removeAttribute(name);\n      $target[name] = false;\n    }\n\n    /**\n     * update a single prop on an element\n     * cases:\n     * 1) no newVal\n     * 2) no oldVal\n     * 3) newVal and oldVal are different\n     * 4) newVal and oldVal are the same\n     * @param $target target DOM element\n     * @param name prop name\n     * @param newVal new prop value\n     * @param oldVal old prop value\n     */\n\n  }, {\n    key: 'updateProp',\n    value: function updateProp($target, name, newVal, oldVal) {\n      if (!newVal) {\n        this.removeProp($target, name, oldVal);\n      } else if (!oldVal || newVal !== oldVal) {\n        this.setProp($target, name, newVal);\n      }\n    }\n\n    /**\n     * update all props on an element\n     * @param $target target DOM element\n     * @param newProps\n     * @param oldProps\n     */\n\n  }, {\n    key: 'updateProps',\n    value: function updateProps($target, newProps) {\n      var _this2 = this;\n\n      var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n      var props = Object.assign({}, newProps, oldProps);\n      Object.keys(props).forEach(function (name) {\n        _this2.updateProp($target, name, newProps[name], oldProps[name]);\n      });\n    }\n\n    /************************** EVENT LISTENERS ***********************************/\n\n    /**\n     * iterate through DOM element props and add event listeners\n     * @param $target target DOM element\n     * @param props virtual props for DOM element\n     */\n\n  }, {\n    key: 'addEventListeners',\n    value: function addEventListeners($target, props) {\n      var _this3 = this;\n\n      Object.keys(props).forEach(function (name) {\n        if (_this3.isEventProp(name)) {\n          $target.addEventListener(_this3.extractEventName(name), props[name]);\n        }\n      });\n    }\n\n    /***************************** HELPERS ****************************************/\n\n    /**\n     * check if prop is a custom prop, so we don't set it on a real event node\n     * @param name name of prop\n     */\n\n  }, {\n    key: 'isCustomProp',\n    value: function isCustomProp(name) {\n      return this.isEventProp(name) || name === 'forceUpdate';\n    }\n\n    /**\n     * check if prop is an event prop (i.e. onClick)\n     * @param name name of prop\n     */\n\n  }, {\n    key: 'isEventProp',\n    value: function isEventProp(name) {\n      return (/^on/.test(name)\n      );\n    }\n\n    /**\n     * extract the real event from an event prop\n     * @param name name of prop\n     */\n\n  }, {\n    key: 'extractEventName',\n    value: function extractEventName(name) {\n      return name.slice(2).toLowerCase();\n    }\n  }]);\n\n  return VirtualDom;\n}();\n\nexports.default = VirtualDom;\n\n//# sourceURL=webpack:///./src/vdom/VirtualDom.js?");

/***/ })

/******/ });