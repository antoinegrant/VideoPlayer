'use strict';

// React
import React from 'react';
import cx from 'classnames';

// Custom Components
import PlayBtn from 'components/common/PlayBtn';
import ResponsiveImage from 'components/common/ResponsiveImage';

// Component
class PlaylistItem extends React.Component {

  /**
   * Calls the onClick callback passed in from the properties
   */
  _onClick() {
    this.props.onClick(this.props.id);
  }

  /**
   * Renders the playlist item
   * @ return {ReactComponent}
   */
  render() {
    let classNames = cx({
      'is-playing': !!this.props.isPlaying
    });
    return (
      <li className={classNames} onClick={this._onClick.bind(this)}>
        <span className='thumbnail'>
          <ResponsiveImage graphicsDomain={this.props.graphicsDomain} images={this.props.images} />
          <PlayBtn isPlaying={this.props.isPlaying} />
        </span>
        <span className='category'>{this.props.playlistCat.title}</span>
        <span className='duration'>{this.props.duration}</span>
        <span className='title'>{this.props.title}</span><br />
      </li>
    );
  }

}

// Assign default properties
PlayBtn.defaultProps = {
  isPlaying: false
};

// Validate the properties
PlaylistItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  isPlaying: React.PropTypes.bool,
  playlistCat: React.PropTypes.object.isRequired,
  duration: React.PropTypes.number.isRequired
};

export default PlaylistItem;
