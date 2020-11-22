import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const config = require('../config')
const url = config.backend_url + ':' + config.port;

const Blog = props => (
  <Row>
    <div className="col-xs-12 col-lg-12">
      <Row>
        <div className="col-xs-12 col-lg-12">
          <h2>
              <Link to={"/blogs/"+props.blog._id}>{props.blog.title}</Link>
          </h2>
        </div>
      </Row>
      <Row>
        <div className="col-xs-12 col-lg-12">
          {props.blog.created_at ? props.blog.created_at : "1970-1-1 09:00:00" }
        </div>
      </Row>
      <Row>
        <div className="col-xs-12 col-lg-12">
          <p>
            {props.blog.content.slice(0,30)}...
          </p>
        </div>
      </Row>
    </div>
  </Row>
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