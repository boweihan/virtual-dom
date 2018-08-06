// JSX pragma specifics Babel transpilation to either
// React.createElement() or h()
/** @jsx h */

// custom implementation of h()
// prettier-ignore
const h = (type, props, ...children) => { // eslint-disable-line
  return { type, props, children };
};

// virtual DOM implementation

/**
 * create a new node
 * @param node virtual dom node representation
 */
const createElement = node => {
  if (!node) {
    // handle falsy nodes
    return;
  }
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  // bind appendChild to the parent element
  node.children.map(createElement).forEach(el.appendChild.bind(el));
  return el;
};

/**
 * handle diff for a node on the virtual dom
 * @param parent parent DOM element
 * @param newNode new child virtual dom node
 * @param oldNode old child virtual dom node
 * @param index index of child element, for O(1) access
 *
 */
const updateElement = (
  parent,
  newNode,
  oldNode,
  index = 0 /* index of child */,
) => {
  if (newNode && !oldNode) {
    // there is a new node and no old node, create the new node
    parent.appendChild(createElement(newNode));
  } else if (!newNode && oldNode) {
    // there is no new node but there was an old node, remove the old node from the DOM
    parent.removeChild(parent.childNodes[index]);
  } else if (changed(newNode, oldNode)) {
    // the two nodes exist but are different, replace the old node
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  } else if (newNode.type) {
    // the node is not a text node and therefore has children
    // DFS through children to update
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    let maxLen = Math.max(newLength, oldLength);
    for (let i = 0; i < maxLen; i++) {
      updateElement(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i,
      );
    }
  }
};

/**
 * determine whether nodes should be diffed
 * @param node1 virtual dom node
 * @param node2 virtual dom node
 */
const changed = (node1, node2) => {
  return (
    typeof node1 !== typeof node2 ||
    (typeof node1 === 'string' && node1 !== node2) ||
    node1.type !== node2.type
  );
};

// const a = (
//   <ul class="list">
//     <li>item 1</li>
//     <li>item 2</li>
//   </ul>
// );
//
// const b = (
//   <ul class="list">
//     <li>item 21</li>
//     <li>item 2</li>
//   </ul>
// );
//
// const $root = document.getElementById('root');
// const $reload = document.getElementById('reload');
//
// updateElement($root, a);
// $reload.addEventListener('click', () => {
//   updateElement($root, b, a);
// });
