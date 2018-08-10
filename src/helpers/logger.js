export default class Logger {
  static logEvent = e => {
    console.log(e.target.value); // eslint-disable-line
  };
}
