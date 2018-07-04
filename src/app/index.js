import React ,{ Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Playground, { Try } from './core';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NotFound404 from './lib/NotFound404';

export default class App extends Component{
  renderChildren(){
    return (
      <main>
        <Header />
        <Nav />
        <div>
          <div id="main">
            <Switch>
              <Route exact path="/" component={Playground}/>
              <Route exact path="/try" component={Try}/>
              <Route component={ NotFound404 } />
            </Switch>
          </div>
        </div>
      </main>
    );
  }
  render(){
    return(
      <Router>
        <div id="app">
          {this.renderChildren()}
        </div>
      </Router>
    );
  }
}

module.hot.accept();
