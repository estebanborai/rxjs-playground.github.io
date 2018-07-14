import { connect } from 'react-redux';
import Editor from '../../components/Editor';

const mapStateToProps = state => ({
  activeTab: state.editor.activeTab
});

export default connect(mapStateToProps)(Editor);
