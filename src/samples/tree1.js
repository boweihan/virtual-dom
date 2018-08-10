/** @jsx clazz */
import clazz from '../helpers/clazz'; // eslint-disable-line
import Logger from '../helpers/logger';

const tree1 = (
  <ul style="list-style: none;">
    <li className="item" onClick={() => alert('hi!')}>
      item 1
    </li>
    <li className="item">
      <input type="checkbox" checked={true} />
      <input type="text" onInput={Logger.logEvent} />
    </li>
    <li forceUpdate={true}>text</li>
  </ul>
);

export default tree1;
