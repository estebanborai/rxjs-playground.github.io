import React from 'react';
import './editor.scss';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { compile } from '../../lib/RxJSPlayground';
import ToolBox from './ToolBox';
import { JSEditor, HTMLEditor } from './panels';
import Console from '../Console';

class Editor extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const { html, js } = queryString.parse(props.location.search);

    this.state = {
      running: false,
      output: undefined
    };
  }

  get activeTab() {
    return this.props.activeTab;
  }

  get javaScript() {
    const { js } = queryString.parse(this.props.location.search);
    return js;
  }

  get Html() {
    const { html } = queryString.parse(this.props.location.search);
    return html;
  }

  get panel() {
    if (this.activeTab === 'index.js') {
      return <JSEditor onSetSource={::this.setJavaScript} sessionCode={this.javaScript} />;
    } else if (this.activeTab === 'index.html') {
      return <HTMLEditor onSetSource={::this.setHtml} sessionCode={this.Html} />;
    } else {
      return null;
    }
  }

  transition = ({ js, html }) => {
    this.props.history.push(`/?${queryString.stringify({
      html,
      js
    })}`);
  }

  setJavaScript = js => {
    const { html } = queryString.parse(this.props.location.search);
    this.transition({ js, html });
  }

  setHtml = html => {
    const { js } = queryString.parse(this.props.location.search);
    this.transition({ js, html });
  }

  clearConsole = () => {
    return;
  };

  run = () => {
    this.setState({ running: true }, () => {
      this.clearConsole();
    });
  }

  stop = () => {
    this.setState({
      running: false
    });
  }

  componentWillReceiveProps(next) {
    const { js: newJs } = queryString.parse(next.location.search);
    const { js: oldJs } = queryString.parse(this.props.location.search);

    if (oldJs !== newJs) {
      const output = compile(newJs);
      this.setState({
        output
      });
    }
  }

  render() {
    const { state, props } = this;
    return (
      <section className="rxjs-editor">
        <ToolBox
          activeTab={this.activeTab}
          onRun={::this.run}
          onStop={::this.stop}
          onClear={::this.clearConsole}
        />
        <main>
          <div className="editor-panel">{this.panel}</div>
          <div className="output-panel"><Console source={this.javaScript} /></div>
        </main>
      </section>
    );
  }
}

export default Editor;
