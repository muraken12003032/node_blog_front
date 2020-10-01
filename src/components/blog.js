import React, { Component } from 'react';
import { render } from 'react-dom';
const config = require('../config');
const url = config.backend_url + ':' + config.port;

export default class Blog extends Component {
  render() {
    return(
      <div>
        ここにブログ記事を表示
      </div>
    );
  }
}