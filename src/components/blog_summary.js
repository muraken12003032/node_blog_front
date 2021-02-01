import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
//const config = require('../config')

export default class BlogSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row>
        <div className="col-xs-12 col-lg-12">
          <Row>
            <div className="col-xs-12 col-lg-12">
              <h2>
                  <Link to={"/blogs/"+this.props.blog.id}>{this.props.blog.title}</Link>
              </h2>
            </div>
          </Row>
          <Row>
            <div className="col-xs-12 col-lg-12">
              {this.props.blog.created_at ? this.props.blog.created_at : "1970-1-1 09:00:00" }
            </div>
          </Row>
          <Row>
            <div className="col-xs-12 col-lg-12">
              <p>
                {this.props.blog.content.slice(0,30)}...
              </p>
            </div>
          </Row>
        </div>
      </Row>
    )
  }
}