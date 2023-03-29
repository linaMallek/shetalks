// App.js

import Login from  './pages/login'
import NumberAndDateForm from './pages/3login'
import YesNoCheckbox  from  './pages/2d'
import RegistrationForm from  './pages/signin'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParentComponent from './component/Parentcomponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './component/Header';

function App() {


  return(
    
    
    <div className="App">
  <Login />
</div>)
}

export default App;
