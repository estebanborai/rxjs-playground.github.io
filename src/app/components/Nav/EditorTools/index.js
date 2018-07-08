import React from 'react';
import PropTypes from 'prop-types';
import '../nav.scss';
import { Tabs, Tab } from '../Tab';

class EditorTools extends React.Component {
  static propTypes = {
    editorTab: PropTypes.string.isRequired,
    onChangeTab: PropTypes.func.isRequired
  };

  render() {
    const { editorTab } = this.props;
    return (
      <div className="editor-section">
        <Tabs>
          <Tab name="JavaScript" active={editorTab === 'javascript'} onChangeTab={this.props.onChangeTab} />
          <Tab name="HTML" active={editorTab === 'html'} onChangeTab={this.props.onChangeTab} />
        </Tabs>
      </div>
    );
  }
}

export default EditorTools;
