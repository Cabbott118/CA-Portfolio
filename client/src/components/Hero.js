import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    minHeight: 'calc(96vh - 64px)',
    maxWidth: '100vw',
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  heroLeadText: {
    fontSize: '4rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  heroText: {
    fontSize: '3rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },
  },
  myName: {
    color: '#9cc9ad',
    // color: '#708090',
  },
  button: {
    borderRadius: '25px',
    margin: '2rem 0',
    fontSize: '1.1rem',
    [theme.breakpoints.down('xs')]: {
      margin: '5rem 1rem',
      fontSize: '1rem',
    },
  },
});

export class Hero extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='center'
        spacing={0}
        className={classes.gridContainer}
      >
        <Grid item>
          <Typography
            variant='h6'
            color='secondary'
            className={classes.heroLeadText}
          >
            Hi, I'm <strong className={classes.myName}>Caleb Abbott</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body2'
            color='secondary'
            className={classes.heroText}
          >
            a full-stack web developer
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            color='primary'
            // fullWidth
            component={Link}
            to='/projects'
            className={classes.button}
          >
            View my work
            <NavigateNextIcon fontSize='small' />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Hero);
