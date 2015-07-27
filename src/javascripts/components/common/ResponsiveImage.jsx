'use strict';

// React
import React from 'react';

// Component
class ResponsiveImage extends React.Component {

  componentDidMount() {
    this.$image = React.findDOMNode(this.refs.image);
    this.imageWidth = this.$image.offsetWidth;
    this.forceUpdate();
  }

  /**
   * Finds the closest image width to the current image width and renders the image tag.
   * @return {ReactComponent}
   */
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
      // If the image width is smaller or equal to the current image width, tur on the flag to get the next image from the list.
      if ( parseInt(img.width, 10) <= parseInt(this.imageWidth, 10) ) {
        isNextUp = true;
      }
    });
    return (<img ref='image' src={this.props.graphicsDomain + image.url} />);
  }
}

// Validate the properties
ResponsiveImage.propTypes = {
  images: React.PropTypes.array.isRequired,
  graphicsDomain: React.PropTypes.string.isRequired
};

export default ResponsiveImage;
