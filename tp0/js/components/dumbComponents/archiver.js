import React from 'react';
import uuid from 'uuid';
import { Button,Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Archiver extends React.Component {
  componentDidMount(){
    this.props.resetChampsArchiver();
    if(this.props.tirage.id){
      let tirage = this.props.tirage;
      this.refs.n1.value=tirage.numeros[0].numero;
      this.refs.n2.value=tirage.numeros[1].numero;
      this.refs.n3.value=tirage.numeros[2].numero;
      this.refs.n4.value=tirage.numeros[3].numero;
      this.refs.n5.value=tirage.numeros[4].numero;
      this.refs.e1.value=tirage.etoiles[0].etoile;
      this.refs.e2.value=tirage.etoiles[1].etoile;
      let dateRecu = new Date( tirage.date);
      let annee = dateRecu.getFullYear();
      let mois = dateRecu.getMonth() < 10 ? "0" + dateRecu.getMonth() : dateRecu.getMonth();
      let jour = dateRecu.getDate() < 10 ? "0" + dateRecu.getDate() : dateRecu.getDate();
      let dateBonFormat = annee +"-"+ mois +"-"+ jour;
      this.refs.date.value = dateBonFormat;
    }else{
      let dateDuJour = new Date();
      let annee = dateDuJour.getFullYear();
      let mois = dateDuJour.getMonth() < 9 ? "0" + (dateDuJour.getMonth()+1) : (dateDuJour.getMonth()+1);
      let jour = dateDuJour.getDate() < 10 ? "0" + dateDuJour.getDate() : dateDuJour.getDate();
      let dateBonFormat = annee +"-"+ mois +"-"+ jour;
      this.refs.date.value = dateBonFormat;
      this.refs.n1.value="";
      this.refs.n2.value="";
      this.refs.n3.value="";
      this.refs.n4.value="";
      this.refs.n5.value="";
      this.refs.e1.value="";
      this.refs.e2.value="";
    }

  }
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.hidden
    };
  }
  objetArchive(){
    let id = this.props.tirage.id ? this.props.tirage.id : uuid.v4();
    return ({
        id:id,
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
      }
    );
  }

  controleChamps(){

    let objetArchive = this.objetArchive();
    let cptNumero = 0;
    let cptEtoile = 0;
    let i;
    let j;
    for(i=0; i<5; i++){
      if(objetArchive.numeros[i]>0 && objetArchive.numeros[i]<51){
        cptNumero++;
      }
    }
    for(j=0; j<2; j++){
      if(objetArchive.etoiles[j]>0 && objetArchive.etoiles[j]<13){
        cptEtoile++;
      }
    }

    if(cptEtoile===2 && cptNumero===5){
      this.setState({
        hidden: true
      });
    }else{
      this.setState({
        hidden: false
      });
    }
  }

  archiver(){
    let objetArchive = this.objetArchive();
    const verification = Promise.resolve(this.controleChamps(objetArchive));
    verification.then(()=>{
      if(this.state.hidden){
        this.props.sendObjetArchive(objetArchive,this.props.basicToken);
      }
    });

  }

  archiverButton(){
    if(this.state.hidden){
      return(
          <Link to="/listeTirages">
            <Button type="button" onClick={this.archiver.bind(this)} bsStyle="info" bsSize="large" block>
              <span className="glyphicon glyphicon-download-alt"></span><p>{this.props.archive}</p>
            </Button>
          </Link>
      );
    } else{
      return(
        <Button type="button" bsStyle="warning" bsSize="large" onClick={this.controleChamps.bind(this)} block>
          Verifiez les champs
        </Button>
      );
    }
  }

  render () {
    const hidden = this.state.hidden;
    const archiver = this.archiverButton();

    return (
      <div className="page">
        <div className="combinaisonValue archiverClass">
          <div className="col-md-10 c3poArea">
            <div className="col-md-3">
              <img className="c3po" src="../../../img/circle_C3PO.png"/>
            </div>
            <div className="col-md-6 c3po alert alert-danger" hidden={hidden}>
              <strong>Sir !</strong> <br/>Numeros must be between 1 and 50<br/>Etoiles  must be between 1 and 12!
            </div>
          </div>
          <div className="col-md-12" >
            <form>
                <div className="col-md-2 form-group">
                  <input type="text" className="form-control" placeholder="numero 1" id="n1" ref="n1" maxLength="2" onChange={this.controleChamps.bind(this)} />
                </div>
                <div className="col-md-2 form-group">
                  <input type="text" className="form-control" placeholder="numero 2" id="n2" ref="n2" maxLength="2" onChange={this.controleChamps.bind(this)} />
                </div>
                <div className="col-md-2 form-group">
                  <input type="text" className="form-control" placeholder="numero 3" id="n3" ref="n3" maxLength="2" onChange={this.controleChamps.bind(this)} />
                </div>
                <div className="col-md-2 form-group">
                  <input type="text" className="form-control" placeholder="numero 4" id="n4" ref="n4" maxLength="2" onChange={this.controleChamps.bind(this)} />
                </div>
                <div className="col-md-2 form-group">
                  <input type="text"  className="form-control" placeholder="numero 5" id="n5" ref="n5" maxLength="2" onChange={this.controleChamps.bind(this)} />
                </div>
              <div className="col-md-5 form-group">
                <input type="text" className="form-control" placeholder="etoile 1" id="e1" ref="e1" maxLength="2" onChange={this.controleChamps.bind(this)} />
              </div>
              <div className="col-md-5 form-group">
                <input type="text"  className="form-control" placeholder="etoile 2" id="e2" ref="e2" maxLength="2" onChange={this.controleChamps.bind(this)} />
              </div>
              <div className="col-md-10 form-group">
                <input className="form-control" id="inputDate" ref="date" type="date"/>
              </div>
              <div className="col-md-10 form-group">
                {archiver}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
