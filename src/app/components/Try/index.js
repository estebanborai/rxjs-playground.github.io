import React from 'react';

class Try extends React.Component{
  static contextTypes = {
    router : PropTypes.any
  }
  componentDidMount(){
    const {html,js} = queryString.parse(this.props.location.search);
    this.context.router.history.push(`/?${queryString.stringify({
      html,
      js
    })}`)
  }
  render(){
    return null;
  }
}

export default Try;
