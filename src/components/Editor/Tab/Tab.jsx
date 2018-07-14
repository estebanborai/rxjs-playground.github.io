import React from 'react';
import './tab.scss';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.string,
    onChangeTab: PropTypes.func.isRequired
  };

  changeTab = () => {
    this.props.onChangeTab(this.props.name.toLowerCase());
  }

  render() {
    const { name, active, icon, color } = this.props;
    return (
      <li className={active ? 'tab active' : 'tab'} onClick={this.changeTab} >
        {
          icon ? icon : null
        }
        {name}
      </li>
    );
  }
}

export default Tab;
