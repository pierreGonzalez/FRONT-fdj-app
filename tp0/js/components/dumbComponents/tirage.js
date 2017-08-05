import React from 'react';
import { Link } from 'react-router';

export default class Tirage extends React.Component {

  delete(){
    this.props.deleteArchive(this.props.id, this.props.basicToken);
  }
  render() {
    const {tirage} = this.props;
    const numeros = this.props.tirage.numeros.map((numero) => {
      return (<span>{numero.numero} </span>);
    });
    const etoiles = this.props.tirage.etoiles.map((etoile) => {
      return (<span>{etoile.etoile} </span>);
    });
    const date = new Date(tirage.date).toLocaleString();

    return (
      <tr>
        <td>{date}</td>
        <td>{numeros}</td>
        <td>{etoiles}</td>
        <td><Link className="linkNavRed" to="/listeTirages"><span className="glyphicon glyphicon-remove" onClick={this.delete.bind(this)}></span></Link></td>
        <td><Link className="linkNav" to={`/archiver/${tirage.id}`}><span className="glyphicon glyphicon-pencil"></span></Link></td>
      </tr>
    );
  }
}
