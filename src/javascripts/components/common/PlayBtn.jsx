'use strict';

// React
import React from 'react';

// Component
class PlayBtn extends React.Component {

  /**
   * Renders play button or if the isPlaying flag, render the Now playing overlay.
   * @return {ReactComponent}
   */
  render() {
    // Return the Now Playing element if the isPlaying propety is set tot true
    if ( this.props.isPlaying ) {
      return (<span className="now-playing-holder">Now Playing</span>);
    }
    // else return the play button
    return (<span className="play-holder"> <p className="play"><i className="icon default"></i></p> </span>);
  }

}

// Assign default properties
PlayBtn.defaultProps = {
  isPlaying: false
};

// Validate the properties
PlayBtn.propTypes = {
  isPlaying: React.PropTypes.bool
};

export default PlayBtn;
