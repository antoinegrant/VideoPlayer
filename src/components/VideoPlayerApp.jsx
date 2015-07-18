"use strict";

// React
import React from 'react/addons';

// Custom Components
import VideoPlayer from './VideoPlayer';
import Playlist from './Playlist';

// CSS that gets injected in the page
import 'normalize.css';
import '../styles/main.scss';

// Assets
// import imageURL from '../images/yeoman.png';

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
    // Fetch the data
    fetch('/api/playlist.json')
      // Parse the response to json
      .then(r => r.json())
      .then(json => {
        // Update the state of the component with the json response and turning the isLoadig flag to false which triggers a re-render
        this.setState({
          isLoading: false,
          playlistCat: {
            id: 'travel',
            title: 'Travel'
          },
          playlist: json,
          currentVideo: json[0]
        });
      })
      // We got an issue with the api call, set the state of the component to warn the use if the issue and log the error.
      .catch(e => window.console.log(e));
  }

  _setCurrentVideo(videoId) {
    this.setState({
      currentVideo: this.state.playlist.filter(item => item.id === videoId)[0],
      playCurrentVideo: true
    });
  }

  _renderLoading() {
    return (
      <h1>Loading...</h1>
    );
  }

  _renderVideoPlayer() {
    return (
      <div>
        <VideoPlayer
          video={this.state.currentVideo}
          playCurrentVideo={this.state.playCurrentVideo}
        />
        <Playlist
          currentVideo={this.state.currentVideo}
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
