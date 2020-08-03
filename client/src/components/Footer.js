import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    backgroundColor: '#557661',
    // backgroundColor: '#36454f',
    padding: '.5rem',
  },
});

export class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.gridContainer}
      >
        <Grid item>
          <Typography variant='h6' color='secondary'>
            Connect with Me!
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
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
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
