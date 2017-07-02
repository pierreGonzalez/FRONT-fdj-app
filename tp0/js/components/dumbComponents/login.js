import React from 'react';


export default class Login extends React.Component {

  loger(){
    let emailFormat = /^[a-zA-Z\d.-]+@[a-zA-Z\d]{1,4}.[a-zA-Z]{2,3}$/
    if(this.refs.email.value.match(emailFormat)){
      console.log("@: ",this.refs.email.value,"pwd: ",this.refs.pwd.value);
    }else{

      console.log("format email not good !");
    }
    {/*Trouver un moyen de rediriger*/}
  }

  render () {

    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">Entrer votre login et mot de passe</div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" id="email" ref="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" ref="pwd"/>
              </div>
              <button type="submit" onClick={this.loger.bind(this)} className="btn btn-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
