import React from 'react';
import { Link } from 'react-router-dom';

class NotFound404 extends React.Component {
  render() {
    return (
      <div>
        <h1> Not Found</h1>,
        <p> Go back to <Link to={'/'}>Home</Link></p>
      </div>
    );
  }
}

export default NotFound404;
