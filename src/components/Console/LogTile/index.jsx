import React from 'react';
import './logTile.scss';
import PropTypes from 'prop-types';

class LogTile extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.any.isRequired
  };

  get style() {
    const { type } = this.props;
    let logStyle = {
      borderColor: '#333333',
      background: '#555555',
      color: '#ffffff'
    };

    if (type === 'error') {
      logStyle.borderColor = '#990011';
      logStyle.background = '#ff0000';
      return logStyle;
    }

    return logStyle;
  }

  render() {
    const { children } = this.props;
    return (
      <li className="log-tile" style={this.style}>
        {children}
      </li>
    );
  }
}

export default LogTile;
