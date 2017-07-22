import React from 'react';

export default class Home extends React.Component {

  render () {

    return (
      <div className="container">
        <div className="jumbotron homeClass">
          <h1>Good day <code>lucky</code> boy !</h1>
          <blockquote className="blockquote">
            <p>Trust me I will tell you the combinaton to play*</p>
            <h6>but don&apos;t tell to anyone it&apos;s a secret ...</h6>
            <footer>Combinaton generator v1.0.1</footer>
            <footer>*This application is a personal code training</footer>
          </blockquote>
        </div>
      </div>
    );
  }
}
