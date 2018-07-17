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
  }

  get output() {
    if (this.props.console.length >= 1) {
      return this.props.console.map((log, i) => <LogTile key={i}>{log}</LogTile>);
    } else {
      return <LogTile>Console is empty</LogTile>;
    }
  }

  componentDidMount() {
    this.console$.subscribe(e =>  {
      console.log(e);
      // console.log.apply(console.log, e.detail.args); // eslint-disable-line
      // this.log(JSON.stringify(e.detail.args.join(' '), null, 2));
    });
  }

  componentWillUnmount() {
    this.console$.unsubscribe();
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
