import React from 'react';
import './Tab.scss';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  render() {
    const { name, active } = this.props;
    return (
      <li className={active ? 'tab active' : 'tab'}>
        {name}
      </li>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default Tab;
