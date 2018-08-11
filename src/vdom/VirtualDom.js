// @flow

import type { Node, Element, Props, Value } from '../types/types';

export default class VirtualDom {
  /**************************** ELEMENT OPERATIONS ******************************/

  /**
   * create a new node
   * @param node virtual dom node representation
   */
  createElement(node?: Node): ?Element | ?Text {
    if (!node) {
      // handle falsy nodes
      return;
    }
    if (typeof node === 'string') {
      return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);

    // set props
    this.setProps($el, node.props);

    // set event listeners
    this.addEventListeners($el, node.props);

    // hardbind callbacks with arrow functions
    node.children
      .map(child => this.createElement(child))
      // $FlowFixMe
      .forEach(child => $el.appendChild(child));
    return $el;
  }

  /**
   * handle diff for a node on the virtual dom
   * @param $parent parent DOM element
   * @param newNode new child virtual dom node
   * @param oldNode old child virtual dom node
   * @param index index of child element, for O(1) access
   *
   */
  updateElement(
    $parent: Element,
    newNode: Node,
    oldNode: Node,
    index?: number = 0 /* index of child */,
  ): void {
    if (newNode && !oldNode) {
      // there is a new node and no old node, create the new node
      $parent.appendChild(this.createElement(newNode));
    } else if (!newNode && oldNode) {
      // there is no new node but there was an old node, remove the old node from the DOM
      $parent.removeChild($parent.childNodes[index]);
    } else if (this.changed(newNode, oldNode)) {
      // the two nodes exist but are different, replace the old node
      $parent.replaceChild(
        this.createElement(newNode),
        $parent.childNodes[index],
      );
    } else if (
      // string checks for flow, don't need them in theory because newNode.type returns undefined
      typeof newNode !== 'string' &&
      typeof oldNode !== 'string' &&
      newNode.type
    ) {
      // node types haven't changed, update the props
      this.updateProps($parent.childNodes[index], newNode.props, oldNode.props);
      // the node is not a text node and therefore has children
      // DFS through children to update
      const newLength = newNode.children.length;
      const oldLength = oldNode.children.length;
      let maxLen = Math.max(newLength, oldLength);
      for (let i = 0; i < maxLen; i++) {
        this.updateElement(
          $parent.childNodes[index],
          newNode.children[i],
          oldNode.children[i],
          i,
        );
      }
    }
  }

  /**
   * determine whether nodes should be diffed
   * @param node1 virtual dom node
   * @param node2 virtual dom node
   */
  changed(node1: Node, node2: Node): boolean {
    if (typeof node1 !== typeof node2) {
      return true;
    }
    if (typeof node1 === 'string' && node1 !== node2) {
      return true;
    }
    if (node1.type && node2.type && node1.type !== node2.type) {
      return true;
    }
    if (node1.props && node1.props.forceUpdate) {
      return true;
    }
    return false;
  }

  /****************************** PROP OPERATIONS *******************************/

  /**
   * wrapper around setAttribute
   * @param $target target DOM element
   * @param name prop name
   * @param value prop value
   */
  setProp($target: Element, name: string, value: Value): void {
    if (this.isCustomProp(name)) {
      return;
    } else if (name === 'className') {
      $target.setAttribute('class', value);
    } else if (typeof value === 'boolean') {
      this.setBooleanProp($target, name, value);
    } else {
      $target.setAttribute(name, value);
    }
  }

  /**
   * helper for setting props
   * @param $target target DOM element
   * @param props list of props for target element
   */
  setProps($target: Element, props: Props): void {
    Object.keys(props).forEach(name => {
      this.setProp($target, name, props[name]);
    });
  }

  /**
   * helper for setting boolean props
   * @param $target target DOM element
   * @param name name of prop
   * @param value boolean value of prop
   */
  setBooleanProp($target: Element, name: string, value: any): void {
    if (value) {
      $target.setAttribute(name, value);
      $target[name] = true;
    } else {
      $target[name] = false;
    }
  }

  /**
   * remove a prop
   * @param $target target DOM element
   * @param name name of prop
   * @param value boolean value of prop
   */
  removeProp($target: Element, name: string, value: Value): void {
    if (this.isCustomProp(name)) {
      return;
    } else if (name === 'className') {
      $target.removeAttribute('class');
    } else if (typeof value === 'boolean') {
      this.removeBooleanProp($target, name);
    } else {
      $target.removeAttribute(name);
    }
  }

  /**
   * helper for removing boolean prop
   * @param $target target DOM element
   * @param name name of prop
   */
  removeBooleanProp($target: Element, name: string): void {
    $target.removeAttribute(name);
    $target[name] = false;
  }

  /**
   * update a single prop on an element
   * cases:
   * 1) no newVal
   * 2) no oldVal
   * 3) newVal and oldVal are different
   * 4) newVal and oldVal are the same
   * @param $target target DOM element
   * @param name prop name
   * @param newVal new prop value
   * @param oldVal old prop value
   */
  updateProp(
    $target: Element,
    name: string,
    newVal: Value,
    oldVal: Value,
  ): void {
    if (!newVal) {
      this.removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal) {
      this.setProp($target, name, newVal);
    }
  }

  /**
   * update all props on an element
   * @param $target target DOM element
   * @param newProps
   * @param oldProps
   */
  updateProps($target: Element, newProps: Props, oldProps: Props = {}): void {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
      this.updateProp($target, name, newProps[name], oldProps[name]);
    });
  }

  /************************** EVENT LISTENERS ***********************************/

  /**
   * iterate through DOM element props and add event listeners
   * @param $target target DOM element
   * @param props virtual props for DOM element
   */
  addEventListeners($target: Element, props: Props): void {
    Object.keys(props).forEach(name => {
      if (this.isEventProp(name)) {
        $target.addEventListener(this.extractEventName(name), props[name]);
      }
    });
  }

  /***************************** HELPERS ****************************************/

  /**
   * check if prop is a custom prop, so we don't set it on a real event node
   * @param name name of prop
   */
  isCustomProp(name: string): boolean {
    return this.isEventProp(name) || name === 'forceUpdate';
  }

  /**
   * check if prop is an event prop (i.e. onClick)
   * @param name name of prop
   */
  isEventProp(name: string): boolean {
    return /^on/.test(name);
  }

  /**
   * extract the real event from an event prop
   * @param name name of prop
   */
  extractEventName(name: string): string {
    return name.slice(2).toLowerCase();
  }
}
