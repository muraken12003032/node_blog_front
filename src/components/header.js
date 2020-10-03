import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div>
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
      </div>
    )
  }
}