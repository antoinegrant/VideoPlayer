"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';
import ResponsiveImage from 'components/common/ResponsiveImage';

describe('ResponsiveImage', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ResponsiveImage, {
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
      ]
    });
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be an img tag', () => {
    expect(component.type).toEqual('img');
  });

  it('should be an img tag', () => {
    expect(component.props.src).not.toEqual('');
  });

});
