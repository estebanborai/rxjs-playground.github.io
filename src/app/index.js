import React from 'react';
import Header from './components/Header';
import Nav from './containers/Nav';
import Playground from './containers/Playground';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NotFound404 from './lib/NotFound404';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <div id="app">
          <main>
            <Header />
            <Nav />
            <div>
              <div>
                <Switch>
                  <Route exact path="/" component={ Playground } />
                  <Route component={ NotFound404 } />
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

module.hot.accept();
