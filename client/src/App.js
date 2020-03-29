import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppNavbar />
        <Route exact path='/' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
