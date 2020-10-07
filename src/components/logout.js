import React, { Component } from 'react';
import { withRouter } from 'react-router';
import User from '../classes/user';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await User.logout();
  }
  render() {
    return(
      <h3>ログアウトしました</h3>
    )
  }
}

export default withRouter(Logout);