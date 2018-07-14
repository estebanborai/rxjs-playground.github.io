import React from 'react';
import './tab.scss';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onChangeTab: PropTypes.func.isRequired
  };

  get active() {
    if (this.props.activeTab === this.props.name.toLowerCase()) {
      return true;
    }
    return false;
  }

  changeTab = () => {
    this.props.onChangeTab(this.props.name.toLowerCase());
  }

  render() {
    const { name, icon } = this.props;
    return (
      <li className={this.active ? 'tab active' : 'tab'} onClick={this.changeTab} >
        {
          icon ? icon : null
        }
        {name}
      </li>
    );
  }
}

export default Tab;
