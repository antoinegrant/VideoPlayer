'use strict';

// React
import React from 'react';
import Spinner from 'spin';

// Custom Components
import PlayBtn from './common/PlayBtn';

// Component
let VideoPlayer = class VideoPlayer extends React.Component {

  componentDidMount() {
    this.playerState = {
      isPlaying: false
    };
  }

  componentDidUpdate() {

    // Get a reference to the loading spinner element
    if ( !this.loadingSpinner && this.refs.loadingSpinner ) {
      this.loadingSpinner = React.findDOMNode(this.refs.loadingSpinner);
    }

    // Init and get a reference to the spinner object
    if ( !this.spinner && this.loadingSpinner ) {
      this.spinner = new Spinner({
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
      });
    }

    // Get a reference to the video player element and add html5 video event listeners
    if ( !this.player ) {
      this.player = React.findDOMNode(this.refs.nytdPlayer);
      this.player.addEventListener('loadstart', this._onLoadStart.bind(this));
      this.player.addEventListener('loadeddata', this._onLoadedData.bind(this));
      this.player.addEventListener('play', this._onPlay.bind(this));
      this.player.addEventListener('pause', this._onPause.bind(this));
      this.player.addEventListener('ended', this._onEnded.bind(this));
    }

    // Load the new video src
    this.player.load();
  }

  // HTML5 vidoe event callbacks
  _onLoadStart() {
    window.console.log('_onLoadStart');
    if ( this.loadingSpinner && this.spinner ) {
      this.loadingSpinner.style.display = 'block';
      this.spinner.spin(this.loadingSpinner);
    }
  }
  _onLoadedData() {
    window.console.log('_onLoadedData');
  }
  _onPlay() {
    window.console.log('_onPlay');
    if ( this.loadingSpinner && this.spinner ) {
      this.loadingSpinner.style.display = 'none';
      this.spinner.spin(false);
    }
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

      playerElement = (<video ref='nytdPlayer' {...playerProps}></video>);

    } else {

      // Assign the poster props
      let posterProps = {
        id: 'video_' + this.props.video.id,
        src: this.props.video.graphicsDomain + this.props.video.images[3].url,
        onClick: this._setCurrentVideo.bind(this)
      };

      playerElement = (
        <div className='nytd-player-poster'>
          <img {...posterProps} />
          <PlayBtn />
        </div>
      );

    }

    return playerElement;
  }

  render() {
    return (
      <div>
        <div className='nytd-player-wrapper'>
          <div ref='loadingSpinner' className='loading-spinner'></div>
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
