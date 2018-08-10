import VDom from './vdom';
import tree1 from './samples/tree1';
import tree2 from './samples/tree2';

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

VDom.updateElement($root, tree1);
$reload.addEventListener('click', () => {
  VDom.updateElement($root, tree2, tree1);
});
