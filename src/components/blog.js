import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown/with-html';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import highlight from 'highlightjs';
import 'highlightjs/styles/docco.css';
const config = require('../config');
const url = config.backend_url + ':' + config.port;

const Title = props => (
  <Row>
    <div className="col-xs-12 col-lg-12">
      <h2>{props.title}</h2>
    </div>
  </Row>
)

const Content = props => (
  <Row>
    <div className="col-xs-12 col-lg-12">
      <ReactMarkDown source={props.content} escapeHtml={false} />
    </div>
  </Row>

)

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {blog: {}};
  }

  componentDidMount() {
    axios.get(url + this.props.match.url)
      .then(response => {
        this.setState({ blog: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    console.log(this.props);
    return(
      <Container className="container-fluid">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <Title title={this.state.blog.title} />
          <Content content={this.state.blog.content} />
        </div>
      </Container>
    );
  }
}
