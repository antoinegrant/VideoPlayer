"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';

import playlistJSON from 'mocks/playlist.json';
import Playlist from 'components/Playlist';
import PlaylistItem from 'components/PlaylistItem';

describe('Playlist', () => {
  let component;

  beforeEach(() => {

    component = createComponent(Playlist, {
      playlist: playlistJSON,
      playlistCat: {
        id: 'travel',
        title: 'Travel'
      },
      selectVideo: () => {},
      currentVideo: {
        id: null,
        summary: null,
        byline: null,
        graphicsDomain: null,
        images: null,
      }
    });

  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render a list PlaylistItem', () => {
    expect(component.props.children.props.children.length).toBe(4);
    // I should be asserting the children are any instance of PlaylistItem,
    // but I wasn't entirely sure how to achieve that while testing React with the shallowRenderer.
    // Asserting that the function have the same name will do for now.
    expect(component.props.children.props.children[0].type.name).toEqual(PlaylistItem.name);
  });

});
