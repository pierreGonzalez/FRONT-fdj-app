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
      {/* Reste des champs */}
      this.refs.user.value = "";
      this.refs.pwd.value = "";
    }
  }

  logout(){
      this.props.doLogout();
  }

  logButton(){
    if(this.props.basicToken === ""){
      return(

        <div className="panelInput">
          <div className="col-md-12">
            <div className="combinaison col-md-4">
              <input type="text" className="form-control" placeholder="userName" id="user" ref="user"/>
            </div>
            <div className="combinaison col-md-4">
              <input type="password" className="form-control" placeholder="passWord" id="pwd" ref="pwd"/>
            </div>
            <div className="col-md-4">
              <Link className="btn btn-default btn-block" to="/listeTirages" onClick={this.loger.bind(this)}>
                <span>login</span>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="panelInput">
          <div className="col-md-6">
            <Link className="btn btn-warning btn-block" to="/home" onClick={this.logout.bind(this)}>
              <span>logout</span>
            </Link>
          </div>
          <div className="col-md-6">
            <Link className="btn btn-default btn-block" to="/listeTirages">
              <span>Tirage List</span>
            </Link>
          </div>
        </div>
      );
    }
  }

  render () {
    const loginButton = this.logButton();

    return (
      <div>
        {loginButton}
      </div>
    );
  }
}
