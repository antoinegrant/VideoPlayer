'use strict';

// React
import React from 'react';
import Spin from 'spin';

// Component
class Spinner extends React.Component {

  componentDidMount() {
    // Instantiate the Spin object
    this.spinner = new Spin(this.props);
    this.spinner.spin(React.findDOMNode(this.refs.container));
    // If the property stopped as been passed as true, stop the spinner
    if ( this.props.stopped ) {
      this.spinner.stop();
    }
  }

  componentWillReceiveProps(nextProps) {
    // If the component re-rendered with the stopped property set to true, stop the spinner
    if (nextProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    }
    // else if the stopped property set to false, enable the spinner
    else if (!nextProps.stopped && this.props.stopped === true) {
      this.spinner.spin(React.findDOMNode(this.refs.container));
    }
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return (
      <span style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}} ref="container" />
    );
  }
}

// Set the default props
Spinner.defaultProps = {
  stopped: false,
  lines: 13,
  length: 9,
  width: 2,
  radius: 20,
  corners: 1,
  color: '#fff',
  opacity: 0.15,
  rotate: 0,
  direction: 1,
  speed: 1.5,
  trail: 78,
  fps: 20,
  zIndex: 2e9,
  hwaccel: true
};

// Validate the properties
Spinner.propTypes = {
  stopped: React.PropTypes.bool
};

module.exports = Spinner;
