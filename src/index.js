/** @jsx clazz */
import clazz from './clazz'; // eslint-disable-line
import VirtualDom from './vdom';

const log = e => {
  console.log(e.target.value); // eslint-disable-line
};

const f = (
  <ul style="list-style: none;">
    <li className="item" onClick={() => alert('hi!')}>
      item 1
    </li>
    <li className="item">
      <input type="checkbox" checked={true} />
      <input type="text" onInput={log} />
    </li>
    {/* this node will always be updated */}
    <li forceUpdate={true}>text</li>
  </ul>
);

const g = (
  <ul style="list-style: none;">
    <li className="item item2" onClick={() => alert('hi!')}>
      item 1
    </li>
    <li style="background: red;">
      <input type="checkbox" checked={false} />
      <input type="text" onInput={log} />
    </li>
    {/* this node will always be updated */}
    <li forceUpdate={true}>text</li>
  </ul>
);

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

VirtualDom.updateElement($root, f);
$reload.addEventListener('click', () => {
  VirtualDom.updateElement($root, g, f);
});
