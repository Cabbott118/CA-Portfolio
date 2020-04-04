import React, { Component } from 'react';
import { Container, Navbar, Nav, NavLink, Row } from 'reactstrap';
import { Link } from 'react-scroll';
import pdfResume from '../assets/Caleb-Resume.pdf';
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
                <Link
                  className='ml-1 mr-3'
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  className='mr-3'
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Projects
                </Link>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
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
                <NavLink target='_blank' href={pdfResume}>
                  <i className='far fa-file navItems'></i>
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
