'use strict';

// React
import React from 'react/addons';

// Custom Components
import PlaylistItem from './PlaylistItem';

// Component
let Playlist = class Playlist extends React.Component {
  render() {
    return (
      <ul>
        {this.props.playlist.map(item => {
          return (
            <PlaylistItem
              key={item.id /* Assign a unique key to each playlist item */}
              playing={this.props.playCurrentVideo && this.props.currentVideo.id === item.id /* Set the playing flag by comparing the currentVideoId to the item.id */}
              onClick={this.props.selectVideo /* Assign a callback for the thumbnail click event */}
              playlistCat={this.props.playlistCat /* Pass in the playlist category */}
              {...item /* Pass in all properties of the playlit item using the spread operator */}
            />
          );
        })}
      </ul>
    );
  }
};

module.exports = Playlist;
