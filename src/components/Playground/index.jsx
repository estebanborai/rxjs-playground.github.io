import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../../containers/Editor';

class Playground extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { location, history } = this.props;
    return (
      <Editor location={location} history={history} />
    );
  }
}

export default Playground;
