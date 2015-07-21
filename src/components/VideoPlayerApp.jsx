'use strict';

// Vendors
import React from 'react';
import FastClick from 'fastclick';

// Polyfills
import 'fetch-polyfill';
import '../vendors/scripts/polyfills';

// Custom Components
import VideoPlayer from './VideoPlayer';
import Playlist from './Playlist';
import Spinner from './common/Spinner';

// CSS that gets injected in the page
import '../styles/VideoPlayerApp.scss';

// Assets

// Component
let VideoPlayerApp = class VideoPlayerApp extends React.Component {

  constructor(props) {
    super(props);
    // Set the initial component state
    this.state = {
      isLoading: true,
      currentVideo: null,
      playCurrentVideo: false
    };
  }

  componentWillMount() {

    // Simulate a wait time for the service call to complete
    window.setTimeout(() => {

      // Fetch the data
      fetch('/api/playlist.json')
        // Parse the response to json
        .then(r => r.json())
        .then(playlist => {
          // Update the state of the component with the json response and turning the isLoadig flag to false which triggers a re-render
          this.setState({
            // We got the data, we are not loading anymore.
            isLoading: false,
            // Hard-coded for this assignment, since we are not getting that information.
            playlistCat: {
              id: 'travel',
              title: 'Travel'
            },
            playlist: playlist,
            // Defaults to the first video
            currentVideo: playlist[0]
          });
        })
        // We got an issue with the api call, set the state of the component to warn the use if the issue and log the error.
        .catch(e => window.console.log(e));

    }, 100);

    // Attach a window reszie event to calculate the breakpoints
    let forceUpdate = false;
    let breakpoints = [
      {key: 'small', w: 500},  // Mobile
      {key: 'medium', w: 768},  // Tablet
      {key: 'big', w: 980},  // Desktop
      {key: 'x-big', w: 1200}  // Big Desktop
    ];
    let currentBreakpoint = '02';
    window.addEventListener('optimizedResize', () => {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if ( currentBreakpoint !== breakpoints[0].key && w < breakpoints[0].w ) {
          currentBreakpoint = breakpoints[0].key;
          forceUpdate = true;
        }
        else if ( currentBreakpoint !== breakpoints[1].key && w >= breakpoints[0].w && w < breakpoints[1].w ) {
          currentBreakpoint = breakpoints[1].key;
          forceUpdate = true;
        }
        else if ( currentBreakpoint !== breakpoints[2].key && w >= breakpoints[1].w && w < breakpoints[2].w ) {
          currentBreakpoint = breakpoints[2].key;
          forceUpdate = true;
        }
        else if ( currentBreakpoint !== breakpoints[3].key && w >= breakpoints[2].w && w < breakpoints[3].w ) {
          currentBreakpoint = breakpoints[3].key;
          forceUpdate = true;
        }
        if ( forceUpdate ) {
          window.console.log('forceUpdate', currentBreakpoint);
          forceUpdate = false;
          this.forceUpdate();
        }
    });

  }

  componentDidMount() {
    // Remove the tap delay for touch devices
    FastClick.attach(document.body);
  }

  componentDidUpdate() {
    // Scroll the page to reveal the player
    window.scrollTo(0, 0);
    // Return true so the component can update
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
        // We found the next video, stop the iteration.
        return false;
      }
      else if ( item.id === videoId ) {
        choosNext = true;
      }
      return true;
    });
    // If we didn't find the next video because we fail off the playlist array, choose the first video to loop back to the beginning.
    if ( !nextVideo ) {
      nextVideo = this.state.playlist[0];
    }

    this.setState({
      currentVideo: nextVideo,
      playCurrentVideo: true
    });
  }

  _renderLoading() {
    return (
      <div style={{position: 'relative', height: 300}}>
        <Spinner ref='loadingSpinner' color='#ccc' />
      </div>
    );
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
      <div className='nytd-player-inner'>
        {this.state.isLoading ? this._renderLoading() : this._renderVideoPlayer()}
      </div>
    );
  }

};


// Bootstrap the VideoPlayerApp to the DOM
React.render(<VideoPlayerApp />, document.getElementById('nytd-player-container')); // jshint ignore:line

module.exports = VideoPlayerApp;
