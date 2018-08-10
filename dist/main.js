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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// JSX pragma specifics Babel transpilation to either\n// React.createElement() or h()\n/** @jsx h */\n\n/** custom implementation of h()\n * set props to empty object if there are no attributes\n */\n// prettier-ignore\nvar h = function h(type, props) {\n  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  // eslint-disable-line\n  return { type: type, props: props || {}, children: children };\n};\n\n// virtual DOM implementation\n\n/**************************** ELEMENT OPERATIONS ******************************/\n\n/**\n * create a new node\n * @param node virtual dom node representation\n */\nvar createElement = function createElement(node) {\n  if (!node) {\n    // handle falsy nodes\n    return;\n  }\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  }\n  var $el = document.createElement(node.type);\n\n  // set props\n  setProps($el, node.props);\n\n  // set event listeners\n  addEventListeners($el, node.props);\n\n  // bind appendChild to the parent element\n  node.children.map(createElement).forEach($el.appendChild.bind($el));\n  return $el;\n};\n\n/**\n * handle diff for a node on the virtual dom\n * @param $parent parent DOM element\n * @param newNode new child virtual dom node\n * @param oldNode old child virtual dom node\n * @param index index of child element, for O(1) access\n *\n */\nvar updateElement = function updateElement($parent, newNode, oldNode) /* index of child */\n{\n  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  if (newNode && !oldNode) {\n    // there is a new node and no old node, create the new node\n    $parent.appendChild(createElement(newNode));\n  } else if (!newNode && oldNode) {\n    // there is no new node but there was an old node, remove the old node from the DOM\n    $parent.removeChild($parent.childNodes[index]);\n  } else if (changed(newNode, oldNode)) {\n    // the two nodes exist but are different, replace the old node\n    $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);\n  } else if (newNode.type) {\n    // node types haven't changed, update the props\n    updateProps($parent.childNodes[index], newNode.props, oldNode.props);\n    // the node is not a text node and therefore has children\n    // DFS through children to update\n    var newLength = newNode.children.length;\n    var oldLength = oldNode.children.length;\n    var maxLen = Math.max(newLength, oldLength);\n    for (var i = 0; i < maxLen; i++) {\n      updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);\n    }\n  }\n};\n\n/**\n * determine whether nodes should be diffed\n * @param node1 virtual dom node\n * @param node2 virtual dom node\n */\nvar changed = function changed(node1, node2) {\n  return (typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2)) || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate // hacky solution for forcing updates for event listeners\n  ;\n};\n\n/****************************** PROP OPERATIONS *******************************/\n\n/**\n * wrapper around setAttribute\n * @param $target target DOM element\n * @param name prop name\n * @param value prop value\n */\nvar setProp = function setProp($target, name, value) {\n  if (isCustomProp(name)) {\n    return;\n  } else if (name === 'className') {\n    $target.setAttribute('class', value);\n  } else if (typeof value === 'boolean') {\n    setBooleanProp($target, name, value);\n  } else {\n    $target.setAttribute(name, value);\n  }\n};\n\n/**\n * helper for setting props\n * @param $target target DOM element\n * @param props list of props for target element\n */\nvar setProps = function setProps($target, props) {\n  Object.keys(props).forEach(function (name) {\n    setProp($target, name, props[name]);\n  });\n};\n\n/**\n * helper for setting boolean props\n * @param $target target DOM element\n * @param name name of prop\n * @param value boolean value of prop\n */\nvar setBooleanProp = function setBooleanProp($target, name, value) {\n  if (value) {\n    $target.setAttribute(name, value);\n    $target[name] = true;\n  } else {\n    $target[name] = false;\n  }\n};\n\n/**\n * remove a prop\n * @param $target target DOM element\n * @param name name of prop\n * @param value boolean value of prop\n */\nvar removeProp = function removeProp($target, name, value) {\n  if (isCustomProp(name)) {\n    return;\n  } else if (name === 'className') {\n    $target.removeAttribute('class');\n  } else if (typeof value === 'boolean') {\n    removeBooleanProp($target, name);\n  } else {\n    $target.removeAttribute(name);\n  }\n};\n\n/**\n * helper for removing boolean prop\n * @param $target target DOM element\n * @param name name of prop\n */\nvar removeBooleanProp = function removeBooleanProp($target, name) {\n  $target.removeAttribute(name);\n  $target[name] = false;\n};\n\n/**\n * update a single prop on an element\n * cases:\n * 1) no newVal\n * 2) no oldVal\n * 3) newVal and oldVal are different\n * 4) newVal and oldVal are the same\n * @param $target target DOM element\n * @param name prop name\n * @param newVal new prop value\n * @param oldVal old prop value\n */\nvar updateProp = function updateProp($target, name, newVal, oldVal) {\n  if (!newVal) {\n    removeProp($target, name, oldVal);\n  } else if (!oldVal || newVal !== oldVal) {\n    setProp($target, name, newVal);\n  }\n};\n\n/**\n * update all props on an element\n * @param $target target DOM element\n * @param newProps\n * @param oldProps\n */\nvar updateProps = function updateProps($target, newProps) {\n  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var props = Object.assign({}, newProps, oldProps);\n  Object.keys(props).forEach(function (name) {\n    updateProp($target, name, newProps[name], oldProps[name]);\n  });\n};\n\n/************************** EVENT LISTENERS ***********************************/\n\n/**\n * iterate through DOM element props and add event listeners\n * @param $target target DOM element\n * @param props virtual props for DOM element\n */\nvar addEventListeners = function addEventListeners($target, props) {\n  Object.keys(props).forEach(function (name) {\n    if (isEventProp(name)) {\n      $target.addEventListener(extractEventName(name), props[name]);\n    }\n  });\n};\n\n/***************************** HELPERS ****************************************/\n\n/**\n * check if prop is a custom prop, so we don't set it on a real event node\n * @param name name of prop\n */\nvar isCustomProp = function isCustomProp(name) {\n  return isEventProp(name) || name === 'forceUpdate';\n};\n\n/**\n * check if prop is an event prop (i.e. onClick)\n * @param name name of prop\n */\nvar isEventProp = function isEventProp(name) {\n  return (/^on/.test(name)\n  );\n};\n\n/**\n * extract the real event from an event prop\n * @param name name of prop\n */\nvar extractEventName = function extractEventName(name) {\n  return name.slice(2).toLowerCase();\n};\n\n//---------------------------------------------------------\n\nfunction log(e) {\n  console.log(e.target.value); // eslint-disable-line\n}\n\nvar f = h(\n  'ul',\n  { style: 'list-style: none;' },\n  h(\n    'li',\n    { className: 'item', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  h(\n    'li',\n    { className: 'item' },\n    h('input', { type: 'checkbox', checked: true }),\n    h('input', { type: 'text', onInput: log })\n  ),\n  h(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n);\n\nvar g = h(\n  'ul',\n  { style: 'list-style: none;' },\n  h(\n    'li',\n    { className: 'item item2', onClick: function onClick() {\n        return alert('hi!');\n      } },\n    'item 1'\n  ),\n  h(\n    'li',\n    { style: 'background: red;' },\n    h('input', { type: 'checkbox', checked: false }),\n    h('input', { type: 'text', onInput: log })\n  ),\n  h(\n    'li',\n    { forceUpdate: true },\n    'text'\n  )\n);\n\nvar $root = document.getElementById('root');\nvar $reload = document.getElementById('reload');\n\nupdateElement($root, f);\n$reload.addEventListener('click', function () {\n  updateElement($root, g, f);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });