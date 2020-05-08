import React, { Component } from 'react';
import { Container } from 'reactstrap';

const landingStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  paddingTop: '150px',
  minHeight: '100vh',
};

const spanStyle = {
  color: '#45A29E',
};

class Landing extends Component {
  render() {
    return (
      <div style={landingStyle}>
        <Container>
          <div id='about' className='text-center'>
            <h4>Hello, my name is</h4>
            <h1>
              <b style={spanStyle}>CALEB ABBOTT</b>
            </h1>
            <h4>Full Stack Web Developer</h4>
            <br />
            <h5 style={{ lineHeight: '1.2' }}>
              Having a background in the hospitality industry, client
              satisfaction is my number one goal.
            </h5>
            <h5 style={{ lineHeight: '1.2' }}>
              Technology has always excited my attention, which led me to pursue
              it as a career path. I am hungry for knowledge and am willing to
              try new things to further develop my skill set. If you would like
              me to join your team, or simply see what I might be able to offer
              you, feel free to reach out!
            </h5>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
