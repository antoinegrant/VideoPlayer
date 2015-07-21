'use strict';

// React
import React from 'react';

// Component
let ResponsiveImage = class ResponsiveImage extends React.Component {

  componentDidMount() {
    this.$image = React.findDOMNode(this.refs.image);
    this.imageWidth = this.$image.offsetWidth;
    this.forceUpdate();
  }

  render() {
    // Sort the images from small to Big
    this.props.images.sort((a, b) => a.width > b.width);
    // Defaults to the smallest image
    let image = this.props.images[0];
    // Find the closest image width to the current image width
    let isNextUp = false;
    this.props.images.forEach(img => {
      if ( isNextUp === true ) {
        isNextUp = false;
        image = img;
      }
      if ( parseInt(img.width, 10) <= parseInt(this.imageWidth, 10) ) {
        isNextUp = true;
      }
    });
    return (<img ref='image' src={this.props.graphicsDomain + image.url} />);
  }
};

module.exports = ResponsiveImage;
