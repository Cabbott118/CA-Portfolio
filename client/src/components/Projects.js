import React, { Component } from 'react';
import P3 from '../images/p3thumbnail.JPG';
import VGH from '../images/vgh.JPG';
import {
  Button,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row
} from 'reactstrap';
const cardStyle = {
  backgroundColor: 'rgb(25, 27, 29)'
};

const buttonStyle = {
  backgroundColor: '#45A29E'
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
                height='120px'
                width='100%'
                src={P3}
                alt='Project 3'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4>LoadCo</h4>
                </CardTitle>
                <Button
                  href='https://ca-company-tbd.herokuapp.com/'
                  target='_blank'
                  block
                  style={buttonStyle}
                >
                  Website
                </Button>
                <Button
                  href='https://github.com/Cabbott118/Project-3'
                  target='_blank'
                  block
                >
                  Code
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className='mb-3' sm='6'>
            <Card style={cardStyle}>
              <CardImg
                top
                height='120px'
                width='100%'
                src={VGH}
                alt='VGHypeman'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4>VGHypeman</h4>
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
