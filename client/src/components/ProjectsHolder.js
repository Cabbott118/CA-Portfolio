import React, { Component } from 'react';
import Projects from './Projects';
import { Container } from 'reactstrap';

const projectsHolderFold = {
  paddingTop: '5rem',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgb(8, 8, 10)'
};

class ProjectsHolder extends Component {
  render() {
    return (
      <div id='projects' style={projectsHolderFold}>
        <Container>
          <h4 className='text-center mb-3'>Projects</h4>
          <Projects />
        </Container>
      </div>
    );
  }
}

export default ProjectsHolder;
