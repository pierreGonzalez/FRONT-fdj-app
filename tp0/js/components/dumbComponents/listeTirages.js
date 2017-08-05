import React from 'react';
import { Link } from 'react-router';
import uuid from 'uuid';
import { Button } from 'react-bootstrap';
import Tirage from "../smartComponents/tirage-container";

export default class ListeTirages extends React.Component {

  loadTirages(){
    this.props.loadMongo(this.props.basicToken);
  }
  isLoged(){
    if(this.props.basicToken === ""){
      return (
      <div className="listeTiragesButtons">
        <Link to="/home">
          <button type="button" className="btn btn-info btn-block"><span className="glyphicon glyphicon-home"></span></button>
        </Link>
      </div>
      );

    }else {
      return (
        <div className="listeTiragesButtons">
          <div className="col-md-12">
            <div className="col-md-6">
              <button type="button"  onClick={this.loadTirages.bind(this)} className="btn btn-info btn-block"><span className="glyphicon glyphicon-cloud-download"></span></button>
            </div>
            <div className="col-md-6">
              <Link to="/archiver" className="linkNav">
                <button type="button" className="btn btn-warning btn-block">
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  render () {
    const {archive} = this.props;
    const {hidden} = this.props;
    const {listeTirages} = this.props;
    const elements = this.props.listeTirages.map(tirage => <Tirage key={tirage.id} tirage={tirage} />);
    const buttonAction = this.isLoged();
    const userName = (this.props.userName === "log in")?"Vader_Smokes":this.props.userName;
    const src=`../../../img/${userName}.jpg`;

    return (
    <div>
      <div className="header">
        <div className="userImage">
          <Link to="/home">
            <img className="c3po" src={src}/>
          </Link>
        </div>
      </div>
      <div>
        {buttonAction}
      </div>
      <div className="col-md-12 listeTirages">
          <table className="combinaisonValue table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Numero</th>
                <th>Etoile</th>
                <th>D</th>
                <th>U</th>
              </tr>
            </thead>
            <tbody>
              {elements}
            </tbody>
          </table>
        </div>
    </div>
    );
  }
}
