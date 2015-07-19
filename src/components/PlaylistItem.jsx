'use strict';

// React
import React from 'react/addons';
import cx from 'classnames';

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

    let cta = (<span className="play-holder"> <p className="play"><i className="icon default"></i></p> </span>);
    if ( this.props.playing ) {
      cta = (<span className="now-playing-holder">Now Playing</span>);
    }

    return (
      <li className={classNames} onClick={this._onClick.bind(this)}>
        <span className='thumbnail'>
          <img src={this.props.graphicsDomain + image.url} />
          {cta}
        </span>
        <span className='category'>{this.props.playlistCat.title}</span>
        <span className='duration'>{this.props.duration}</span>
        <span className='title'>{this.props.title}</span><br />
      </li>
    );
  }

};

module.exports = PlaylistItem;
