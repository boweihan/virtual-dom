// @flow

import VirtualDom from './VirtualDom';
import type { Node, Element, Props, Value, Step } from '../types/types';

export default class BroadcastingVirtualDom extends VirtualDom {
  steps: Array<Step>;

  constructor() {
    super();
    this.steps = [];
  }

  /**
   * steps for animation
   */
  getSteps(): Array<Step> {
    let steps = this.steps;
    this.steps = [];
    return steps;
  }

  /** @extends **/
  createElement(node?: Node): ?Element | ?Text {
    return super.createElement(node);
  }

  /** @extends **/
  updateElement(
    $parent: Element,
    newNode: Node,
    oldNode: Node,
    index?: number = 0 /* index of child */,
  ): void {
    this.steps.push({ type: 'update', value: $parent.childNodes[index] });
    super.updateElement($parent, newNode, oldNode, index);
  }

  /** @extends **/
  setProp($target: Element, name: string, value: Value): void {
    this.steps.push({ type: 'setProp', value: $target });
    super.setProp($target, name, value);
  }

  /** @extends **/
  setProps($target: Element, props: Props): void {
    super.setProps($target, props);
  }

  /** @extends **/
  removeProp($target: Element, name: string, value: Value): void {
    this.steps.push({ type: 'removeProp', value: $target });
    super.removeProp($target, name, value);
  }

  /** @extends **/
  updateProp(
    $target: Element,
    name: string,
    newVal: Value,
    oldVal: Value,
  ): void {
    this.steps.push({ type: 'updateProp', value: $target });
    super.updateProp($target, name, newVal, oldVal);
  }

  /** @extends **/
  updateProps($target: Element, newProps: Props, oldProps: Props = {}): void {
    super.updateProps($target, newProps, oldProps);
  }

  /** @extends **/
  addEventListeners($target: Element, props: Props): void {
    this.steps.push({ type: 'addEventListeners', value: $target });
    super.addEventListeners($target, props);
  }
}
