import React from 'react';
import './toolbox.scss';
import { Tab, Tabs } from '../Tab';

class ToolBox extends React.Component {
  render() {
    return (
      <div className="toolbox">
        <Tabs>
          <Tab name="Test.js" color="#990011" active />
        </Tabs>
      </div>
    );
  }
}

export default ToolBox;
