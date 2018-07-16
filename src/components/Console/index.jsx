import React from 'react';
import PropTypes from 'prop-types';
import './console.scss';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import { EVENTS } from '../../lib/RxJSPlayground';
import LogTile from './LogTile';

class Console extends React.Component {
  static propTypes = {
    source: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.console$ = new Observable.fromEvent(window, EVENTS.CONSOLE_LOG);

    this.state = {
      outputs: []
    };
  }

  get output() {
    if (this.state.outputs.length >= 1) {
      return this.state.outputs.map((log, i) => <LogTile key={i}>{log}</LogTile>);
    } else {
      return <LogTile>Console is empty</LogTile>;
    }
  }

  log(message) {
    const newState = {
      ...this.state,
      outputs: this.state.outputs.push(message)
    };
    this.setState(newState);
  }

  clear() {
    this.setState({
      outputs: []
    });
  }

  componentDidMount() {
    this.console$.subscribe(e =>  {
      console.log(e);
      console.log.apply(console.log, e.detail.args); // eslint-disable-line
      this.log(JSON.stringify(e.detail.args.join(' '), null, 2));
    });
  }

  render() {
    return (
      <ul className="console">
        { this.output }
      </ul>
    );
  }
}

export default Console;
