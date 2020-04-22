import React, { Component } from 'react';
import P3 from '../images/p3thumbnail.JPG';
import VGH from '../images/vgh.JPG';
import thePatch from '../images/the-patch.JPG';
import {
  Button,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
} from 'reactstrap';
const cardStyle = {
  backgroundColor: 'rgb(25, 27, 29)',
};

const buttonStyle = {
  backgroundColor: '#45A29E',
};
class Projects extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='mb-3' sm='6'>
            <Card style={cardStyle}>
              <CardImg
                top
                height='200px'
                width='100%'
                src={thePatch}
                alt='The Patch'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4>The Patch</h4>
                  <h6>
                    A small Social Media Website developed with React and Redux,
                    with a Firebase back-end.
                  </h6>
                </CardTitle>
                <Button
                  href='https://cha-social.herokuapp.com/'
                  target='_blank'
                  block
                  style={buttonStyle}
                >
                  Website
                </Button>
                <Button
                  href='https://github.com/Cabbott118/Social-Media'
                  target='_blank'
                  block
                >
                  Front-End Code
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className='mb-3' sm='6'>
            <Card style={cardStyle}>
              <CardImg
                top
                height='200px'
                width='100%'
                src={VGH}
                alt='VGHypeman'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4>VGHypeman</h4>
                  <h6>
                    A Vue application that brings users closer to their favorite
                    video games. Built using Vue and MySQL.
                  </h6>
                </CardTitle>
                <Button
                  href='https://vghypeman.herokuapp.com/'
                  target='_blank'
                  block
                  style={buttonStyle}
                >
                  Website
                </Button>
                <Button
                  href='https://github.com/MatthewBryantDonovan/VGHypeman2.0'
                  target='_blank'
                  block
                >
                  Code
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
