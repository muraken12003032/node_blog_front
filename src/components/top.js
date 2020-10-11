import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
const config = require('../config')
const url = config.backend_url + ':' + config.port;

const Blog = props => (
  <tr>
    <td>
      <Link to={"/blogs/"+props.blog._id}>{props.blog.title}</Link>
    </td>
    <td>{props.blog.description}</td>
    <td>{props.blog.content}</td>
  </tr>
)

export default class Blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get(url + '/blogs')
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  Blogs() {
    return this.state.blogs.map(function(currentBlog, i){
      return <Blog blog={currentBlog} key={i} />;
    })
  }

  render() {
    return (
      <Container className="container-fluid">
        <div className="col-xs-12 col-sm-9 col-md-9">
          { this.Blogs() }
        </div>
      </Container>
    )
  }
}