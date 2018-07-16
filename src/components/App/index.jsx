import React from 'react';
import './app.scss';
import Header from '../Header';
import Playground from '../Playground';
import Learn from '../Learn';
import NotFound404 from './NotFound404';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { EVENTS } from '../../lib/RxJSPlayground';
import { Observable } from 'rxjs';

class App extends React.Component {
  componentDidMount() {
    Observable.fromEvent(document, EVENTS.CONSOLE_LOG).subscribe( x => console.log(x));
  }

  render() {
    return  (
      <Router>
        <div className="app-main">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Playground} />
              <Route exact path="/learn" component={Learn} />
              <Route component={NotFound404} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
