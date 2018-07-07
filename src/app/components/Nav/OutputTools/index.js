import React from 'react';
import './outputTools.scss';
import { Tab, Tabs } from '../Tab';
import FontAwesome from 'react-fontawesome';

class OutputTools extends React.Component {
  render() {
    return (
      <div className="output-tools">
        <Tabs>
          <Tab name="Console" active />
          <Tab name="Output" />
        </Tabs>
        <div className="controls-set">
          <button className="play-button" onClick={() => console.log('Play')}>
            <FontAwesome name="play" size="lg" />
          </button>
          <button className="clear-button" onClick={() => console.log('Clear')}>
            <FontAwesome name="repeat" size="lg" />
          </button>
          <button className="stop-button" onClick={() => console.log('Stop')}>
            <FontAwesome name="stop" size="lg" />
          </button>
        </div>
        <button style={{ color: 'white' }}>
          <FontAwesome name="bars" size="lg" />
        </button>
      </div>
    );
  }
}

export default OutputTools;
