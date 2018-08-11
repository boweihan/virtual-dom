// @flow

import VirtualDom from './VirtualDom';
import type { Node, Element, Props, Value } from '../types/types';

export default class BroadcastingVirtualDom extends VirtualDom {
  createElement(node?: Node): ?Element | ?Text {
    return super.createElement(node);
  }

  updateElement(
    $parent: Element,
    newNode: Node,
    oldNode: Node,
    index?: number = 0 /* index of child */,
  ): void {
    super.updateElement($parent, newNode, oldNode, index);
  }

  setProp($target: Element, name: string, value: Value): void {
    super.setProp($target, name, value);
  }

  setProps($target: Element, props: Props): void {
    super.setProps($target, props);
  }

  removeProp($target: Element, name: string, value: Value): void {
    super.removeProp($target, name, value);
  }

  updateProp(
    $target: Element,
    name: string,
    newVal: Value,
    oldVal: Value,
  ): void {
    super.updateProp($target, name, newVal, oldVal);
  }

  updateProps($target: Element, newProps: Props, oldProps: Props = {}): void {
    super.updateProps($target, newProps, oldProps);
  }

  addEventListeners($target: Element, props: Props): void {
    super.addEventListeners($target, props);
  }
}
