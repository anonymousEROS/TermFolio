import './App.css';
import Term from './Pages/Term';
import HeroSection from './Components/HeroSec'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import React from 'react';



function App() {



  return (
  
    <Router>
    <Switch>
        <Route path="/" exact component={HeroSection} />
        <Route path="/term" exact component={Term} />
      </Switch>
    </Router>
  );
}

export default App;

