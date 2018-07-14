import React from 'react';
import './app.scss';
import Header from '../Header';
import Editor from '../Editor';

class App extends React.Component {
  render() {
    return  (
      <div className="app-main">
        <Header />
        <main>
          <Editor />
        </main>
      </div>
    );
  }
}

export default App;
