/** custom implementation of h()
 * set props to empty object if there are no attributes
 */
// prettier-ignore
const clazz = (type, props, ...children) => { // eslint-disable-line
  return { type, props: props || {}, children };
};

export default clazz;
