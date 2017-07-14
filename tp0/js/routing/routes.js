import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from '../layout';
import Home from '../components/dumbComponents/home';
import Jouer from '../components/smartComponents/jouer-container';
import Archiver from '../components/smartComponents/archiver-container';
import Login from '../components/smartComponents/login-container';
import ListeArchives from '../components/smartComponents/listeTirages-container';


export default(
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='/jouer' component={Jouer}/>
    <Route path='/archiver' component={Archiver}/>
    <Route path='/archiver/:id' component={Archiver}/>
    <Route path='/listeTirages' component={ListeArchives}/>
    <Route path='/login' component={Login}/>
  </Route>
);
