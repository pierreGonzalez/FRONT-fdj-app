import React from 'react';
import uuid from 'uuid';
import { Button } from 'react-bootstrap';

export default class Archiver extends React.Component {

  archiver(){
    let objetArchive = {
      id:uuid.v4(),
      distance:0,
      difference:0,
      numeros:[
          parseInt(this.refs.n1.value),
          parseInt(this.refs.n2.value),
          parseInt(this.refs.n3.value),
          parseInt(this.refs.n4.value),
          parseInt(this.refs.n5.value)
      ],
      etoiles:[
        parseInt(this.refs.e1.value),
        parseInt(this.refs.e2.value)
      ],
      date:this.refs.date.value
    };

    const verification = Promise.resolve(this.props.controleChamps(objetArchive));
    verification.then(()=>{
      if(this.props.hidden){
        console.log("envoi");
        this.props.sendObjetArchive(objetArchive);
      }
    });
  }

  resetChamps(){
    this.props.resetChampsArchiver();

    this.refs.n1.value="";
    this.refs.n2.value="";
    this.refs.n3.value="";
    this.refs.n4.value="";
    this.refs.n5.value="";
    this.refs.e1.value="";
    this.refs.e2.value="";
  }

  render () {
    const {archive} = this.props;
    const {hidden} = this.props;

    return (
      <div className="container">
        <div className="col-md-10">
          <form>
            <div className="col-md-2 form-group">
              <label htmlFor="numero1">numero I</label>
              <input type="text" className="form-control" placeholder="numero 1" id="n1" ref="n1" maxLength="2" />
            </div>
            <div className="col-md-2 form-group">
              <label htmlFor="numero2">numero II</label>
              <input type="text" className="form-control" placeholder="numero 2" id="n2" ref="n2" maxLength="2" />
            </div>
            <div className=" col-md-2 form-group">
              <label htmlFor="numero3">numero III</label>
              <input type="text" className="form-control" placeholder="numero 3" id="n3" ref="n3" maxLength="2" />
            </div>
            <div className="col-md-2 form-group">
              <label htmlFor="numero4">numero IV</label>
              <input type="text" className="form-control" placeholder="numero 4" id="n4" ref="n4" maxLength="2" />
            </div>
            <div className="col-md-2 form-group">
              <label htmlFor="numero5">numero V</label>
              <input type="text"  className="form-control" placeholder="numero 5" id="n5" ref="n5" maxLength="2" />
            </div>
            <div className="col-md-5 form-group">
              <label htmlFor="etoile1">etoile I</label>
              <input type="text" className="form-control" placeholder="etoile 1" id="e1" ref="e1" maxLength="2" />
            </div>
            <div className="col-md-5 form-group">
              <label htmlFor="etoile2">etoile II</label>
              <input type="text"  className="form-control" placeholder="etoile 2" id="e2" ref="e2" maxLength="2" />
            </div>
            <div className="col-md-10 form-group">
              <label htmlFor="date">date</label>
              <input className="form-control" id="inputDate" ref="date" type="date"/>
            </div>
            <div className="col-md-10">
              <Button type="button" onClick={this.archiver.bind(this)} bsStyle="info" bsSize="large" block> <span className="glyphicon glyphicon-download-alt"></span> <p>{archive}</p></Button>
              <Button type="button" onClick={this.resetChamps.bind(this)} bsStyle="warning" bsSize="large" block>Initialiser les champs <span className="glyphicon glyphicon-repeat"></span></Button>
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <img className="c3po" src="../../../img/circle_C3PO.png"/>
          <div className="c3po alert alert-danger" hidden={hidden}>
            <strong>Sir !</strong> <br/>Numeros must be between 1 à 50<br/>Etoiles  must be between 1 à 12 !
          </div>
        </div>
      </div>
    );
  }
}
