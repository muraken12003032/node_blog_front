import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  navbar = () => {
    return(
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
         <Link to="/" className="nav-link">トップページ</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adminpage/" className="nav-link">一覧</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adminpage/create" className="nav-link">新規記事投稿</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adminpage/logout" className="nav-link">ログアウト</Link>
        </li>
      </ul>
    );
  }

  render() {
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">瀬戸内の雲のように</Link>
            <div className="collapse navbar-collapse">
              {/* ログイン後だけnavbarを表示させたい */}
              {this.props.is_login ? navbar() : <br />}
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}