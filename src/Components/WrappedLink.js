import { Button } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class WrappedLink extends Component {
  render() {
    return (
      <Link to={{ pathname: '/Issue/' + this.props.index, state: {title : this.props.issueTitle, text : this.props.issueDesc} }}>
          <Button>
            See Issue
          </Button>
      </Link>
    )
  }
}

export default WrappedLink;