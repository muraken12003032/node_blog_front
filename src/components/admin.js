import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
const config = require('../config');
const url = config.backend_url;

const isPublished = (status) => {
  if(status){
    return("公開中");
  }else{
    return("下書き");
  }
}

const Blog = props => (
  <tr>
    <td>
      <Link to={"/blogs/"+props.blog._id}>{props.blog.title}</Link>
    </td>
    <td>{isPublished(props.blog.status)}</td>
    <td>
      <Link to={"/adminpage/edit/"+props.blog._id}>Edit</Link>
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
                <th>status</th>
                <th>Edit</th>
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