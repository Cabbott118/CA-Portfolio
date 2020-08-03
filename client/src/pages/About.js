import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import myImg from '../images/me.JPG';

// Components
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';

// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  innerContainer: {},
  myImg: {
    borderRadius: '30px',
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
    },
  },
});

function About(props) {
  const {
    location: { pathname },
    classes,
  } = props;
  return (
    <div>
      <NavBar location={pathname} color={'transparent'} />
      <Container>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={0}
          className={classes.gridContainer}
        >
          <Grid item>
            <Banner first={'About'} second={'Me'} />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={4}
              className={classes.innerContainer}
            >
              <Grid item>
                <img
                  src={myImg}
                  alt='Me'
                  sm={12}
                  md={4}
                  className={classes.myImg}
                />
              </Grid>
              <Grid item sm={12} md={8}>
                <Typography color='secondary' variant='h6'>
                  Under Construction ---
                </Typography>
                <Typography color='secondary' variant='body1'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(About);
