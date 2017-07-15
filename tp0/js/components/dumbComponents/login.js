import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {

  loger(dispatch,e){
    {/*let emailFormat = /^[a-zA-Z\d_-.]+@[a-zA-Z\d]{1,4}.[a-zA-Z]{2,3}$/*/}
    let emailFormat = /[a-zA-Z\d-.]+/
    let basicToken;
    let token;
    if(this.refs.user.value.match(emailFormat)){
      token = this.refs.user.value+":"+this.refs.pwd.value;
      this.props.doLogin(token);

      this.refs.user.value = "";
      this.refs.pwd.value = "";
    }else{
      {/*Trouver un moyen d'afficher un mesg d'erreur sans passer*/}
      console.log("format email not good !");
    }
    {/*Trouver un moyen de rediriger*/}
  }
  logout(){
      this.props.doLogout();
  }

  logButton(){
    if(this.props.basicToken === ""){
      return(
        <form>
          <div className="form-group">
            <label htmlFor="email">userName:</label>
            <input type="text" className="form-control" id="user" ref="user"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">passWord:</label>
            <input type="password" className="form-control" id="pwd" ref="pwd"/>
          </div>
          <div className="btn-group btn-group-justified">
            <Link className="btn btn-info" to="/listeTirages" onClick={this.loger.bind(this)}>
              <span>login</span>
            </Link>
          </div>
        </form>

      );
    } else{
      return(
        <div className="btn-group btn-group-justified">
          <Link className="btn btn-warning" to="/listeTirages" onClick={this.logout.bind(this)}>
            <span>logout</span>
          </Link>
        </div>
      );
    }
  }

  render () {
    const loginButton = this.logButton();

    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">Login form</div>
          <div className="panel-body">
            {loginButton}
          </div>
        </div>
      </div>
    );
  }
}
