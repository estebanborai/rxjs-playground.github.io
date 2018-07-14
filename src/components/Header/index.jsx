import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        ReactiveX JavaScript Playground
        <Link to={'/'}>Playground</Link>
        <Link to={'/learn'}>Learn</Link>
      </header>
    );
  }
}

export default Header;
