'use strict';

// React
import React from 'react/addons';
import cx from 'classnames';

// Custom Components
import PlayBtn from './common/PlayBtn';

// Component
let PlaylistItem = class PlaylistItem extends React.Component {

  _onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    let image = this.props.images[4];
    let classNames = cx({
      playing: !!this.props.playing
    });
    return (
      <li className={classNames} onClick={this._onClick.bind(this)}>
        <span className='thumbnail'>
          <img src={this.props.graphicsDomain + image.url} />
          <PlayBtn isPlaying={this.props.playing} />
        </span>
        <span className='category'>{this.props.playlistCat.title}</span>
        <span className='duration'>{this.props.duration}</span>
        <span className='title'>{this.props.title}</span><br />
      </li>
    );
  }

};

module.exports = PlaylistItem;
