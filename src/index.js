// JSX pragma specifics Babel transpilation to either
// React.createElement() or h()
/** @jsx h */

/** custom implementation of h()
 * set props to empty object if there are no attributes
 */
// prettier-ignore
const h = (type, props, ...children) => { // eslint-disable-line
  return { type, props: props || {}, children };
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
  const $el = document.createElement(node.type);

  // set props
  setProps($el, node.props);

  // bind appendChild to the parent element
  node.children.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
};

/**
 * handle diff for a node on the virtual dom
 * @param $parent parent DOM element
 * @param newNode new child virtual dom node
 * @param oldNode old child virtual dom node
 * @param index index of child element, for O(1) access
 *
 */
const updateElement = (
  $parent,
  newNode,
  oldNode,
  index = 0 /* index of child */,
) => {
  if (newNode && !oldNode) {
    // there is a new node and no old node, create the new node
    $parent.appendChild(createElement(newNode));
  } else if (!newNode && oldNode) {
    // there is no new node but there was an old node, remove the old node from the DOM
    $parent.removeChild($parent.childNodes[index]);
  } else if (changed(newNode, oldNode)) {
    // the two nodes exist but are different, replace the old node
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
  } else if (newNode.type) {
    // node types haven't changed, update the props
    updateProps($parent.childNodes[index], oldNode.props, newNode.props);
    // the node is not a text node and therefore has children
    // DFS through children to update
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    let maxLen = Math.max(newLength, oldLength);
    for (let i = 0; i < maxLen; i++) {
      updateElement(
        $parent.childNodes[index],
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

/**
 * wrapper around setAttribute
 * @param $target target DOM element
 * @param name prop name
 * @param value prop value
 */
const setProp = ($target, name, value) => {
  if (isCustomProp(name)) {
    return;
  } else if (name === 'className') {
    $target.setAttribute('class', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp($target, name, value);
  } else {
    $target.setAttribute(name, value);
  }
};

/**
 * helper for setting props
 * @param $target target DOM element
 * @param props list of props for target element
 */
const setProps = ($target, props) => {
  Object.keys(props).forEach(name => {
    setProp($target, name, props[name]);
  });
};

/**
 * helper for setting boolean props
 * @param $target target DOM element
 * @param name name of prop
 * @param value boolean value of prop
 */
const setBooleanProp = ($target, name, value) => {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;
  } else {
    $target[name] = false;
  }
};

/**
 * remove a prop
 * @param $target target DOM element
 * @param name name of prop
 * @param value boolean value of prop
 */
const removeProp = ($target, name, value) => {
  if (isCustomProp(name)) {
    return;
  } else if (name === 'className') {
    $target.removeAttribute('class');
  } else if (typeof value === 'boolean') {
    removeBooleanProp($target, name);
  } else {
    $target.removeAttribute(name);
  }
};

/**
 * helper for removing boolean prop
 * @param $target target DOM element
 * @param name name of prop
 */
const removeBooleanProp = ($target, name) => {
  $target.removeAttribute(name);
  $target[name] = false;
};

/**
 * update a single prop on an element
 * cases:
 * 1) no newVal
 * 2) no oldVal
 * 3) newVal and oldVal are different
 * 4) newVal and oldVal are the same
 * @param $target target DOM element
 * @param name prop name
 * @param oldVal old prop value
 * @param newVal new prop value
 */
const updateProp = ($target, name, oldVal, newVal) => {
  if (!newVal) {
    removeProp($target, name, oldVal);
  } else if (!oldVal || oldVal !== newVal) {
    setProp($target, name, newVal);
  }
};

/**
 * update all props on an element
 * @param $target target DOM element
 * @param newProps
 * @param oldProps
 */
const updateProps = ($target, newProps, oldProps = {}) => {
  const props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach(name => {
    updateProp($target, name, newProps[name], oldProps[name]);
  });
};

/**
 *  check if prop is a custom prop
 * @param name name of prop
 */
const isCustomProp = name => {
  return false;
};

//---------------------------------------------------------

const f = (
  <ul style="list-style: none;">
    <li className="item">item 1</li>
    <li className="item">
      <input type="checkbox" checked={true} />
      <input type="text" disabled={false} />
    </li>
  </ul>
);

const g = (
  <ul style="list-style: none;">
    <li className="item item2">item 1</li>
    <li style="background: red;">
      <input type="checkbox" checked={false} />
      <input type="text" disabled={true} />
    </li>
  </ul>
);

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

updateElement($root, f);
$reload.addEventListener('click', () => {
  updateElement($root, g, f);
});
