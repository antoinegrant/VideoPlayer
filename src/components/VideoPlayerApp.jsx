'use strict';

// React
import React from 'react';
import Spinner from 'spin';
import FastClick from 'fastclick';

// Polyfills
import 'fetch-polyfill';

// Custom Components
import VideoPlayer from './VideoPlayer';
import Playlist from './Playlist';

// CSS that gets injected in the page
// import 'normalize.css';
import '../styles/VideoPlayerApp.scss';

// Assets

// Component
let VideoPlayerApp = class VideoPlayerApp extends React.Component {

  constructor(props) {
    super(props);
    // Set the inital component state
    this.state = {
      isLoading: true,
      currentVideo: null,
      playCurrentVideo: false
    };
  }

  componentWillMount() {

    /* Simulate a wait time for the service call to complete */
    window.setTimeout(() => {

      // Fetch the data
      fetch('/api/playlist.json')
        // Parse the response to json
        .then(r => r.json())
        .then(json => {
          // Update the state of the component with the json response and turning the isLoadig flag to false which triggers a re-render
          this.setState({
            isLoading: false,
            playlistCat: {  /* Hardoced for the assignment */
              id: 'travel',
              title: 'Travel'
            },
            playlist: json,
            currentVideo: json[0]  /* Defaults to the first video */
          });
        })
        // We got an issue with the api call, set the state of the component to warn the use if the issue and log the error.
        .catch(e => window.console.log(e));

    }, 100);
  }

  componentDidMount() {

    // Enable fastclick
    FastClick.attach(document.body);

    // Get a reference to the loading spinner element
    if ( !this.loadingSpinner && this.refs.loadingSpinner ) {
      this.loadingSpinner = React.findDOMNode(this.refs.loadingSpinner);
    }

    // Show a spinner while the data is fetched
    this.spinner = new Spinner({
      lines: 13,
      length: 9,
      width: 2,
      radius: 20,
      corners: 1,
      color: '#666',
      opacity: 0.15,
      rotate: 0,
      direction: 1,
      speed: 1.5,
      trail: 78,
      fps: 20,
      zIndex: 2e9,
      hwaccel: true
    }).spin(this.loadingSpinner);
  }

  componentDidUpdate() {
    // Scroll the page to reveal the player
    window.scrollTo(0, 0);
    // If we are done loading, we must remove the spinner
    if ( this.spinner ) {
      this.spinner.spin(false);
      delete this.spinner;
    }
    return true;
  }

  _setCurrentVideo(videoId) {
    this.setState({
      currentVideo: this.state.playlist.filter(item => item.id === videoId)[0],
      playCurrentVideo: true
    });
  }

  _setNextVideo(videoId) {
    let nextVideo;
    let choosNext = false;
    // Iterate of the playlist to find the current video and turn the flag to choose the next video in the playlist.
    this.state.playlist.every(item => {
      if ( choosNext === true ) {
        nextVideo = item;
        return false;
      }
      else if ( item.id === videoId ) {
        choosNext = true;
      }
      return true;
    });
    // If we didn't find the next video because we fail off the playlist, choose the first video to loop back to the begining.
    if ( !nextVideo ) {
      nextVideo = this.state.playlist[0];
    }

    this.setState({
      currentVideo: nextVideo,
      playCurrentVideo: true
    });
  }

  _renderLoading() {
    return (<div ref='loadingSpinner' className="loading-pinner" style={{height: 300}}></div>);
  }

  _renderVideoPlayer() {
    return (
      <div>
        <VideoPlayer
          key='video-player'
          video={this.state.currentVideo}
          playCurrentVideo={this.state.playCurrentVideo}
          playlistCat={this.state.playlistCat}
          setCurrentVideo={this._setCurrentVideo.bind(this)}
          setNextVideo={this._setNextVideo.bind(this)}
        />
        <Playlist
          key='playlist'
          currentVideo={this.state.currentVideo}
          playCurrentVideo={this.state.playCurrentVideo}
          playlistCat={this.state.playlistCat}
          playlist={this.state.playlist}
          selectVideo={this._setCurrentVideo.bind(this)}
        />
    </div>
    );
  }

  render() {
    return (
      <div className="nytd-player-inner">
        {this.state.isLoading ? this._renderLoading() : this._renderVideoPlayer()}
      </div>
    );
  }

};


// Bootstrap the VideoPlayerApp to the DOM
React.render(<VideoPlayerApp />, document.getElementById('nytd-player-container')); // jshint ignore:line

module.exports = VideoPlayerApp;
