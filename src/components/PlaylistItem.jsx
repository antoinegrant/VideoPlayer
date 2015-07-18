"use strict";

// React
import React from 'react/addons';
import cx from 'classnames';

// Component
let PlaylistItem = class PlaylistItem extends React.Component {

  constructor(props) {
    super(props);
    // Set the inital component state
    this.state = {};
  }

  _onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    let image = this.props.images[2];
    let classNames = cx({
      playing: !!this.props.playing
    });
    return (
      <li className={classNames} onClick={this._onClick.bind(this)}>
        <span className="thumbnail"><img src={this.props.graphicsDomain + image.url} width={image.width} height={image.height} /></span><br />
        <span className="category">{this.props.playlistCat.title}</span><br />
        <span className="title">{this.props.title}</span><br />
        <span className="duration">{this.props.duration}</span>
      </li>
    );
  }

};

module.exports = PlaylistItem;
