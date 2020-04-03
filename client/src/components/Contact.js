import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Container, Button, Form, Label, Input } from 'reactstrap';

const contactStyle = {
  paddingTop: '3rem',
  width: '100%',
  backgroundColor: 'rgb(8, 8, 10)'
};

const formStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const inputStyle = {
  backgroundColor: 'rgb(8, 8, 10)'
};

class Contact extends Component {
  state = {
    isOpen: false
  };

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'post',
      url: 'api/contact',
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(
      document.getElementById('contact-form').reset(),
      this.setState({
        isOpen: !this.state.isOpen
      })
    );
  }

  render() {
    return (
      <div style={contactStyle}>
        <Container>
          <div style={formStyle}>
            <h4 className='text-center mb-3'>Let's Work Together!</h4>
            <Form
              onSubmit={this.handleSubmit.bind(this)}
              id='contact-form'
              method='post'
            >
              <Label htmlFor='name'>Name</Label>
              <Input
                style={inputStyle}
                className='mb-3'
                id='name'
                name='name'
                type='text'
                placeholder='Enter your full name'
                required
              />
              <Label htmlFor='email'>Email</Label>
              <Input
                style={inputStyle}
                className='mb-3'
                id='email'
                name='email'
                type='text'
                placeholder='example@example.com'
                required
              />
              <Label htmlFor='message'>Message</Label>
              <Input
                style={inputStyle}
                className='mb-3'
                type='textarea'
                id='message'
                name='message'
                placeholder='Enter your message here'
                required
              />
              <Alert
                className='mt-3 mb-3'
                color='success'
                isOpen={this.state.isOpen}
              >
                Thank you for reaching out, I will be getting back to you
                shortly!
              </Alert>
              <Button
                className='mt-3 mb-5'
                style={{ backgroundColor: '#45A29E' }}
                type='submit'
              >
                Send
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
