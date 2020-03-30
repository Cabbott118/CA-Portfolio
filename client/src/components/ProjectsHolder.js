import React, { Component } from 'react';
import Projects from './Projects';
import { Container } from 'reactstrap';

const projectsHolderFold = {
  paddingTop: '3rem',
  width: '100%',
  backgroundColor: 'rgb(8, 8, 10)'
};

class ProjectsHolder extends Component {
  render() {
    return (
      <div style={projectsHolderFold}>
        <Container>
          <h4 className='text-center mb-3'>Projects</h4>
          <Projects />
        </Container>
      </div>
    );
  }
}

export default ProjectsHolder;
