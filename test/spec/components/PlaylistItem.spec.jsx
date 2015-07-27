"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';

import PlaylistItem from 'components/PlaylistItem';

const componentProps = {
  id: '1',
  isPlaying: true,
  playlistCat: {
    id: 'travel',
    title: 'Title'
  },
  duration: 355100,
  graphicsDomain: "http://graphics8.nytimes.com/",
  images: [
      {
          "url": "images/2015/07/01/multimedia/36hours-pittsburgh/36hours-pittsburgh-videoSixteenByNine225.jpg",
          "width": 225,
          "height": 126,
          "type": "videoSixteenByNine225"
      },
      {
          "url": "images/2015/07/01/multimedia/36hours-pittsburgh/36hours-pittsburgh-videoSixteenByNine310.jpg",
          "width": 310,
          "height": 174,
          "type": "videoSixteenByNine310"
      },
      {
          "url": "images/2015/07/01/multimedia/36hours-pittsburgh/36hours-pittsburgh-videoSixteenByNine96.jpg",
          "width": 96,
          "height": 54,
          "type": "videoSixteenByNine96"
      },
      {
          "url": "images/2015/07/01/multimedia/36hours-pittsburgh/36hours-pittsburgh-videoSixteenByNine768.jpg",
          "width": 768,
          "height": 432,
          "type": "videoSixteenByNine768"
      },
      {
          "url": "images/2015/07/01/multimedia/36hours-pittsburgh/36hours-pittsburgh-videoSixteenByNine150.jpg",
          "width": 150,
          "height": 84,
          "type": "videoSixteenByNine150"
      }
  ]
};

describe('PlaylistItem', () => {
  let component;

  beforeEach(() => {
    component = createComponent(PlaylistItem, componentProps);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should format duration', () => {
    expect(PlaylistItem.prototype._formatDuration(355100)).toBe('5:55');
    expect(PlaylistItem.prototype._formatDuration(300000)).toBe('5:00');
    expect(PlaylistItem.prototype._formatDuration(301000)).toBe('5:01');
    expect(PlaylistItem.prototype._formatDuration(1000)).toBe('0:01');
    expect(PlaylistItem.prototype._formatDuration(100)).toBe('0:00');
  });

  it('should render the duration', () => {
    expect(component.props.children[2].props.children).toEqual('5:55');
  });

  describe('should render the video tag', () => {

    beforeEach(() => {
      component = createComponent(PlaylistItem, Object.assign(componentProps, {isPlaying: true}));
    });

    it('should render the duration', () => {
      expect(component.props.className).toEqual('is-playing');
    });

  });

});
