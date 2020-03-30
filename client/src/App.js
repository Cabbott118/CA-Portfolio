import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Behind from './components/Behind';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Behind} />
      </div>
    </Router>
  );
}

export default App;
