'use strict';

// React
import React from 'react';

// Component
let PlayBtn = class PlayBtn extends React.Component {
  render() {
    // Return the Now Playing element if the isPlaying propety is set tot true
    if ( this.props.isPlaying ) {
      return (<span className="now-playing-holder">Now Playing</span>);
    }
    // else return the play button
    return (<span className="play-holder"> <p className="play"><i className="icon default"></i></p> </span>);
  }
};

module.exports = PlayBtn;
