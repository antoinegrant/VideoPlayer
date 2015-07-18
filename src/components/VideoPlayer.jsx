"use strict";

// React
import React from 'react/addons';

// Component
let VideoPlayer = class VideoPlayer extends React.Component {
  render() {

    // Assign the player props
    let playerProps = {
      id: 'video_' + this.props.video.id,
      preload: 'auto',
      'x-webkit-airplay': 'allow',
      style: {width: '100%'},
      controls: 'controls',
      poster: this.props.video.graphicsDomain + this.props.video.images[3].url,
      src: this.props.video.renditions[1].url
    };

    // Add the autoPlay property if we got the playCurrentVideo flag set to true
    if ( this.props.playCurrentVideo ) {
      playerProps.autoPlay = true;
    }

    return (
      <div className="nytd-player">
        <video {...playerProps}></video>
        <h1>Player - {this.props.video.title}</h1>
      </div>
    );
  }
};

module.exports = VideoPlayer;
