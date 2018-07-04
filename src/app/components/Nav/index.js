import React from 'react';
import Tab from './Tab';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="tabs">
          <Tab name="index.js" active />
          <Tab name="index.html" />
        </ul>
      </nav>
    );
  }
}

export default Nav;
