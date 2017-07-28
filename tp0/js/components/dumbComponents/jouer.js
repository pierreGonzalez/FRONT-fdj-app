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

    return (
      <div className="jouerPanel">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="form-group">
                <label htmlFor="date">Date du tirage à jouer :</label>
                <div className="input-group">
                  <input type="date" className="form-control" id="date" ref='inputDate' />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.sendDate.bind(this)}>
                      <i className="glyphicon glyphicon-check searchGlyph"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <label htmlFor="table"></label>
              <table className="table">
                <thead>
                  <tr>
                    <th>Precision</th>
                    <th>N1</th>
                    <th>N2</th>
                    <th>N3</th>
                    <th>N4</th>
                    <th>N5</th>
                    <th>E1</th>
                    <th>E2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tirage.precision.toFixed(2)} %</td>
                    <td>{tirage.numeros[0].numero}</td>
                    <td>{tirage.numeros[1].numero}</td>
                    <td>{tirage.numeros[2].numero}</td>
                    <td>{tirage.numeros[3].numero}</td>
                    <td>{tirage.numeros[4].numero}</td>
                    <td>{tirage.etoiles[0].etoile}</td>
                    <td>{tirage.etoiles[1].etoile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    );
  }
}
