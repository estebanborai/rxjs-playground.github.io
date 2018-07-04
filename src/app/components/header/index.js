import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="left-side">
          <img src="" alt="ReactiveX Logo" />
          <h1>ReactiveX JavaScript Playground</h1>
        </div>
        <div className="right-side">
          <a 
            className="github-button" 
            href="https://github.com/rxjs-playground/rxjs-playground.github.io" 
            data-icon="octicon-star" 
            data-style="mega" 
            data-count-href="/rxjs-playground/rxjs-playground.github.io/stargazers" 
            data-count-api="/repos/rxjs-playground/rxjs-playground.github.io#stargazers_count" 
            data-count-aria-label="# stargazers on GitHub" 
            aria-label="Star rxjs-playground/rxjs-playground.github.io on GitHub"
          >
            Star
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
