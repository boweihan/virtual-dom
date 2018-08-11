// @flow

import BroadcastingVirtualDom from './vdom/BroadcastingVirtualDom';
import tree1 from './samples/tree1';
import tree2 from './samples/tree2';

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import 'brace';
import AceEditor from 'react-ace'; // eslint-disable-line

import 'brace/mode/html';
import 'brace/theme/github';

const editor1elem = document.getElementById('editor1');
const editor2elem = document.getElementById('editor2');

let firstEditorState, secondEditorState;

const onChangeFirst = newValue => {
  firstEditorState = newValue;
};

const onChangeSecond = newValue => {
  secondEditorState = newValue;
};

if (editor1elem && editor2elem) {
  render(
    <AceEditor
      mode="html"
      theme="github"
      onChange={onChangeFirst}
      height="100%"
      width="100%"
      name="editor1"
      editorProps={{ $blockScrolling: true, tabSize: 2 }}
      value="<ul style=&quot;list-style: none;&quot;>&#13;  <li className=&quot;item&quot; onClick={func}>&#13;    <span>this span will be deleted</span>&#13;    item 1&#13;  </li>&#13;  <li className=&quot;item&quot;>&#13;    <input type=&quot;checkbox&quot; checked={true} />&#13;    <input type=&quot;text&quot; onInput={Logger.logEvent} />&#13;  </li>&#13;  <li forceUpdate={true}>text</li>&#13;</ul>"
    />,
    editor1elem,
  );

  render(
    <AceEditor
      mode="html"
      theme="terminal"
      onChange={onChangeSecond}
      height="100%"
      width="100%"
      name="editor2"
      editorProps={{ $blockScrolling: true, tabSize: 2 }}
      value="<ul style=&quot;list-style: inherit;&quot;>&#13;  <li className=&quot;item item2&quot; onClick={func}>&#13;    item 1 and item 2&#13;  </li>&#13;  <li className=&quot;item&quot;>&#13;    <input type=&quot;checkbox&quot; checked={false} />&#13;    <input type=&quot;text&quot; onInput={Logger.logEvent} />&#13;  </li>&#13;  <li forceUpdate={true}>text</li>&#13;  <div>random added div</div>&#13;</ul>"
    />,
    editor2elem,
  );
}

const vDom = new BroadcastingVirtualDom();
const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

if ($root) {
  let elem = vDom.createElement(tree1);
  console.log(vDom.getSteps());
  if (elem) {
    $root.appendChild(elem);
  }
  if ($reload) {
    $reload.addEventListener('click', () => {
      vDom.updateElement($root, tree2, tree1);
      console.log(vDom.getSteps());
    });
  }
}
