import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Blogs from "./components/top";
import EditBlog from "./components/edit";
import NewBlog from "./components/new";
import Blog from "./components/blog";

import logo from "./logo.png"
import Auth from './components/auth';
import Admin from "./components/admin"
import Login from "./components/login"
import Logout from "./components/logout"
import User from "./classes/user"

const navbar = () => {
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
            {User.isLoggedIn() ? navbar() : <br />}
          </div>
        </nav>
        <br/>
        <Switch>
          <Route path="/" exact component={Blogs} />
          <Route path="/blogs/:id" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Auth>
            <Route exact path="/adminpage" component={Admin} />
            <Route path="/adminpage/edit/:id" component={EditBlog} />
            <Route path="/adminpage/create" component={NewBlog} />
            <Route path="/adminpage/logout" component={Logout} />
          </Auth>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;