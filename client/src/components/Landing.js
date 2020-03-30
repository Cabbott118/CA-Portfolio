import React, { Component } from 'react';
import { Container } from 'reactstrap';

const landingStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  paddingTop: '60px',
  minHeight: '100vh'
};

class Landing extends Component {
  render() {
    return (
      <div style={landingStyle}>
        <Container>
          Hi, I'm <h4>Caleb Abbott,</h4> and I'm a Full Stack Web Developer
        </Container>
      </div>
    );
  }
}

export default Landing;
