import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
          </div>
          <div className="form-group">
            <input type="submit" value={this.props.submit_value} className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}