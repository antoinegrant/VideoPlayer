'use strict';

// React
import React from 'react';
// import Spin from 'spin';

// Custom Components
import PlayBtn from 'components/common/PlayBtn';
import Spinner from 'components/common/Spinner';
import ResponsiveImage from 'components/common/ResponsiveImage';

// Component
class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    // Set the inital component state
    this.state = {
      isVideoLoading: false,
      isVideoPlaying: this.props.playCurrentVideo
    };
  }

  componentDidUpdate() {
    // If we don't have a reference to the video tag element
    if ( !this.$player && this.refs.nytdPlayer ) {
      // Get a reference to the video player element
      this.$player = React.findDOMNode(this.refs.nytdPlayer);
      // Add html5 video event listeners
      this.$player.addEventListener('loadstart', this._onLoadStart.bind(this));
      this.$player.addEventListener('loadeddata', this._onLoadedData.bind(this));
      this.$player.addEventListener('play', this._onPlay.bind(this));
      this.$player.addEventListener('pause', this._onPause.bind(this));
      this.$player.addEventListener('ended', this._onEnded.bind(this));
    }
  }

  /**
   * HTML5 video event callbacks
   */
  _onLoadStart() {
    this.setState({
      isVideoLoading: true
    });
  }
  _onLoadedData() {
    this.$player.play();
  }
  _onPlay() {
    this.setState({
      isVideoPlaying: true,
      isVideoLoading: false
    });
  }
  _onPause() {}
  _onEnded() {
    // Invoke the callback to the set the next video and pass in the current video id
    this.props.setNextVideo(this.props.video.id);
  }

  /**
   * Toggles the video player play state [play|pause]
   */
  _videoTogglePlayState() {
    if ( this.state.isVideoPlaying ) {
      this.$player.pause();
    } else {
      this.$player.play();
    }
    this.setState({
      isVideoPlaying: !this.state.isVideoPlaying
    });
  }

  /**
   * Sets this video has the current video
   */
  _setCurrentVideo() {
    this.props.setCurrentVideo(this.props.video.id);
  }

  /**
   * Renders the poster or the video player based on the property playCurrentVideo
   * @return {ReactComponent}
   */
  _renderPlayer() {

    // Assign the player props
    let playerProps = {
      id: 'video_' + this.props.video.id,
      preload: 'auto',
      'x-webkit-airplay': 'allow',
      style: {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'},
      controls: 'controls',
      src: this.props.video.renditions[1].url,
      autoPlay: this.state.isVideoPlaying,
      // Events
      onClick: this._videoTogglePlayState.bind(this)
    };

    // Assign the poster props
    let posterProps = {
      id: 'video_' + this.props.video.id
    };

    // If we don't want to play video on load, show a poster instead
    if ( !this.props.playCurrentVideo ) {
      return (
        <div className='nytd-player-poster' onClick={this._setCurrentVideo.bind(this)}>
          <ResponsiveImage graphicsDomain={this.props.video.graphicsDomain} images={this.props.video.images} {...posterProps} />
          <PlayBtn />
        </div>
      );
    }

    return (<video ref='nytdPlayer' {...playerProps}></video>);
  }

  /**
   * Renders the component to the DOM
   */
  render() {
    return (
      <div className='nytd-player-description-wrapper'>
        <div className='nytd-player-wrapper'>
          {/* The spinner is shown based whether the isVideoLoading flag is true */}
          <Spinner ref='loadingSpinner' stopped={!this.state.isVideoLoading} />
          {/* Render the poster or the video player */}
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
}

// Define the default properties
VideoPlayer.defaultProps = {
  playCurrentVideo: false
};

// Validate the properties
VideoPlayer.propTypes = {
  playCurrentVideo: React.PropTypes.bool,
  setNextVideo: React.PropTypes.func.isRequired,
  setCurrentVideo: React.PropTypes.func.isRequired,
  playlistCat: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string
  }).isRequired,
  video: React.PropTypes.shape({
    id: React.PropTypes.string,
    summary: React.PropTypes.string,
    byline: React.PropTypes.string,
    graphicsDomain: React.PropTypes.string,
    images: React.PropTypes.array,
    renditions: React.PropTypes.array
  }).isRequired
};

export default VideoPlayer;
