import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  bannerLine: {
    width: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
    },
    height: '2px',
    backgroundColor: '#fff',
  },
  bannerLeadText: {
    fontSize: '2rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  focusText: {
    color: '#9cc9ad',
  },
});

function Banner(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={2}
    >
      <Grid item className={classes.bannerLineHolder}>
        <div className={classes.bannerLine}></div>
      </Grid>
      <Grid item>
        <Typography
          variant='h6'
          color='secondary'
          className={classes.bannerLeadText}
        >
          {props.first}{' '}
          <strong className={classes.focusText}>{props.second}</strong>
        </Typography>
      </Grid>
      <Grid item className={classes.bannerLineHolder}>
        <div className={classes.bannerLine}></div>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Banner);
