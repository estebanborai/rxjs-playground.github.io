import React from 'react';
import './nav.scss';
import EditorTools from './EditorTools';
import OutputTools from './OutputTools';

class Nav extends React.Component {
  render() {
    return (
      <nav className="app-nav">
        <EditorTools />
        <OutputTools />
      </nav>
    );
  }
}

export default Nav;
