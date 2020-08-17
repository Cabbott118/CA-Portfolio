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
  innerContainer: {
    // margin: '.5rem 0',
  },
  myImg: {
    borderRadius: '30px',
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      // width: '150px',
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
          spacing={4}
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
                  xs={12}
                  // md={6}
                  className={classes.myImg}
                />
              </Grid>
              {/* <Grid item sm={12} md={6}>
                <Typography color='secondary' variant='h6'>
                  Hi, I'm Caleb Abbott, a Web Developer based out of Lakeland,
                  Fl.
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='flex-start'
              spacing={4}
              className={classes.innerContainer}
            >
              <Grid item sm={12} md={3}>
                <Typography
                  color='primary'
                  variant='h6'
                  style={{
                    marginBottom: '.5rem',
                  }}
                >
                  Who Am I?
                </Typography>
                <Typography color='secondary' variant='body1'>
                  From a young age, I've been interested in how things work, why
                  they work, and not only how I can keep them working, but
                  improve them.
                </Typography>
                <Typography color='secondary' variant='body1'>
                  I believe this is why I've been lead to become a Web
                  Developer. It doesn't matter if I'm continuing work on
                  something I started months ago, or picking up a brand new
                  shiny project; each and every day brings new challenges and
                  pushes me to continue learning and growing.
                </Typography>
              </Grid>
              <Grid item sm={12} md={3}>
                <Typography
                  color='primary'
                  variant='h6'
                  style={{
                    marginBottom: '.5rem',
                  }}
                >
                  Where Am I Today?
                </Typography>
                <Typography color='secondary' variant='body1'>
                  Today, I am a Golf Services Lead at the world-class golf
                  resort, Streamsong. I work with an incredible group of people,
                  from all walks of life, who come together as a team to
                  showcase our spectacular resort.
                </Typography>
                <Typography color='secondary' variant='body1'>
                  I have been fortunate to learn under a management team that
                  has fostered my leadership skills and given me opportunity to
                  grow as a man.
                </Typography>
              </Grid>
              <Grid item sm={12} md={3}>
                <Typography
                  color='primary'
                  variant='h6'
                  style={{
                    marginBottom: '.5rem',
                  }}
                >
                  Where Will I Be Tomorrow?
                </Typography>
                <Typography color='secondary' variant='body1'>
                  Tomorrow, I will continue to grow as a developer, a problem
                  solver, a leader, and a man, by applying what I've learned
                  today.
                </Typography>
                <Typography
                  color='secondary'
                  variant='subtitle1'
                  style={{ marginTop: '.75rem' }}
                >
                  "You are today where your thoughts have brought you: you will
                  be tomorrow where your thoughts take you."
                </Typography>
                <Typography color='secondary' variant='subtitle1'>
                  - James Allen
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
