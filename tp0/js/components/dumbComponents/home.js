import React from 'react';
import Jouer from '../smartComponents/jouer-container.js';
import Header from '../smartComponents/header-container.js';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render () {
    console.log('userName',this.props.userName);
    let userName = (this.props.userName === "log in")?"Vader_Smokes":this.props.userName;
    console.log('userName',userName);
    let src=`../../../img/${userName}.jpg`
    console.log('src',src);
    return (
        <div className="page">
          <div className="col-md-12">
            <div className="col-md-3 top">
              <div className="userImage">
                <Link activeClassName='active' to="/login">
                  <img className="c3po" src={src}/>
                </Link>
              </div>
              <p className="userName">{userName}</p>
            </div>
            <div className="col-md-9 top">
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-3 bottom">
              <Header/>
            </div>
            <div className="col-md-9 bottom">
              <Jouer />
            </div>
          </div>
        </div>
    );
  }
}
