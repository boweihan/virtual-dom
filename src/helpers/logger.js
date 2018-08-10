// @flow

export default class Logger {
  static logEvent = (e: Object): void => {
    console.log(e.target.value); // eslint-disable-line
  };
}
