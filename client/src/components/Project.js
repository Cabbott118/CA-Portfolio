import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  gridContainer: {
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  paper: {
    height: '520px',
    width: '350px',
    backgroundColor: '#333',
    borderRadius: '10px',
  },
  titleText: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },
  },
  img: {
    width: '330px',
    height: '150px',
    borderRadius: '10px',
  },
  body: { height: '200px' },
  bodyText: {
    fontSize: '1rem',
    // One small screen sizes, set below
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  button: {
    borderRadius: '25px',
  },
});

function Project(props) {
  const { classes, title, img, body, tech, site, code } = props;
  return (
    <Grid item>
      <Paper variant='outlined' className={classes.paper}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item>
            <Typography
              variant='h4'
              color='primary'
              className={classes.titleText}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <img src={img} alt='project' className={classes.img} />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={1}
            >
              <Grid item className={classes.body}>
                <Typography
                  variant='body1'
                  color='secondary'
                  className={classes.bodyText}
                  style={{ padding: '10px' }}
                >
                  {body}
                </Typography>
                <Typography
                  variant='body1'
                  color='primary'
                  className={classes.bodyText}
                  style={{ padding: '0 10px' }}
                >
                  Tech Used:
                </Typography>
                <Typography
                  variant='body1'
                  color='secondary'
                  className={classes.bodyText}
                  style={{ padding: '0 10px' }}
                >
                  {tech}
                </Typography>
              </Grid>
              <Grid item style={{ width: '95%' }}>
                <Grid
                  container
                  direction='column'
                  justify='flex-end'
                  alignItems='center'
                  spacing={1}
                >
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant='contained'
                      fullWidth
                      className={classes.button}
                      color='primary'
                      href={site}
                      target='_blank'
                    >
                      Website
                    </Button>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant='contained'
                      fullWidth
                      className={classes.button}
                      color='secondary'
                      href={code}
                      target='_blank'
                    >
                      Code
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(Project);
