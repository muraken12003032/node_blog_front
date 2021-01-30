import React,{ Component } from 'react';
//import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default class Images extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = data => {
    this.props.history.push('/');
  }

  render(){
    return(
    <div>
      <h2>画像を管理するページ</h2>
      <Form onSubmit={this.onSubmit}>
        <input type="file" name="画像をアップロードする"></input>
        <br />
        <Button type="submit">送信</Button>
      </Form>
    </div>
    )
  }
}