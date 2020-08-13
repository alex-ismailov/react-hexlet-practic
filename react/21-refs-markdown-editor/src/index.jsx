/* eslint-disable no-console */

import 'bootstrap-markdown/js/bootstrap-markdown';
import 'bootstrap-markdown/css/bootstrap-markdown.min.css';

import ReactDOM from 'react-dom';
import React from 'react';

import MarkdownEditor from './MarkdownEditor.jsx';

ReactDOM.render(
  <MarkdownEditor onContentChange={console.log} />,
  document.getElementById('container'),
);
