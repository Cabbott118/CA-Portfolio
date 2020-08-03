import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';

// MUI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const styles = (theme) => ({
  ...theme.spreadThis,
  container: {},
  button: {
    margin: '10px 0',
    borderRadius: '25px',
  },
  input: {
    color: 'white',
  },
  label: {
    margin: '10px 0',
    '& .MuiFormLabel-root': {
      color: 'white',
    },
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#9cc9ad !important',
  },
  alert: {
    backgroundColor: '#f08b80',
    width: '100%',
    borderRadius: '25px',
  },
  success: {
    backgroundColor: '#80f093',
    width: '100%',
    borderRadius: '25px',
  },
});

export class ContactForm extends Component {
  state = {
    error: false,
    success: false,
  };

  sendEmail = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        success: true,
        error: false,
      });
      axios({
        method: 'post',
        url: 'api/contact',
        data: {
          name: name,
          email: email,
          message: message,
        },
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { error, success } = this.state;
    return (
      <Container className={classes.container}>
        <TextField
          label='Full Name'
          id='name'
          variant='outlined'
          size='small'
          className={classes.label}
          InputProps={{
            classes: {
              input: classes.input,
              notchedOutline: classes.notchedOutline,
            },
          }}
          fullWidth
          required={true}
        />
        <TextField
          label='Email Address'
          id='email'
          variant='outlined'
          size='small'
          className={classes.label}
          InputProps={{
            classes: {
              input: classes.input,
              notchedOutline: classes.notchedOutline,
            },
          }}
          fullWidth
          required={true}
        />
        <TextField
          label='Message'
          id='message'
          variant='outlined'
          size='small'
          className={classes.label}
          InputProps={{
            classes: {
              input: classes.input,
              notchedOutline: classes.notchedOutline,
            },
          }}
          multiline
          rows={4}
          fullWidth
          required={true}
        />
        <Grid container direction='row' justify='center' alignItems='center'>
          {error === false ? null : (
            <Alert severity='error' className={classes.alert}>
              Please input all required fields!
            </Alert>
          )}

          {success === false ? null : (
            <Alert severity='success' className={classes.success}>
              Email sent!
            </Alert>
          )}
          <Button
            variant='contained'
            color='primary'
            onClick={this.sendEmail}
            className={classes.button}
            fullWidth
          >
            Send
          </Button>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(ContactForm);
