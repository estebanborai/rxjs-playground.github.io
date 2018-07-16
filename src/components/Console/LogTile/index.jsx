import React from 'react';
import './logTile.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
      logStyle.background = '#5d1111';
      return logStyle;
    }

    return logStyle;
  }

  get icon() {
    if (this.props.type === 'error') {
      return <FontAwesomeIcon icon={faTimesCircle} size="lg" color="#ffffff" />
    } else {
      return null;
    }
  }

  render() {
    const { children } = this.props;
    return (
      <li className="log-tile" style={this.style}>
        {this.icon}
        <span className="log-text">{children}</span>
      </li>
    );
  }
}

export default LogTile;
