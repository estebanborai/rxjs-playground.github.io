import React from 'react';
import { Link } from 'react-router-dom';
import './notFound404.scss';

class NotFound404 extends React.Component {
  render() {
    return (
      <section className="not-found-404">
        <h1>Upps! Looks like you are lost!</h1>
        <p> Go back to <Link to={'/'}>Home</Link></p>
      </section>
    );
  }
}

export default NotFound404;
