import React, { Component } from 'react';
import AppNavBar from './AppNavbar';
import Landing from './Landing';
import ProjectsHolder from './ProjectsHolder';
import Background from '../images/backgroundOne.jpg';
const behindStyle = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: 'white'
};

class Behind extends Component {
  render() {
    return (
      <div style={behindStyle}>
        <AppNavBar />
        <Landing />
        <ProjectsHolder />
      </div>
    );
  }
}

export default Behind;
