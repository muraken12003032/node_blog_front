import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Blog from "./components/blog";
import Blogs from "./components/top";
import EditBlog from "./components/edit";
import NewBlog from "./components/new";

//import logo from "./logo.png"
import Auth from './components/auth';
import Admin from "./components/admin";
import Images from "./components/images"
import Login from "./components/login";
import Logout from "./components/logout";
import Header from "./components/templates/header";
import Footer from "./components/templates/footer";
import User from "./classes/user";
import SideBar from "./components/templates/sidebar";

/*
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
*/

class App extends Component {
  render() {
    return (
      <Router>
        <Header is_login={User.isLoggedIn()}/>
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-6 d-lg-block col-lg-5">
              <SideBar />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
          <Switch>
            <Route path="/" exact component={Blogs} />
            <Route path="/blogs/:id" component={Blog} />
            <Route exact path="/login" component={Login} />
            <Auth>
              <Route exact path="/adminpage" component={Admin} />
              <Route path="/adminpage/edit/:id" component={EditBlog} />
              <Route path="/adminpage/create" component={NewBlog} />
              <Route path="/adminpage/logout" component={Logout} />
              <Route path="/adminpage/images" component={Images} />
            </Auth>
          </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;