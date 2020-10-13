import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './index.css';
import './styles/reset.css'
import App from './App';


hydrate(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


