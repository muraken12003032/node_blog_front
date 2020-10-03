import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
const config = require('../config');
const url = config.backend_url + ':' + config.port;

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
      <div>
        <h2>{this.state.blog.title}</h2>
        <h3>{this.state.blog.description}</h3>
        <p>{this.state.blog.content}</p>
      </div>
    );
  }
}