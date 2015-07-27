"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';
import PlayBtn from 'components/common/PlayBtn';

describe('PlayBtn', () => {
  let component;

  beforeEach(() => {
    component = createComponent(PlayBtn);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render the element with class .play-holder', () => {
    expect(component.props.className).toEqual('play-holder');
  });

  describe('with prop isPlaying', () => {

    beforeEach(() => {
      component = createComponent(PlayBtn, {
        isPlaying: true
      });
    });

    it('should render the element with class .now-playing-holder', () => {
      expect(component.props.className).toEqual('now-playing-holder');
    });

  });

});
