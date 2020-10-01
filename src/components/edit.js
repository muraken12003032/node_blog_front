import React, { Component } from 'react';
import Form from './form';
const config = require('../config');
const url = config.backend_url + ':' + config.port;

export default class EditBlog extends Component {

  render() {
    const uri = '/blogs/update/' + this.props.match.params.id;
    return(
      <div>
        <Form type="update" page_title="記事編集" submit_value="更新"  uri={uri} id={this.props.match.params.id} />
      </div>
    );
  }
}
