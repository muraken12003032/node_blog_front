import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Blogs from "./components/list";
import EditBlog from "./components/edit";
import NewBlog from "./components/new";
import Blog from "./components/blog";

import logo from "./logo.png"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">瀬戸内の雲のように</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">一覧</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">新規記事投稿</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={Blogs} />
        <Route path="/edit/:id" component={EditBlog} />
        <Route path="/create" component={NewBlog} />
        <Route path="/blog/:id" component={Blog} />
      </div>
    </Router>
    );
  }
}

export default App;