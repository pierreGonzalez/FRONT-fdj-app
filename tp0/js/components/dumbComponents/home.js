import React from 'react';
import Jouer from '../smartComponents/jouer-container.js';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render () {

    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-3 top">
            <div className="userImage">
              <Link activeClassName='active' to="/login">
                <img className="c3po" src="../../../img/circle_C3PO.png"/>
              </Link>
            </div>
          </div>
          <div className="col-md-9 top">
          </div>
        </div>
        <div className="col-md-12">
          <div className="col-md-3 bottom">
          </div>
          <div className="col-md-9 bottom">
            <Jouer />
          </div>
        </div>
      </div>
    );
  }
}
