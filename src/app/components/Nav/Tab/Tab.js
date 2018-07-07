import React from 'react';
import './tab.scss';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool
  };

  render() {
    const { name, active } = this.props;
    return (
      <li className={active ? 'tab active' : 'tab'}>
        {name}
      </li>
    );
  }
}

export default Tab;
