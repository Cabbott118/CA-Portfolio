import React, { Component } from 'react';
import { Container, Navbar, Nav, NavLink, Row } from 'reactstrap';

const navbarStyle = {
  backgroundColor: 'rgba(0, 0, 0, .8)',
  fontFamily: 'Roboto Mono'
};

class AppNavbar extends Component {
  render() {
    return (
      <div style={navbarStyle}>
        <Navbar className='navBar' fixed='top' dark expand='md'>
          <Container>
            <Nav className='mr-auto' navbar>
              <Row>
                <NavLink className='navItems' href='#projects-id'>
                  About
                </NavLink>
                <NavLink className='navItems' href='/'>
                  Projects
                </NavLink>
                <NavLink className='navItems' href='/'>
                  Contact
                </NavLink>
              </Row>
            </Nav>
            <Nav className='ml-auto' navbar>
              <Row>
                <NavLink target='_blank' href='https://github.com/Cabbott118'>
                  <i className='fab fa-github navItems'></i>
                </NavLink>
                <NavLink
                  target='_blank'
                  href='https://www.linkedin.com/in/caleb-abbott-961007193/'
                >
                  <i className='fab fa-linkedin navItems'></i>
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
