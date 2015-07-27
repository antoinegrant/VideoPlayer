'use strict';

// Vendors
import React from 'react';
import FastClick from 'fastclick';

// Polyfills
import 'fetch-polyfill';
import 'vendors/javascripts/polyfills';

// Custom Components
import VideoPlayer from 'components/VideoPlayer';
import Playlist from 'components/Playlist';
import Spinner from 'components/common/Spinner';

// CSS that gets injected in the page
import 'stylesheets/VideoPlayerApp';

// Assets

// Component
class VideoPlayerApp extends React.Component {

  constructor(props) {
    super(props);
    // Set the initial component state
    this.state = {
      isLoading: true,
      playCurrentVideo: false,
      playlistCat: {},
      playlist: [],
      currentVideo: {}
    };
  }

  /**
   * Gets the data from the server and sets up the responsive logic.
   */
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
        .catch(e => {
          window.console.error('The service call failed.', e);
        });

    }, 10);

    // Attach a window reszie event to calculate the breakpoints
    let forceUpdate = false;
    let breakpoints = [
      {key: 'small', w: 500},  // Mobile
      {key: 'medium', w: 768},  // Tablet
      {key: 'big', w: 980},  // Desktop
      {key: 'x-big', w: 1200}  // Large Desktop
    ];
    let currentBreakpoint = 'small';
    window.addEventListener('optimizedResize', () => {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // If the current break point is not small and the client width is smaller than the 500, force update the component.
        if ( currentBreakpoint !== breakpoints[0].key && w < breakpoints[0].w ) {
          currentBreakpoint = breakpoints[0].key;
          forceUpdate = true;
        }
        // If the current break point is not medium and the client width is smaller than the 768, force update the component.
        else if ( currentBreakpoint !== breakpoints[1].key && w >= breakpoints[0].w && w < breakpoints[1].w ) {
          currentBreakpoint = breakpoints[1].key;
          forceUpdate = true;
        }
        // If the current break point is not big and the client width is smaller than the 980, force update the component.
        else if ( currentBreakpoint !== breakpoints[2].key && w >= breakpoints[1].w && w < breakpoints[2].w ) {
          currentBreakpoint = breakpoints[2].key;
          forceUpdate = true;
        }
        // If the current break point is not x-big and the client width is smaller than the 1200, force update the component.
        else if ( currentBreakpoint !== breakpoints[3].key && w >= breakpoints[2].w && w < breakpoints[3].w ) {
          currentBreakpoint = breakpoints[3].key;
          forceUpdate = true;
        }
        // If we found that the breakpoint has changes, force update the component.
        if ( forceUpdate ) {
          forceUpdate = false;
          this.forceUpdate();
        }
    });

  }

  /**
   * The component is now rendered to the DOM, lets add the fastclick library to get rid of the tap delay on touch devices.
   */
  componentDidMount() {
    FastClick.attach(document.body);
  }

  /**
   * Set the current video on the component state.
   */
  _setCurrentVideo(videoId) {
    // Scroll the page to reveal the player
    window.scrollTo(0, 0);
    // Set current video on the component state.
    this.setState({
      currentVideo: this.state.playlist.filter(item => item.id === videoId)[0],
      playCurrentVideo: true
    });
  }

  /**
   * Sets the next video as the current video and set the playCurrentVideo to true so the video starts playing.
   * If we got to the end of the playlist, play the playlist from the begining.
   */
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
    // Set current video on the component state.
    this.setState({
      currentVideo: nextVideo,
      playCurrentVideo: true
    });
  }

  /**
   * Renders a spinner
   * @return {ReactComponent}
   */
  _renderLoading() {
    return (
      <div style={{position: 'relative', height: 300}}>
        <Spinner ref='loadingSpinner' color='#ccc' />
      </div>
    );
  }

  /**
   * Renders the video player and the playlist.
   * @return {ReactComponent}
   */
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

  /**
   * Renders the wrapper for the spinner or the video player depending on the isLoading flag.
   * @return {ReactComponent}
   */
  render() {
    return (
      <div className='nytd-player-inner'>
        {this.state.isLoading ? this._renderLoading() : this._renderVideoPlayer()}
      </div>
    );
  }

}

export default VideoPlayerApp;
