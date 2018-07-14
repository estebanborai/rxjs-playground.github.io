import React from 'react';
import PropTypes from 'prop-types';
import './toolbox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faBars } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs } from '../Tab';

class ToolBox extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired
  };

  get activeTab() {
    return this.props.activeTab;
  }

  render() {
    return (
      <div className="toolbox">
        <Tabs className="tabs">
          <Tab name="index.js" activeTab={this.activeTab} />
          <Tab name="index.html" activeTab={this.activeTab} />
        </Tabs>
        <div className="tools">
          <button className="action-btn">
            <FontAwesomeIcon icon={faPlay} size="lg" color="#006633" />
          </button>
          <button className="action-btn">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>
    );
  }
}

export default ToolBox;
