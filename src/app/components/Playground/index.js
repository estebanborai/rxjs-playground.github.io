import React from 'react';
import './playground.scss';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import RxJSPlayground from '../../lib/RxJSPlaygroud';
//Temporal
import Editor from '../Editor/JavaScript';
import HTMLPane from '../Editor/HTML';
import ConsoleOutput from '../Console';
import Output from '../Output';

class Playground extends React.Component{
  static propTypes = {
    editorTab: PropTypes.string.isRequired
  };

  static contextTypes = {
    router : PropTypes.any
  }
  static childContextTypes = {
    setSource : PropTypes.func,
    setHtml : PropTypes.func,
    source : PropTypes.string,
    output : PropTypes.string,
    html : PropTypes.string,
  }

  constructor(props){
    super(props);
    const { js } = queryString.parse(props.location.search);
    this.rxjsp = new RxJSPlayground();
    this.state = {
      output : this.rxjsp.compile(js),
      show : true,
      tab : 0 ,
      isRunning : false
    }
  }

  componentWillReceiveProps(newProps){
    const { js : nJs } = queryString.parse(newProps.location.search);
    const { js } = queryString.parse(this.props.location.search);
    if(js !== nJs){
      const output = this.rxjsp.compile(nJs);
      this.setState({ output });
    }
  }

  getChildContext(){
    const { html,js } = queryString.parse(this.props.location.search);

    return {
      setSource : this.setSource,
      source : js,
      output : this.state.output,
      html : html,
      setHtml : this.setHtml,
    }
  }

  get editorPanel() {
    const editor = this.props.editorTab;
    if (editor === 'javascript') {
      return <Editor />;
    } else if (editor === 'html') {
      return <HTMLPane />;
    } else {
      return <h1>Undefined Tab "{editor}"</h1>;
    }
  }

  setSource = js => {
    const {html} = queryString.parse(this.props.location.search);
    this.transition({
      js,
      html
    })
  };
  setHtml = html => {
    const {js} = queryString.parse(this.props.location.search);
    this.transition({html, js});
  }

  transition = ({html, js}) =>{
    this.context.router.history.push(`/?${queryString.stringify({
      html,
      js
    })}`)
  }

  clearConsole = () =>  this.consoleRef.clear();

  run = () => {
    if(this.state.isRunning){
      return;
    }
    this.setState((state)=>{
      return {
        isRunning : true
      }
    }, () => {
      this.clearConsole();
      this.outputRef.run();
    });
  }

  stop = () => {
    return new Promise((resolve)=>{
      this.setState(()=>{
        return {
          show : false,
          isRunning : false
        }
      });
      setTimeout(()=>{
        this.setState(()=>{
          return {
            show : true,

          }
        },() => resolve());

      },100)
    })
  }

  toggleSource = () => {
    this.setState(({tab}) => {
      return {
         tab : Number(!Number(tab))
      }
    });
  }

  render(){
    const {show, tab} = this.state;
    const { editorTab, outputTab } = this.props;
    if(!show){
      return null;
    }
    return (
      <section className="playground">
        <div className="playground-column">
          <div className="playground-row">
            {this.editorPanel}
          </div>
        </div>
        <div className="playground-column">
          <p>
            <button id="run-button" onClick={this.run}>Run</button> 
            <button id="clear-button" onClick={this.clearConsole}>Clear</button> 
            <button id="stop-button" onClick={this.stop}>Stop</button></p>
          <div className="playground-outputs">
            <div className="playground-column">
              <ConsoleOutput ref={n => this.consoleRef = n}/>
            </div>
            <div className="playground-column">
              <Output ref={n => this.outputRef = n}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Playground;
