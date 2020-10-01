import React, { Component } from 'react';
import Form from './form';

export default class NewBlog extends Component {
  render() {
    return(
      <div>
        <Form type="new" page_title="新規作成" submit_value="記事投稿" uri="/blogs/add"/>
      </div>
    )
  }
}