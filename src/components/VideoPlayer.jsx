'use strict';

// React
import React from 'react/addons';

// Component
let VideoPlayer = class VideoPlayer extends React.Component {

  componentDidMount() {
    this.playerState = {
      isPlaying: false
    };
  }

  componentDidUpdate() {
    if ( !this.player ) {
      this.player = React.findDOMNode(this.refs.nytdPlayer);
      this.player.addEventListener('play', this._onPlay.bind(this));
      this.player.addEventListener('pause', this._onPause.bind(this));
      this.player.addEventListener('ended', this._onEnded.bind(this));
    }
  }

  // HTML5 vidoe event callbacks
  _onPlay() {
    window.console.log('_onPlay');
  }
  _onPause() {
    window.console.log('_onPause');
  }
  _onEnded() {
    this.props.setNextVideo(this.props.video.id);
  }

  // Custom player events
  _videoTogglePlayState() {
    if ( this.playerState.isPlaying ) {
      this.player.pause();
      this.playerState.isPlaying = false;
    } else {
      this.player.play();
      this.playerState.isPlaying = true;
    }
  }

  // Sets this video has the current video
  _setCurrentVideo() {
    this.props.setCurrentVideo(this.props.video.id);
  }

  _renderPlayer() {
    let playerElement;

    if ( this.props.playCurrentVideo ) {

      // Assign the player props
      let playerProps = {
        id: 'video_' + this.props.video.id,
        preload: 'auto',
        'x-webkit-airplay': 'allow',
        style: {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'},
        controls: 'controls',
        src: this.props.video.renditions[1].url,
        // Events
        onClick: this._videoTogglePlayState.bind(this)
      };

      // Add the autoPlay property if we got the playCurrentVideo flag set to true
      if ( this.props.playCurrentVideo ) {
        playerProps.autoPlay = true;
        this.playerState.isPlaying = true;
      }

      playerElement = <video ref='nytdPlayer' {...playerProps}></video>;

    } else {

      // Assign the poster props
      let posterProps = {
        id: 'video_' + this.props.video.id,
        style: {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'},
        src: this.props.video.graphicsDomain + this.props.video.images[3].url,
        onClick: this._setCurrentVideo.bind(this)
      };

      playerElement = <img {...posterProps} />;

    }

    return playerElement;
  }

  render() {
    return (
      <div>
        <div className='nytd-player-wrapper'>
          {this._renderPlayer()}
        </div>
        <div className='nytd-player-description'>
          <div className='nytd-player-description-head'>
            <h4>{this.props.playlistCat.title}</h4>
            <h1>{this.props.video.title}</h1>
          </div>
          <div className='nytd-player-description-content'>
            <h5>By {this.props.video.byline}</h5>
            <p>{this.props.video.summary}</p>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = VideoPlayer;
