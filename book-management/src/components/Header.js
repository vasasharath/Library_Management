import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-info navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"><strong>Book Management System</strong></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;



