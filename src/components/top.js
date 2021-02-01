import React, { Component } from 'react';
import axios from 'axios';
import {Container, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogSummary from './blog_summary.js';
const config = require('../config')
const url = config.backend_url;


export default class Blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: [], current_page: 0};
  }

  componentDidMount() {
    axios.get(url + '/blogs')
      .then(response => {
        console.log(response.data);
        this.setState({ blogs: response.data.blogs });
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  Blogs() {
    console.log(this.state.blogs);
    let blog5 = this.state.blogs.slice(this.state.current_page,this.state.current_page+5);
    return blog5.map(function(currentBlog, i){
      return <BlogSummary blog={currentBlog} key={i} />;
    })
  }

  paging(num) {
    this.setState({ current_page: num});
  }

  render() {
    return (
      <div >
        <div>
          {this.Blogs()}
        </div>
        {this.state.current_page ? (<Button className="default" onClick={() => this.paging(this.state.current_page-config.page_per_article)}>前の5件を表示</Button>) : (<br />)}
        <Button className="default" onClick={() => this.paging(this.state.current_page+config.page_per_article)}>次の5件を表示</Button>
      </div>
    )
  }
}