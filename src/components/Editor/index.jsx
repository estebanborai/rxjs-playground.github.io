import React from 'react';
import PropTypes from 'prop-types';
import ToolBox from './ToolBox';

class Editor extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired
  };

  get activeTab() {
    return this.props.activeTab;
  }

  render() {
    return (
      <section className="rxjs-editor">
        <ToolBox activeTab={this.activeTab} />
      </section>
    );
  }
}

export default Editor;
