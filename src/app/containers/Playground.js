import Playground from '../components/Playground';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  editorTab: state.editor.tab,
  outputTab: state.output.tab
});

export default connect(mapStateToProps)(Playground);
