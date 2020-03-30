import React, { Component } from 'react';
import { Container } from 'reactstrap';

const landingStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  paddingTop: '150px',
  minHeight: '100vh'
};

class Landing extends Component {
  render() {
    return (
      <div style={landingStyle}>
        <Container>
          <div className='text-center'>
            <h4>Hello, my name is</h4>
            <h1>
              <b>CALEB ABBOTT</b>
            </h1>
            <h4>Full Stack Web Developer</h4>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
