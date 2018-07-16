import React from 'react';
import './htmlEditor.scss';
import {} from '../../../../lib/RxJSPlayground';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/theme/material.css');

class HTMLEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: this.props.sessionCode || ''
    };

    this.options = {
      mode: {
        name: 'htmlmixed',
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

export default HTMLEditor;
