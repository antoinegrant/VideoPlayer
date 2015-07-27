'use strict';

import React from 'react';
import VideoPlayerApp from 'components/VideoPlayerApp';

// Bootstrap the VideoPlayerApp to the DOM
React.render(React.createElement(VideoPlayerApp), document.getElementById('nytd-player-container')); // jshint ignore:line

// It's possible to instantiate multiple video players
// React.render(React.createElement(VideoPlayerApp), document.getElementById('nytd-player-container-2')); // jshint ignore:line
