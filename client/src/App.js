import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Utility
import themeFile from './utility/theme';

// Components and Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const theme = createMuiTheme(themeFile);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
