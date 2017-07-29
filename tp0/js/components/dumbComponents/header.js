import React from 'react';
import className from 'classnames';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    const user = this.props.userName;

    return (
      <div className="verticalMenu">
        <div className="navBouton">
          <Link className="linkNav" activeClassName='active' to="/home">Home</Link>
        </div>
        <div className="navBouton">
          <Link className="linkNav" activeClassName='active' to="/listeTirages">Liste Tirages</Link>
        </div>
        <div className="navBouton">
          <Link className="linkNav" activeClassName='active' to="/login">{user} <span className="glyphicon glyphicon-user"></span></Link>
        </div>
      </div>
    );
  }
}
