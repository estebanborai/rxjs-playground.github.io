import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import EditorTools from './EditorTools';
import OutputTools from './OutputTools';

class Nav extends React.Component {
  static propTypes = {
    editorTab: PropTypes.string.isRequired,
    outputTab: PropTypes.string.isRequired
  };

  setEditorTab = tab => {
    this.props.setEditorTab(tab);
  }

  render() {
    const { editorTab, outputTab } = this.props;
    return (
      <nav className="app-nav">
        <EditorTools editorTab={editorTab} onChangeTab={this.setEditorTab} />
        <OutputTools outputTab={outputTab} />
      </nav>
    );
  }
}

export default Nav;
