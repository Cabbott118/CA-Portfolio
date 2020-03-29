import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import VHGype from '../images/vgh.JPG';
import P3 from '../images/p3thumbnail.JPG';
import { Container } from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <div>
        <Container>
          <Thumbnail
            link='https://vghypeman.herokuapp.com/'
            image={VHGype}
            title='VGHypeman'
          />

          <Thumbnail
            link='https://ca-company-tbd.herokuapp.com/'
            image={P3}
            title='LOADCo'
          />
        </Container>
      </div>
    );
  }
}

export default Projects;
