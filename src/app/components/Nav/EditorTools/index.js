import React from 'react';
import '../nav.scss';
import { Tabs, Tab } from '../Tab';

class EditorTools extends React.Component {
  render() {
    return (
      <div className="editor-section">
        <Tabs>
          <Tab name="index.js" active />
          <Tab name="index.html" />
        </Tabs>
      </div>
    );
  }
}

export default EditorTools;
