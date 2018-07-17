import React from 'react';
import './editor.scss';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { compile, EVENTS } from '../../lib/RxJSPlayground';
import ToolBox from './ToolBox';
import { JSEditor, HTMLEditor } from './panels';
import Console from '../Console';
import Preview from '../Preview';

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
      compiledJS: '',
      currentOutput: 1,
      console: ['Hllo']
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
      return (
        <JSEditor
          onSetSource={::this.setJavaScript}
          sessionCode={this.javaScript}
          consoleOutput={this.state.console}
        />
      );
    } else if (this.activeTab === 'index.html') {
      return (
        <HTMLEditor
          onSetSource={::this.setHtml}
          sessionCode={this.Html}
        />
      );
    } else {
      return null;
    }
  }

  get results() {
    if (this.state.currentOutput === 0) {
      return <Preview ref={p => this.preview = p} />;
    } else {
      return <Console console={this.state.console} />;
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
    this.setState({
      console: []
    });
  };

  log = message => {
    const console =  [].concat(this.state.console, message);
    this.setState({ console });
  }

  update = () => {
    const frameDoc =  this.preview && this.preview.frameDoc;
    const frameWindow = this.preview && this.preview.frameWindow;
    frameDoc.body.innerHTML = (`
      <div id="core">
        ${this.Html}
      </div>
    `);
    const exp = (
      `
      var console = {
          log: function(){
              var event = new CustomEvent("${EVENTS.CONSOLE_LOG}", { detail : {
                args : Array.from(arguments)
              }});
              parent.window.document.dispatchEvent(event)
          }
      };
      ${this.javaScript}
      `);
    try {
      frameWindow.eval(exp)
    } catch (err) {
      document.dispatchEvent(new CustomEvent(EVENTS.CONSOLE_LOG ,{
        detail : {
          args : [err]
        }
      }));
    }
  }

  run = () => {
    this.setState({ running: true }, () => {
      this.clearConsole();
      this.update();
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
      const compiledJS = compile(newJs);
      this.setState({
        compiledJS
      });
    }
  }

  componentDidMount() {
    this.update();
  }

  render() {
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
          <div className="output-panel">{this.results}</div>
        </main>
      </section>
    );
  }
}

export default Editor;
