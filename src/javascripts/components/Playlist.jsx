'use strict';

// React
import React from 'react';

// Custom Components
import PlaylistItem from 'components/PlaylistItem';

// Component
class Playlist extends React.Component {

  /**
   * Renders the playlist
   * @return {ReactComponent}
   */
  render() {
    return (
      <div className="nytd-playlist-wrapper">
        <ul>
          {this.props.playlist.map(item => {
            return (
              <PlaylistItem
                key={item.id /* Assign a unique key to each playlist item */}
                isPlaying={this.props.playCurrentVideo && this.props.currentVideo.id === item.id /* Set the playing flag by comparing the currentVideoId to the item.id */}
                onClick={this.props.selectVideo /* Assign a callback for the thumbnail click event */}
                playlistCat={this.props.playlistCat /* Pass in the playlist category */}
                {...item /* Pass in all properties of the playlit item using the spread operator */}
              />
            );
          })}
        </ul>
      </div>
    );
  }

}

// Validate the properties
Playlist.propTypes = {
  playlist: React.PropTypes.array.isRequired,
  playlistCat: React.PropTypes.object.isRequired,
  selectVideo: React.PropTypes.func.isRequired,
  currentVideo: React.PropTypes.shape({
    id: React.PropTypes.string,
    summary: React.PropTypes.string,
    byline: React.PropTypes.string,
    graphicsDomain: React.PropTypes.string,
    images: React.PropTypes.array
  }).isRequired
};

export default Playlist;
