// @flow

import BroadcastingVirtualDom from './vdom/BroadcastingVirtualDom';
import tree1 from './samples/tree1';
import tree2 from './samples/tree2';

const vDom = new BroadcastingVirtualDom();
const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

if ($root) {
  let elem = vDom.createElement(tree1);
  if (elem) {
    $root.appendChild(elem);
  }
  if ($reload) {
    $reload.addEventListener('click', () => {
      vDom.updateElement($root, tree2, tree1);
    });
  }
}
