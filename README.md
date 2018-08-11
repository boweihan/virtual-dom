# virtual-dom

A lightweight virtual DOM implementation with visualizations.

<img src="./images/web.png" width="100%"/>

Virtual DOMs can facilitate more efficient manipulations of the real DOM and make
it convenient to expose lifecycle methods to component libraries (like ReactJS).

### Technology

* ES6 / ES7 with Babel transpilation
* Bundling with Webpack
* Flow
* ESLint

### Features

* Virtual DOM representation with the ability to make simple updates
* Managing props
* Handling events
* Step-handling Virtual DOM base class for visualizations
* Simple interactive UI for diffing JSX snippets

### Future

* Adding component life cycle to Virtual DOM
* Implementing O(ND) difference algorithm - http://www.xmailserver.org/diff2.pdf
