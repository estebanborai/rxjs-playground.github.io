import React from 'react';
import './tab.scss';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onChangeTab: PropTypes.func.isRequired
  };

  changeTab = () => {
    this.props.onChangeTab(this.props.name.toLowerCase());
  }

  render() {
    const { name, active } = this.props;
    return (
      <li className={active ? 'tab active' : 'tab'} onClick={this.changeTab} >
        {name}
      </li>
    );
  }
}

export default Tab;
