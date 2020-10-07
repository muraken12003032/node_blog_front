import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
const config = require('../config');
const url = config.backend_url + ':' + config.port;

const Blog = props => (
  <tr>
    <td>
      <Link to={"/blogs/"+props.blog._id}>{props.blog.title}</Link>
    </td>
    <td>{props.blog.description}</td>
    <td>{props.blog.content}</td>
    <td>
      <Link to={"/edit/"+props.blog._id}>Edit</Link>
    </td>
  </tr>
)

export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get(url + '/blogs')
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(function (error){
        console.log(error);
      })
  }

  Blogs() {
    return this.state.blogs.map(function(currentBlog, i){
      return <Blog blog={currentBlog} key={i} />;
    });
  }


  render() {
    return(
      <Container className="center">
        <Row className="justify-content-md-center">
          <h3>ブログ一覧</h3>
          <table className="table table-striped" style={{ merginTop: 20}}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Content</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              { this.Blogs() }
            </tbody>
          </table>
        </Row>
      </Container>
    )
  }
}