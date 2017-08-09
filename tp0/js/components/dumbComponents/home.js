import React from 'react';
import Jouer from '../smartComponents/jouer-container.js';
import Header from '../smartComponents/header-container.js';
import Login from '../smartComponents/login-container.js';
import { Link } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jouer: false,
      login: false
    }
  }
  welcomeText(){
    this.setState({
      jouer: true,
      login: false
    });
  }
  loginAction(){
    if(!this.state.login){
      this.setState({
        jouer: false,
        login: true
      });
    }else{
      this.setState({
        jouer: false,
        login: false
      });
    }
  }
  rightPaneldata(){
    if(this.state.jouer && !this.state.login){
      return (<Jouer />);
    }else if(!this.state.jouer && this.state.login){
      return (<Login />);
    }else{
      return (
      <div className="welcomeText" onClick={this.welcomeText.bind(this)}>
        <p> Welcome, this app helps you to choose a combinaison of 5 numbers and 2 stars.
        To generate a combinaison click on this text, to login and access more functionalities click on the picture</p>
      </div>
      );
    }
  }
  render () {
    const userName = (this.props.userName === "log in" || this.props.userName ==="Wrong login or password")?"Vader_Smokes":this.props.userName;
    const src=`../../../img/${userName}.jpg`;
    const welcomeData = this.rightPaneldata();

    return (
        <div className="page">
          <div className="col-md-12">
            <div className="col-md-3 row left">
              <div className="userImage">
                <img className="c3po" onClick={this.loginAction.bind(this)} src={src}/>
              </div>
              <p className="userName">{userName}</p>
            </div>
            <div className="col-md-9 row">
              {welcomeData}
            </div>
          </div>
        </div>
    );
  }
}
