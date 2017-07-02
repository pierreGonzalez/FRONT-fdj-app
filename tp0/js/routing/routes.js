import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from '../layout';
import Home from '../components/dumbComponents/home';
import Jouer from '../components/smartComponents/jouer-container';
import Archiver from '../components/smartComponents/archiver-container';
import Login from '../components/dumbComponents/login';


export default(
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='/jouer' component={Jouer}/>
    <Route path='/archiver' component={Archiver}/>
    <Route path='/login' component={Login}/>
  </Route>
);
