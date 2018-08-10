// @flow

import VDom from './vdom';
import tree1 from './samples/tree1';
import tree2 from './samples/tree2';

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

if ($root) {
  let elem = VDom.createElement(tree1);
  if (elem) {
    $root.appendChild(elem);
  }
  if ($reload) {
    $reload.addEventListener('click', () => {
      VDom.updateElement($root, tree2, tree1);
    });
  }
}
