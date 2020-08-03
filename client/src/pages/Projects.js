import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Util
import RentNet from '../images/RentNet.JPG';
import VGH from '../images/vgh.JPG';

// Components
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import Project from '../components/Project';

// MUI
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
});

function Projects(props) {
  const {
    location: { pathname },
    classes,
  } = props;
  return (
    <div>
      <NavBar location={pathname} color={'transparent'} />
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.gridContainer}
      >
        <Grid item>
          <Banner first={'My'} second={'Projects'} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={2}
            style={{ marginTop: '10px' }}
          >
            <Project
              title='Rent-Net'
              img={RentNet}
              body='A web app designed to allow users to list and rent trailers in one convenient location after simply registering an account.'
              tech='React, Material-UI, Redux, MongoDB, Node, Express'
              site='https://rent-net.herokuapp.com/'
              code='https://github.com/Cabbott118/Rentnet'
            />
            <Project
              title='VGHypeman'
              img={VGH}
              body='A video game search engine that brings general information, Youtube videos, and Twitch streams to your fingertips with the click of a button.'
              tech='Vue, MaterializeCSS, Slick.js, SQL Database, Node, Express'
              site='https://vghypeman.herokuapp.com/'
              code='https://github.com/MatthewBryantDonovan/VGHypeman2.0'
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Projects);
