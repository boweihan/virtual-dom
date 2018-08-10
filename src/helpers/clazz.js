// @flow

import type { Node } from '../types/types';

// prettier-ignore
const clazz = (type: string, props: Object, ...children: Array<Node | string>): Node => { // eslint-disable-line
  return { type, props: props || {}, children };
};

export default clazz;
