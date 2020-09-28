import React, { Component } from 'react';
import axios from 'axios';
const config = require('../config');
const url = config.backend_url + ':' + config.port;
import Form from './list';

export default class NewBlog extends Component {
  render() {
    <Form />
  }
}

/*
export default class NewBlog extends Component {

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeUpdatedAt = this.onChangeUpdatedAt.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePictureId = this.onChangePictureId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      content: '',
      created_at: '',
      updated_at: '',
      description: '',
      picture_id: '',
      status: false
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onChangeCreatedAt(e) {
    this.setState({
      created_at: e.target.value
    });
  }

  onChangeUpdatedAt(e) {
    this.setState({
      updated_at: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePictureId(e) {
    this.setState({
      picture_id: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    //Debug
    console.log(`Form submitted:`);
    console.log(`Title: ${this.state.title}`);
    console.log(`Content: ${this.state.content}`);

    const newBlog = {
      title: this.state.title,
      content: this.state.content,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at,
      description: this.state.description,
      picture_id: this.state.picture_id,
      status: this.state.status
    }

    axios.post(url + '/blogs/add', newBlog)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      content: '',
      created_at: '',
      updated_at: '',
      description: '',
      picture_id: '',
      status: false
    })
  }


  render() {
    return (
      <div style={{merginTop: 10}}>
        <h3>新規記事作成</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <input type="textarea" className="form-control" value={this.state.content} onChange={this.onChangeContent} />
          </div>
          <div className="form-group">
            <input type="submit" value="記事投稿" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
*/