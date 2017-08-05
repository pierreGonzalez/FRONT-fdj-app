import React from 'react';

export default class Jouer extends React.Component {

  componentDidMount(){
    let dateDuJour = new Date();
    let annee = dateDuJour.getFullYear();
    let mois = dateDuJour.getMonth() < 9 ? "0" + (dateDuJour.getMonth()+1) : (dateDuJour.getMonth()+1);
    let jour = dateDuJour.getDate() < 10 ? "0" + dateDuJour.getDate() : dateDuJour.getDate();
    let dateBonFormat = annee +"-"+ mois +"-"+ jour;
    this.refs.inputDate.value = dateBonFormat;
  }
  sendDate(){
    this.props.sendDate(this.refs.inputDate.value);
  }

  render () {
    const {tirage} = this.props;
    const numeros = tirage.numeros.map(n => <span>{n.numero} </span>);
    const etoiles = tirage.etoiles.map(e => <span>{e.etoile} </span>);

    return (
      <div className="panelInput">
        <div className="col-md-12">
          <div className="col-md-3">
            <input type="date" className="form-control" id="date" ref='inputDate' />
          </div>
          <div className="combinaison col-md-6 combinaisonValue">
            <p>P: {tirage.precision.toFixed(2)} %, Combinaison: <span className="important">{numeros}</span> - <span className="important">{etoiles}</span></p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-default btn-block" type="button" onClick={this.sendDate.bind(this)}>
              <i className="glyphicon glyphicon-cloud-download"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
