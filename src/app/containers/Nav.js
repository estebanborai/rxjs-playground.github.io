import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeEditorTab } from '../actions/nav';

const mapStateToProps = state => ({
  editorTab: state.editor.tab,
  outputTab: state.output.tab
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  setEditorTab: changeEditorTab
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
