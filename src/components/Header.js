import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a href="#top" className="navbar-brand">
            Title
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#top">Trang chủ</a>
            </li>
            <li>
              <a href="#top">Danh mục sản phẩm</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
