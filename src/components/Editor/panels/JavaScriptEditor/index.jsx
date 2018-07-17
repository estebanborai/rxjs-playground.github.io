import React from 'react';
import PropTypes from 'prop-types';
import './javaScriptEditor.scss';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

const options = {
  mode: {
    name: 'javascript',
    json: true,
    globalVars: true
  },
  readOnly: false,
  theme: 'material',
  lineNumbers: true,
  autoCloseBrackets: true,
  fontSize: '1rem',
  extraKeys: {
    'Tab': 'autocomplete'
  }
}
class JavaScriptEditor extends React.Component {
  static propTypes = {
    sessionCode: PropTypes.string,
    consoleOutput: PropTypes.arrayOf(PropTypes.string)
  };

  updateCode(input) {
    this.props.onSetSource(input);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <CodeMirror
        value={this.props.sessionCode}
        onChange={::this.updateCode}
        options={options}
        autoFocus
      />
    );
  }
}

export default JavaScriptEditor;
