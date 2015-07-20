'use strict';

// React
import React from 'react';

// Component
let PlayBtn = class PlayBtn extends React.Component {
  render() {
    let btn = (<span className="play-holder"> <p className="play"><i className="icon default"></i></p> </span>);
    if ( this.props.isPlaying ) {
      btn = (<span className="now-playing-holder">Now Playing</span>);
    }

    return btn;
  }
};

module.exports = PlayBtn;
