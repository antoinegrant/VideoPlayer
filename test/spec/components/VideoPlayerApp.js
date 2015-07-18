"use strict";

describe('VideoPlayerApp', () => {
  let React = require('react/addons');
  let VideoPlayerApp, component;

  beforeEach(() => {
    // Clean up previous video container before running each specs
    if ( document.getElementsByClassName('nytd-player-container').length > 0 ) {
      for (var i = 0; i < document.getElementsByClassName('nytd-player-container').length; i++) {
        document.getElementsByTagName('body')[0].removeChild( document.getElementsByClassName('nytd-player-container').item(i) );
      }
    }
    let container = document.createElement('div');
    container.id = 'nytd-player-container';
    container.className = 'nytd-player-container';
    document.body.appendChild(container);

    VideoPlayerApp = require('components/VideoPlayerApp.jsx');
    component = React.createElement(VideoPlayerApp);
  });

  it('should create only one instance of VideoPlayerApp', () => {
    expect(component).toBeDefined();
    expect(document.getElementsByClassName('nytd-player-container').length).toBe(1);
  });

});
