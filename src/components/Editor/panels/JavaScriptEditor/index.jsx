import React from 'react';
import './javaScriptEditor.scss';
import queryString from 'query-string';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

class JavaScriptEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: this.props.sessionCode || 'console.log("Welcome to RXJS!");'
    };

    this.options = {
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
    };
    this.subscription = undefined;
  }

  updateCode(input) {
    this.props.onSetSource(input);
    this.setState({
      source: input
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <CodeMirror
        value={this.state.source}
        onChange={::this.updateCode}
        options={this.options}
        autoFocus
      />
    );
  }
}

export default JavaScriptEditor;
