import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Blogs from "./components/list";
import EditBlog from "./components/edit";
import NewBlog from "./components/new";
import Blog from "./components/blog";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header /> <br/>
        <Router>
        <div className="container">
          <br/>
          <Route path="/" exact component={Blogs} />
          <Route path="/edit/:id" component={EditBlog} />
          <Route path="/create" component={NewBlog} />
          <Route path="/blogs/:id" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;