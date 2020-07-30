import React, { Component } from 'react';
import RentNet from '../images/RentNet.JPG';
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

const spanStyle = {
  color: '#45A29E',
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
                src={RentNet}
                alt='Rent-Net'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4 style={spanStyle}>Rent-Net</h4>
                  <h6>
                    Rent-Net is a website that allows users to list and rent
                    trailers in one convenient location after simply registering
                    an account.
                  </h6>
                  <h6>
                    <span style={spanStyle}>Technologies Utilized:</span> React,
                    Material-UI, Redux, MongoDB, Node, Express
                  </h6>
                </CardTitle>
                <Button
                  href='https://rent-net.herokuapp.com/'
                  target='_blank'
                  block
                  style={buttonStyle}
                >
                  Website
                </Button>
                <Button
                  href='https://github.com/Cabbott118/Rentnet'
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
                height='200px'
                width='100%'
                src={thePatch}
                alt='The Patch'
              />
              <CardBody>
                <CardTitle className='text-center'>
                  <h4 style={spanStyle}>The Patch</h4>
                  <h6>
                    A simple social media app featuring unique user accounts,
                    posts, likes, and comments.
                  </h6>
                  <h6>
                    <span style={spanStyle}>Technologies Utilized:</span> React,
                    Redux, MaterialUI, Node, Express, Firebase
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
                  <h4 style={spanStyle}>VGHypeman</h4>
                  <h6>
                    VGHypeman is a video game search engine that brings general
                    information, Youtube videos, and Twitch streams to your
                    fingertips with the click of a button.
                  </h6>
                  <h6>
                    <span style={spanStyle}>Technologies Utilized:</span> Vue,
                    Materialize, Slick.js, Sequelize, Node, Express
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
