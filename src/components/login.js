import React, { Component } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import User from '../classes/user';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errMessage: ''
    }
  }

  click = async() => {
    if(await User.login(this.state.email, this.state.password)){
      this.props.history.push({ pathname: 'adminpage' });
    }else{
      this.setState({ errMessage: 'メールアドレスかパスワードが違います' });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return(
      <Container className="center">
        <Row className="justify-content-md-center">
          <Form>
            {this.state.errMessage && (
              <Alert variant="danger">{this.state.errMessage}</Alert>
            )}
            <h3>ログイン</h3>
            <Form.Group controlId="email">
              <Form.Label>email: </Form.Label>
              <Form.Control type="email" placeholder="メールアドレス" onChange={this.handleChange} value={this.state.email} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="パスワードを入力してください" onChange={this.handleChange} value={this.state.password} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.click}>
              ログイン
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Login);