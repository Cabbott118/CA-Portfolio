import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme) => ({
  ...theme.spreadThis,
  navLinks: {
    marginRight: '2rem',
    fontSize: '1.2rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      marginRight: 'auto',
      fontSize: '1rem',
    },
  },
});

export class NavBar extends Component {
  state = {
    activeItem: '',
  };

  componentDidMount() {
    this.setState({
      activeItem: this.props.location,
    });
  }

  render() {
    const { activeItem } = this.state;
    const { classes, color } = this.props;

    return (
      <Fragment>
        <AppBar position='fixed' color={color}>
          <Container className={classes.container}>
            <Toolbar>
              <Link
                href='/'
                name='home'
                className={classes.navLinks}
                variant='h6'
                color={activeItem === '/' ? 'primary' : 'secondary'}
              >
                Home
              </Link>
              <Link
                href='/about'
                name='about'
                className={classes.navLinks}
                variant='h6'
                color={activeItem === '/about' ? 'primary' : 'secondary'}
              >
                About
              </Link>
              <Link
                href='/projects'
                name='projects'
                className={classes.navLinks}
                variant='h6'
                color={activeItem === '/projects' ? 'primary' : 'secondary'}
              >
                Projects
              </Link>
              <Link
                href='/contact'
                name='contact'
                className={classes.navLinks}
                variant='h6'
                color={activeItem === '/contact' ? 'primary' : 'secondary'}
              >
                Contact
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(NavBar);
