"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';

import VideoPlayer from 'components/VideoPlayer';
import PlaylistItem from 'components/PlaylistItem';

const componentProps = {
  playCurrentVideo: false,
  setNextVideo: () => {},
  setCurrentVideo: () => {},
  playlistCat: {
    id: 'travel',
    title: 'Travel'
  },
  video: {
      "index": 0,
      "id":"100000003776495",
      "title": "36 Hours in Pittsburgh",
      "summary": "Beyond Pittsburgh’s pretty downtown, transformation and momentum reign, with former industrial areas giving way to restaurants, shops and art venues.",
      "byline": "Fritzie Andrade, Louie Alfaro, Jessey Dearing, Andrew Hida and Aaron Wolfe",
      "duration": 355100,
      "keywords": [
          "Travel and Vacations",
          "Pittsburgh (Pa)"
      ],
      "graphicsDomain": "http://graphics8.nytimes.com/",
      "images": [
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
      ],
      "renditions": [
          {
              "url": "http://vp.nyt.com/video/2015/07/15/33738_1_36hours-pittsburgh_wg_480p.webm",
              "width": 854,
              "height": 480,
              "mimetype": "",
              "video_codec": "VP8",
              "type": "video_480p_webm",
              "fileSize": 69511261
          },
          {
              "url": "http://vp.nyt.com/video/2015/07/15/33738_1_36hours-pittsburgh_wg_480p.mp4",
              "width": 854,
              "height": 480,
              "mimetype": "",
              "video_codec": "H264",
              "type": "video_480p_mp4",
              "fileSize": 67661034
          }
      ]
  }
};

describe('VideoPlayer', () => {
  let component;

  beforeEach(() => {
    component = createComponent(VideoPlayer, componentProps);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render the poster frame', () => {
    // console.log(component.props.children[0].props.children[1].props.className);
    expect(component.props.children[0].props.children[1].props.className).toEqual('nytd-player-poster');
  });

  describe('should render the video tag', () => {

    beforeEach(() => {
      component = createComponent(VideoPlayer, Object.assign(componentProps, {playCurrentVideo: true}));
    });

    it('should render the video tag', () => {
      expect(component.props.children[0].props.children[1].type).toEqual('video');
    });

    it('should render the description title', () => {
      expect(component.props.children[1].props.children[0].props.children[1].props.children).toEqual('36 Hours in Pittsburgh');
    });

    it('should render the description summary', () => {
      expect(component.props.children[1].props.children[1].props.children[1].props.children).toEqual('Beyond Pittsburgh’s pretty downtown, transformation and momentum reign, with former industrial areas giving way to restaurants, shops and art venues.');
    });

  });

});
