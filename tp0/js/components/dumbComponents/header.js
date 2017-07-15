import React from 'react';
import className from 'classnames';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    const user = this.props.basicToken !=="" ? "loged as Pierre" : "log in"
    return (
      <nav className="navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Home</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link activeClassName='active' to="/jouer">Play</Link></li>
            <li><Link activeClassName='active' to="/listeTirages">Liste Tirages</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link activeClassName='active' to="/login">
                {user} <span className="glyphicon glyphicon-user"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
