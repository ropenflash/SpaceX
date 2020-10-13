import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


import './index.css';
import './styles/reset.css'
import App from './App';


hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


