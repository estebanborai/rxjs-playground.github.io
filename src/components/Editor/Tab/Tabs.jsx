import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };
  render() {
    return (
      <ul className="tabs">
        { this.props.children }
      </ul>
    );
  }
}

export default Tabs;
