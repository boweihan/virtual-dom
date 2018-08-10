// @flow
/** @jsx clazz */

import clazz from '../helpers/clazz'; // eslint-disable-line
import Logger from '../helpers/logger';

const tree2 = (
  <ul style="list-style: none;">
    <li className="item item2" onClick={() => alert('hi!')}>
      item 1
    </li>
    <li style="background: red;">
      <input type="checkbox" checked={false} />
      <input type="text" onInput={Logger.logEvent} />
    </li>
    <li forceUpdate={true}>text</li>
  </ul>
);

export default tree2;
