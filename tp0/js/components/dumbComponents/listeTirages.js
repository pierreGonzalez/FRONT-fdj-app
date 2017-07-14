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
        <Link to="/login">
          <button type="button" className="btn btn-info btn-block"><span className="glyphicon glyphicon-user"></span></button>
        </Link>
      );

    }else {
      return (
        <div className="col-md-12">
          <div className="col-md-11">
            <button type="button"  onClick={this.loadTirages.bind(this)} className="btn btn-info btn-block">Récupérer liste</button>
          </div>
          <div className="col-md-1">
            <Link to="/archiver">
              <button type="button" className="btn btn-warning btn-block">
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            </Link>
          </div>
        </div>
      );
    }

  }

  render () {
    const {archive} = this.props;
    const {hidden} = this.props;
    const {listeTirages} = this.props;
    const elements = this.props.listeTirages.map(tirage => <Tirage key={tirage.id} tirage={tirage} />)
    const message = this.isLoged();
    return (
      <div className="container">
        <div>
          {message}
        </div>
        <table className="table table-striped">
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
    );
  }
}
