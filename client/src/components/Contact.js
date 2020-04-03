import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

class Contact extends Component {
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
    }).then(document.getElementById('contact-form').reset());
  }

  render() {
    return (
      <div>
        <Container>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            id='contact-form'
            method='post'
          >
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Your name'
              required
            />
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='text'
              placeholder='Your email'
              required
            />
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message here'
              rows='3'
              required
            />

            <button type='submit'>Submit</button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Contact;
