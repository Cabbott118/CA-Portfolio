import React, { Component } from 'react';
import { Container } from 'reactstrap';

const thumbnailStyle = {
  width: '50%'
};

class Thumbnail extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <div>
          <img src={this.props.image} style={thumbnailStyle} alt='Project' />
          {this.props.title}
        </div>
      </Container>
    );
  }
}

export default Thumbnail;
