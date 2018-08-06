// JSX pragma specifics Babel transpilation to either
// React.createElement() or h()
/** @jsx h */

// Custom implementation of h()
function h(type, props, ...children) {
  return { type, props, children };
}

// Virtual DOM implementation

// Creates the root node
function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  node.children.map(createElement).forEach(
    // bind appendChild to the parent element
    el.appendChild.bind(el),
  );
  return el;
}

// sample DOM tree
const a = (
  <ul class="list">
    <li>item 1</li>
    <li>item 2</li>
  </ul>
);

console.log(a);
