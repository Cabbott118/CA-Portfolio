import React, { Component } from 'react';
import { Container, Navbar, Nav, NavLink, Row } from 'reactstrap';

const navbarStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)'
};

class AppNavbar extends Component {
  render() {
    return (
      <div style={navbarStyle}>
        <Navbar fixed='top' dark expand='md'>
          <Container>
            <Nav className='mr-auto' navbar>
              <Row>
                <NavLink href='/'>About</NavLink>
                <NavLink href='/'>Projects</NavLink>
                <NavLink href='/'>Contact</NavLink>
              </Row>
            </Nav>
            <Nav className='ml-auto' navbar>
              <Row>
                <NavLink target='_blank' href='https://github.com/Cabbott118'>
                  <i className='fab fa-github'></i>
                </NavLink>
                <NavLink
                  target='_blank'
                  href='https://www.linkedin.com/in/caleb-abbott-961007193/'
                >
                  <i className='fab fa-linkedin'></i>
                </NavLink>
              </Row>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
