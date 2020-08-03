import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  contactBanner: {
    marginTop: '2rem',
  },
});

function Contact(props) {
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
        spacing={0}
        className={classes.gridContainer}
      >
        <Grid item>
          <Banner first={'Contact'} second={'Me'} />
        </Grid>
        <Grid item>
          <ContactForm />
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
            className={classes.contactBanner}
          >
            <Grid item>
              <Button target='_blank' href='https://github.com/Cabbott118'>
                <GitHubIcon fontSize='large' color='secondary' />
              </Button>
            </Grid>
            <Grid item>
              <Button
                target='_blank'
                href='https://www.linkedin.com/in/caleb-abbott-961007193/'
              >
                <LinkedInIcon fontSize='large' color='secondary' />
              </Button>
            </Grid>
            <Grid item>
              <Button target='_blank' href='mailto:calebhaabbott94@gmail.com'>
                <EmailIcon fontSize='large' color='secondary' />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);
