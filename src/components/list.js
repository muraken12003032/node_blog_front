import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const config = require('../config')
const url = config.backend_url + ':' + config.port;

const Blog = props => (
  <tr>
    <td>{props.blog.title}</td>
    <td>{props.blog.description}</td>
    <td>{props.blog.content}</td>
    <td>
      <Link to={"/edit/"+props.blog._id}>Edit</Link>
    </td>
  </tr>
)

export default class Blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
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
      <div>
        <h3>ブログ一覧</h3>
        <table className="table table-striped" style={{ merginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            { this.Blogs() }
          </tbody>
        </table>
      </div>
    )
  }
}