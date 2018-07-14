import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tab from '../../components/Editor/Tab/Tab';
import { changeTab } from '../../actions/editor';

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onChangeTab: changeTab
  }, dispatch);

export default connect(null, mapDispatchToProps)(Tab);
