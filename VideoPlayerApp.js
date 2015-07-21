webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(true) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_require__.h()) >= 0;
		};
		var check = function check() {
			module.hot.check(function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {abort: 1, fail: 1}) {
						console.warn("[HMR] Cannot check for update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
					} else {
						console.warn("[HMR] Update check failed: " + err.stack || err.message);
					}
					return;
				}
	
				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}
	
				module.hot.apply({
					ignoreUnaccepted: true
				}, function(err, renewedModules) {
					if(err) {
						if(module.hot.status() in {abort: 1, fail: 1}) {
							console.warn("[HMR] Cannot apply update. Need to do a full reload!");
							console.warn("[HMR] " + err.stack || err.message);
						} else {
							console.warn("[HMR] Update failed: " + err.stack || err.message);
						}
						return;
					}
	
					if(!upToDate()) {
						check();
					}
	
					__webpack_require__(2)(updatedModules, renewedModules);
	
					if(upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function (eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },

/***/ 2:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(updatedModules, renewedModules) {
		var unacceptedModules = updatedModules.filter(function(moduleId) {
			return renewedModules && renewedModules.indexOf(moduleId) < 0;
		});
	
		if(unacceptedModules.length > 0) {
			console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
			unacceptedModules.forEach(function(moduleId) {
				console.warn("[HMR]  - " + moduleId);
			});
		}
	
		if(!renewedModules || renewedModules.length === 0) {
			console.log("[HMR] Nothing hot updated.");
		} else {
			console.log("[HMR] Updated modules:");
			renewedModules.forEach(function(moduleId) {
				console.log("[HMR]  - " + moduleId);
			});
		}
	};


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(165), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(61); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	// Vendors
	
	var _react = __webpack_require__(61);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _spin = __webpack_require__(163);
	
	var _spin2 = _interopRequireDefault(_spin);
	
	var _fastclick = __webpack_require__(164);
	
	var _fastclick2 = _interopRequireDefault(_fastclick);
	
	// Polyfills
	
	__webpack_require__(173);
	
	// Custom Components
	
	var _VideoPlayer = __webpack_require__(174);
	
	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);
	
	var _Playlist = __webpack_require__(179);
	
	var _Playlist2 = _interopRequireDefault(_Playlist);
	
	// CSS that gets injected in the page
	// import 'normalize.css';
	
	__webpack_require__(182);
	
	// Assets
	
	// Component
	var VideoPlayerApp = (function (_React$Component) {
	  _inherits(VideoPlayerApp, _React$Component);
	
	  function VideoPlayerApp(props) {
	    _classCallCheck(this, VideoPlayerApp);
	
	    _get(Object.getPrototypeOf(VideoPlayerApp.prototype), 'constructor', this).call(this, props);
	    // Set the inital component state
	    this.state = {
	      isLoading: true,
	      currentVideo: null,
	      playCurrentVideo: false
	    };
	  }
	
	  _createClass(VideoPlayerApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this = this;
	
	      /* Simulate a wait time for the service call to complete */
	      window.setTimeout(function () {
	
	        // Fetch the data
	        fetch('/api/playlist.json')
	        // Parse the response to json
	        .then(function (r) {
	          return r.json();
	        }).then(function (json) {
	          // Update the state of the component with the json response and turning the isLoadig flag to false which triggers a re-render
	          _this.setState({
	            isLoading: false,
	            playlistCat: { /* Hardoced for the assignment */
	              id: 'travel',
	              title: 'Travel'
	            },
	            playlist: json,
	            currentVideo: json[0] /* Defaults to the first video */
	          });
	        })
	        // We got an issue with the api call, set the state of the component to warn the use if the issue and log the error.
	        ['catch'](function (e) {
	          return window.console.log(e);
	        });
	      }, 100);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      // Enable fastclick
	      _fastclick2['default'].attach(document.body);
	
	      // Get a reference to the loading spinner element
	      if (!this.loadingSpinner && this.refs.loadingSpinner) {
	        this.loadingSpinner = _react2['default'].findDOMNode(this.refs.loadingSpinner);
	      }
	
	      // Show a spinner while the data is fetched
	      this.spinner = new _spin2['default']({
	        lines: 13,
	        length: 9,
	        width: 2,
	        radius: 20,
	        corners: 1,
	        color: '#666',
	        opacity: 0.15,
	        rotate: 0,
	        direction: 1,
	        speed: 1.5,
	        trail: 78,
	        fps: 20,
	        zIndex: 2e9,
	        hwaccel: true
	      }).spin(this.loadingSpinner);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      // Scroll the page to reveal the player
	      window.scrollTo(0, 0);
	      // If we are done loading, we must remove the spinner
	      if (this.spinner) {
	        this.spinner.spin(false);
	        delete this.spinner;
	      }
	      return true;
	    }
	  }, {
	    key: '_setCurrentVideo',
	    value: function _setCurrentVideo(videoId) {
	      this.setState({
	        currentVideo: this.state.playlist.filter(function (item) {
	          return item.id === videoId;
	        })[0],
	        playCurrentVideo: true
	      });
	    }
	  }, {
	    key: '_setNextVideo',
	    value: function _setNextVideo(videoId) {
	      var nextVideo = undefined;
	      var choosNext = false;
	      // Iterate of the playlist to find the current video and turn the flag to choose the next video in the playlist.
	      this.state.playlist.every(function (item) {
	        if (choosNext === true) {
	          nextVideo = item;
	          return false;
	        } else if (item.id === videoId) {
	          choosNext = true;
	        }
	        return true;
	      });
	      // If we didn't find the next video because we fail off the playlist, choose the first video to loop back to the begining.
	      if (!nextVideo) {
	        nextVideo = this.state.playlist[0];
	      }
	
	      this.setState({
	        currentVideo: nextVideo,
	        playCurrentVideo: true
	      });
	    }
	  }, {
	    key: '_renderLoading',
	    value: function _renderLoading() {
	      return _react2['default'].createElement('div', { ref: 'loadingSpinner', className: 'loading-pinner', style: { height: 300 } });
	    }
	  }, {
	    key: '_renderVideoPlayer',
	    value: function _renderVideoPlayer() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_VideoPlayer2['default'], {
	          key: 'video-player',
	          video: this.state.currentVideo,
	          playCurrentVideo: this.state.playCurrentVideo,
	          playlistCat: this.state.playlistCat,
	          setCurrentVideo: this._setCurrentVideo.bind(this),
	          setNextVideo: this._setNextVideo.bind(this)
	        }),
	        _react2['default'].createElement(_Playlist2['default'], {
	          key: 'playlist',
	          currentVideo: this.state.currentVideo,
	          playCurrentVideo: this.state.playCurrentVideo,
	          playlistCat: this.state.playlistCat,
	          playlist: this.state.playlist,
	          selectVideo: this._setCurrentVideo.bind(this)
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'nytd-player-inner' },
	        this.state.isLoading ? this._renderLoading() : this._renderVideoPlayer()
	      );
	    }
	  }]);
	
	  return VideoPlayerApp;
	})(_react2['default'].Component);
	
	// Bootstrap the VideoPlayerApp to the DOM
	_react2['default'].render(_react2['default'].createElement(VideoPlayerApp, null), document.getElementById('nytd-player-container')); // jshint ignore:line
	
	module.exports = VideoPlayerApp;
	
	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(176), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(61))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "VideoPlayerApp.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getRootInstancesFromReactMount = __webpack_require__(6);
	
	var injectedProvider = null,
	    didWarn = false;
	
	function warnOnce() {
	  if (!didWarn) {
	    console.warn(
	      'It appears that React Hot Loader isn\'t configured correctly. ' +
	      'If you\'re using NPM, make sure your dependencies don\'t drag duplicate React distributions into their node_modules and that require("react") corresponds to the React instance you render your app with.',
	      'If you\'re using a precompiled version of React, see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react for integration instructions.'
	    );
	  }
	
	  didWarn = true;
	}
	
	var RootInstanceProvider = {
	  injection: {
	    injectProvider: function (provider) {
	      injectedProvider = provider;
	    }
	  },
	
	  getRootInstances: function (ReactMount) {
	    if (injectedProvider) {
	      return injectedProvider.getRootInstances();
	    }
	
	    var instances = ReactMount && getRootInstancesFromReactMount(ReactMount) || [];
	    if (!Object.keys(instances).length) {
	      warnOnce();
	    }
	
	    return instances;
	  }
	};
	
	module.exports = RootInstanceProvider;

/***/ },

/***/ 6:
/***/ function(module, exports) {

	"use strict";
	
	function getRootInstancesFromReactMount(ReactMount) {
	  return ReactMount._instancesByReactRootID || ReactMount._instancesByContainerID || [];
	}
	
	module.exports = getRootInstancesFromReactMount;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(166);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var makePatchReactClass = __webpack_require__(167);
	
	/**
	 * Returns a function that, when invoked, patches a React class with a new
	 * version of itself. To patch different classes, pass different IDs.
	 */
	module.exports = function makeMakeHot(getRootInstances, React) {
	  if (typeof getRootInstances !== 'function') {
	    throw new Error('Expected getRootInstances to be a function.');
	  }
	
	  var patchers = {};
	
	  return function makeHot(NextClass, persistentId) {
	    persistentId = persistentId || NextClass.displayName || NextClass.name;
	
	    if (!persistentId) {
	      console.error(
	        'Hot reload is disabled for one of your types. To enable it, pass a ' +
	        'string uniquely identifying this class within this current module ' +
	        'as a second parameter to makeHot.'
	      );
	      return NextClass;
	    }
	
	    if (!patchers[persistentId]) {
	      patchers[persistentId] = makePatchReactClass(getRootInstances, React);
	    }
	
	    var patchReactClass = patchers[persistentId];
	    return patchReactClass(NextClass);
	  };
	};

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var makeAssimilatePrototype = __webpack_require__(168),
	    requestForceUpdateAll = __webpack_require__(169);
	
	function hasNonStubTypeProperty(ReactClass) {
	  if (!ReactClass.hasOwnProperty('type')) {
	    return false;
	  }
	
	  var descriptor = Object.getOwnPropertyDescriptor(ReactClass, 'type');
	  if (typeof descriptor.get === 'function') {
	    return false;
	  }
	
	  return true;
	}
	
	function getPrototype(ReactClass) {
	  var prototype = ReactClass.prototype,
	      seemsLegit = prototype && typeof prototype.render === 'function';
	
	  if (!seemsLegit && hasNonStubTypeProperty(ReactClass)) {
	    prototype = ReactClass.type.prototype;
	  }
	
	  return prototype;
	}
	
	/**
	 * Returns a function that will patch React class with new versions of itself
	 * on subsequent invocations. Both legacy and ES6 style classes are supported.
	 */
	module.exports = function makePatchReactClass(getRootInstances, React) {
	  var assimilatePrototype = makeAssimilatePrototype(),
	      FirstClass = null;
	
	  return function patchReactClass(NextClass) {
	    var nextPrototype = getPrototype(NextClass);
	    assimilatePrototype(nextPrototype);
	
	    if (FirstClass) {
	      requestForceUpdateAll(getRootInstances, React);
	    }
	
	    return FirstClass || (FirstClass = NextClass);
	  };
	};

/***/ },

/***/ 168:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Returns a function that establishes the first prototype passed to it
	 * as the "source of truth" and patches its methods on subsequent invocations,
	 * also patching current and previous prototypes to forward calls to it.
	 */
	module.exports = function makeAssimilatePrototype() {
	  var storedPrototype,
	      knownPrototypes = [];
	
	  function wrapMethod(key) {
	    return function () {
	      if (storedPrototype[key]) {
	        return storedPrototype[key].apply(this, arguments);
	      }
	    };
	  }
	
	  function patchProperty(proto, key) {
	    proto[key] = storedPrototype[key];
	
	    if (typeof proto[key] !== 'function' ||
	      key === 'type' ||
	      key === 'constructor') {
	      return;
	    }
	
	    proto[key] = wrapMethod(key);
	
	    if (storedPrototype[key].isReactClassApproved) {
	      proto[key].isReactClassApproved = storedPrototype[key].isReactClassApproved;
	    }
	
	    if (proto.__reactAutoBindMap && proto.__reactAutoBindMap[key]) {
	      proto.__reactAutoBindMap[key] = proto[key];
	    }
	  }
	
	  function updateStoredPrototype(freshPrototype) {
	    storedPrototype = {};
	
	    Object.getOwnPropertyNames(freshPrototype).forEach(function (key) {
	      storedPrototype[key] = freshPrototype[key];
	    });
	  }
	
	  function reconcileWithStoredPrototypes(freshPrototype) {
	    knownPrototypes.push(freshPrototype);
	    knownPrototypes.forEach(function (proto) {
	      Object.getOwnPropertyNames(storedPrototype).forEach(function (key) {
	        patchProperty(proto, key);
	      });
	    });
	  }
	
	  return function assimilatePrototype(freshPrototype) {
	    if (Object.prototype.hasOwnProperty.call(freshPrototype, '__isAssimilatedByReactHotAPI')) {
	      return;
	    }
	
	    updateStoredPrototype(freshPrototype);
	    reconcileWithStoredPrototypes(freshPrototype);
	    freshPrototype.__isAssimilatedByReactHotAPI = true;
	  };
	};

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var deepForceUpdate = __webpack_require__(170);
	
	var isRequestPending = false;
	
	module.exports = function requestForceUpdateAll(getRootInstances, React) {
	  if (isRequestPending) {
	    return;
	  }
	
	  /**
	   * Forces deep re-render of all mounted React components.
	   * Hat's off to Omar Skalli (@Chetane) for suggesting this approach:
	   * https://gist.github.com/Chetane/9a230a9fdcdca21a4e29
	   */
	  function forceUpdateAll() {
	    isRequestPending = false;
	
	    var rootInstances = getRootInstances(),
	        rootInstance;
	
	    for (var key in rootInstances) {
	      if (rootInstances.hasOwnProperty(key)) {
	        rootInstance = rootInstances[key];
	
	        // `|| rootInstance` for React 0.12 and earlier
	        rootInstance = rootInstance._reactInternalInstance || rootInstance;
	        deepForceUpdate(rootInstance, React);
	      }
	    }
	  }
	
	  setTimeout(forceUpdateAll);
	};

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var bindAutoBindMethods = __webpack_require__(171);
	var traverseRenderedChildren = __webpack_require__(172);
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    // `|| internalInstance` for React 0.12 and earlier
	    var instance = internalInstance._instance || internalInstance;
	
	    if (instance.forceUpdate) {
	      instance.forceUpdate();
	    } else if (React && React.Component) {
	      React.Component.prototype.forceUpdate.call(instance);
	    }
	  }
	}
	
	/**
	 * Updates a React component recursively, so even if children define funky
	 * `shouldComponentUpdate`, they are forced to re-render.
	 * Makes sure that any newly added methods are properly auto-bound.
	 */
	function deepForceUpdate(internalInstance, React) {
	  traverseRenderedChildren(internalInstance, bindAutoBindMethods);
	  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	}
	
	module.exports = deepForceUpdate;


/***/ },

/***/ 171:
/***/ function(module, exports) {

	"use strict";
	
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	
	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;
	
	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;
	
	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn(
	        'bind(): React component methods may only be bound to the ' +
	        'component instance. See ' + componentName
	      );
	    } else if (!args.length) {
	      console.warn(
	        'bind(): You are binding a component method to the component. ' +
	        'React does this for you automatically in a high-performance ' +
	        'way, so you can safely remove this call. See ' + componentName
	      );
	      return boundMethod;
	    }
	
	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;
	
	    return reboundMethod;
	  };
	
	  return boundMethod;
	}
	
	/**
	 * Performs auto-binding similar to how React does it.
	 * Skips already auto-bound methods.
	 * Based on https://github.com/facebook/react/blob/b264372e2b3ad0b0c0c0cc95a2f383e4a1325c3d/src/classic/class/ReactClass.js#L639-L705
	 */
	module.exports = function bindAutoBindMethods(internalInstance) {
	  var component = typeof internalInstance.getPublicInstance === 'function' ?
	    internalInstance.getPublicInstance() :
	    internalInstance;
	
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      continue;
	    }
	
	    // Skip already bound methods
	    if (component.hasOwnProperty(autoBindKey) &&
	        component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }
	
	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },

/***/ 172:
/***/ function(module, exports) {

	"use strict";
	
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(
	      internalInstance._renderedComponent,
	      callback,
	      argument
	    );
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      traverseRenderedChildren(
	        internalInstance._renderedChildren[key],
	        callback,
	        argument
	      );
	    }
	  }
	}
	
	module.exports = traverseRenderedChildren;


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(165), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(61); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	// React
	
	var _react = __webpack_require__(61);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _spin = __webpack_require__(163);
	
	var _spin2 = _interopRequireDefault(_spin);
	
	// Custom Components
	
	var _commonPlayBtn = __webpack_require__(175);
	
	var _commonPlayBtn2 = _interopRequireDefault(_commonPlayBtn);
	
	// Component
	var VideoPlayer = (function (_React$Component) {
	  _inherits(VideoPlayer, _React$Component);
	
	  function VideoPlayer() {
	    _classCallCheck(this, VideoPlayer);
	
	    _get(Object.getPrototypeOf(VideoPlayer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(VideoPlayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.playerState = {
	        isPlaying: false
	      };
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      // Get a reference to the loading spinner element
	      if (!this.loadingSpinner && this.refs.loadingSpinner) {
	        this.loadingSpinner = _react2['default'].findDOMNode(this.refs.loadingSpinner);
	      }
	
	      // Init and get a reference to the spinner object
	      if (!this.spinner && this.loadingSpinner) {
	        this.spinner = new _spin2['default']({
	          lines: 13,
	          length: 9,
	          width: 2,
	          radius: 20,
	          corners: 1,
	          color: '#fff',
	          opacity: 0.15,
	          rotate: 0,
	          direction: 1,
	          speed: 1.5,
	          trail: 78,
	          fps: 20,
	          zIndex: 2e9,
	          hwaccel: true
	        });
	      }
	
	      // Get a reference to the video player element and add html5 video event listeners
	      if (!this.player) {
	        this.player = _react2['default'].findDOMNode(this.refs.nytdPlayer);
	        this.player.addEventListener('loadstart', this._onLoadStart.bind(this));
	        this.player.addEventListener('loadeddata', this._onLoadedData.bind(this));
	        this.player.addEventListener('play', this._onPlay.bind(this));
	        this.player.addEventListener('pause', this._onPause.bind(this));
	        this.player.addEventListener('ended', this._onEnded.bind(this));
	      }
	
	      // Load the new video src
	      this.player.load();
	    }
	  }, {
	    key: '_onLoadStart',
	
	    // HTML5 vidoe event callbacks
	    value: function _onLoadStart() {
	      window.console.log('_onLoadStart');
	      if (this.loadingSpinner && this.spinner) {
	        this.loadingSpinner.style.display = 'block';
	        this.spinner.spin(this.loadingSpinner);
	      }
	    }
	  }, {
	    key: '_onLoadedData',
	    value: function _onLoadedData() {
	      window.console.log('_onLoadedData');
	    }
	  }, {
	    key: '_onPlay',
	    value: function _onPlay() {
	      window.console.log('_onPlay');
	      if (this.loadingSpinner && this.spinner) {
	        this.loadingSpinner.style.display = 'none';
	        this.spinner.spin(false);
	      }
	    }
	  }, {
	    key: '_onPause',
	    value: function _onPause() {
	      window.console.log('_onPause');
	    }
	  }, {
	    key: '_onEnded',
	    value: function _onEnded() {
	      this.props.setNextVideo(this.props.video.id);
	    }
	  }, {
	    key: '_videoTogglePlayState',
	
	    // Custom player events
	    value: function _videoTogglePlayState() {
	      if (this.playerState.isPlaying) {
	        this.player.pause();
	        this.playerState.isPlaying = false;
	      } else {
	        this.player.play();
	        this.playerState.isPlaying = true;
	      }
	    }
	  }, {
	    key: '_setCurrentVideo',
	
	    // Sets this video has the current video
	    value: function _setCurrentVideo() {
	      this.props.setCurrentVideo(this.props.video.id);
	    }
	  }, {
	    key: '_renderPlayer',
	    value: function _renderPlayer() {
	      var playerElement = undefined;
	
	      if (this.props.playCurrentVideo) {
	
	        // Assign the player props
	        var playerProps = {
	          id: 'video_' + this.props.video.id,
	          preload: 'auto',
	          'x-webkit-airplay': 'allow',
	          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
	          controls: 'controls',
	          src: this.props.video.renditions[1].url,
	          // Events
	          onClick: this._videoTogglePlayState.bind(this)
	        };
	
	        // Add the autoPlay property if we got the playCurrentVideo flag set to true
	        if (this.props.playCurrentVideo) {
	          playerProps.autoPlay = true;
	          this.playerState.isPlaying = true;
	        }
	
	        playerElement = _react2['default'].createElement('video', _extends({ ref: 'nytdPlayer' }, playerProps));
	      } else {
	
	        // Assign the poster props
	        var posterProps = {
	          id: 'video_' + this.props.video.id,
	          src: this.props.video.graphicsDomain + this.props.video.images[3].url,
	          onClick: this._setCurrentVideo.bind(this)
	        };
	
	        playerElement = _react2['default'].createElement(
	          'div',
	          { className: 'nytd-player-poster' },
	          _react2['default'].createElement('img', posterProps),
	          _react2['default'].createElement(_commonPlayBtn2['default'], null)
	        );
	      }
	
	      return playerElement;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'nytd-player-wrapper' },
	          _react2['default'].createElement('div', { ref: 'loadingSpinner', className: 'loading-spinner' }),
	          this._renderPlayer()
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'nytd-player-description' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'nytd-player-description-head' },
	            _react2['default'].createElement(
	              'h4',
	              null,
	              this.props.playlistCat.title
	            ),
	            _react2['default'].createElement(
	              'h1',
	              null,
	              this.props.video.title
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'nytd-player-description-content' },
	            _react2['default'].createElement(
	              'h5',
	              null,
	              'By ',
	              this.props.video.byline
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              this.props.video.summary
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return VideoPlayer;
	})(_react2['default'].Component);
	
	module.exports = VideoPlayer;
	
	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(176), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(61))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "VideoPlayer.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(165), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(61); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	// React
	
	var _react = __webpack_require__(61);
	
	var _react2 = _interopRequireDefault(_react);
	
	// Component
	var PlayBtn = (function (_React$Component) {
	  _inherits(PlayBtn, _React$Component);
	
	  function PlayBtn() {
	    _classCallCheck(this, PlayBtn);
	
	    _get(Object.getPrototypeOf(PlayBtn.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(PlayBtn, [{
	    key: 'render',
	    value: function render() {
	      var btn = _react2['default'].createElement(
	        'span',
	        { className: 'play-holder' },
	        ' ',
	        _react2['default'].createElement(
	          'p',
	          { className: 'play' },
	          _react2['default'].createElement('i', { className: 'icon default' })
	        ),
	        ' '
	      );
	      if (this.props.isPlaying) {
	        btn = _react2['default'].createElement(
	          'span',
	          { className: 'now-playing-holder' },
	          'Now Playing'
	        );
	      }
	
	      return btn;
	    }
	  }]);
	
	  return PlayBtn;
	})(_react2['default'].Component);
	
	module.exports = PlayBtn;
	
	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(176), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(61))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PlayBtn.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var isReactClassish = __webpack_require__(177),
	    isReactElementish = __webpack_require__(178);
	
	function makeExportsHot(m, React) {
	  if (isReactElementish(m.exports, React)) {
	    // React elements are never valid React classes
	    return false;
	  }
	
	  var freshExports = m.exports,
	      exportsReactClass = isReactClassish(m.exports, React),
	      foundReactClasses = false;
	
	  if (exportsReactClass) {
	    m.exports = m.makeHot(m.exports, '__MODULE_EXPORTS');
	    foundReactClasses = true;
	  }
	
	  for (var key in m.exports) {
	    if (!Object.prototype.hasOwnProperty.call(freshExports, key)) {
	      continue;
	    }
	
	    if (exportsReactClass && key === 'type') {
	      // React 0.12 also puts classes under `type` property for compat.
	      // Skip to avoid updating twice.
	      continue;
	    }
	
	    if (!isReactClassish(freshExports[key], React)) {
	      continue;
	    }
	
	    if (Object.getOwnPropertyDescriptor(m.exports, key).writable) {
	      m.exports[key] = m.makeHot(freshExports[key], '__MODULE_EXPORTS_' + key);
	      foundReactClasses = true;
	    } else {
	      console.warn("Can't make class " + key + " hot reloadable due to being read-only. You can exclude files or directories (for example, /node_modules/) using 'exclude' option in loader configuration.");
	    }
	  }
	
	  return foundReactClasses;
	}
	
	module.exports = makeExportsHot;


/***/ },

/***/ 177:
/***/ function(module, exports) {

	function hasRender(Class) {
	  var prototype = Class.prototype;
	  if (!prototype) {
	    return false;
	  }
	
	  return typeof prototype.render === 'function';
	}
	
	function descendsFromReactComponent(Class, React) {
	  if (!React.Component) {
	    return false;
	  }
	
	  var Base = Object.getPrototypeOf(Class);
	  while (Base) {
	    if (Base === React.Component) {
	      return true;
	    }
	
	    Base = Object.getPrototypeOf(Base);
	  }
	
	  return false;
	}
	
	function isReactClassish(Class, React) {
	  if (typeof Class !== 'function') {
	    return false;
	  }
	
	  // React 0.13
	  if (hasRender(Class) || descendsFromReactComponent(Class, React)) {
	    return true;
	  }
	
	  // React 0.12 and earlier
	  if (Class.type && hasRender(Class.type)) {
	    return true;
	  }
	
	  return false;
	}
	
	module.exports = isReactClassish;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var isReactClassish = __webpack_require__(177);
	
	function isReactElementish(obj, React) {
	  if (!obj) {
	    return false;
	  }
	
	  return Object.prototype.toString.call(obj.props) === '[object Object]' &&
	         isReactClassish(obj.type, React);
	}
	
	module.exports = isReactElementish;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(165), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(61); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	// React
	
	var _react = __webpack_require__(61);
	
	var _react2 = _interopRequireDefault(_react);
	
	// Custom Components
	
	var _PlaylistItem = __webpack_require__(180);
	
	var _PlaylistItem2 = _interopRequireDefault(_PlaylistItem);
	
	// Component
	var Playlist = (function (_React$Component) {
	  _inherits(Playlist, _React$Component);
	
	  function Playlist() {
	    _classCallCheck(this, Playlist);
	
	    _get(Object.getPrototypeOf(Playlist.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Playlist, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'nytd-playlist-wrapper' },
	        _react2['default'].createElement(
	          'ul',
	          null,
	          this.props.playlist.map(function (item) {
	            return _react2['default'].createElement(_PlaylistItem2['default'], _extends({
	              key: item.id,
	              playing: _this.props.playCurrentVideo && _this.props.currentVideo.id === item.id,
	              onClick: _this.props.selectVideo,
	              playlistCat: _this.props.playlistCat
	            }, item));
	          })
	        )
	      );
	    }
	  }]);
	
	  return Playlist;
	})(_react2['default'].Component);
	
	module.exports = Playlist;
	/* Assign a unique key to each playlist item */ /* Set the playing flag by comparing the currentVideoId to the item.id */ /* Assign a callback for the thumbnail click event */ /* Pass in the playlist category */ /* Pass in all properties of the playlit item using the spread operator */

	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(176), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(61))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Playlist.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(165), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(61); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	// React
	
	var _react = __webpack_require__(61);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(181);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// Custom Components
	
	var _commonPlayBtn = __webpack_require__(175);
	
	var _commonPlayBtn2 = _interopRequireDefault(_commonPlayBtn);
	
	// Component
	var PlaylistItem = (function (_React$Component) {
	  _inherits(PlaylistItem, _React$Component);
	
	  function PlaylistItem() {
	    _classCallCheck(this, PlaylistItem);
	
	    _get(Object.getPrototypeOf(PlaylistItem.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(PlaylistItem, [{
	    key: '_onClick',
	    value: function _onClick() {
	      this.props.onClick(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var image = this.props.images[4];
	      var classNames = (0, _classnames2['default'])({
	        playing: !!this.props.playing
	      });
	      return _react2['default'].createElement(
	        'li',
	        { className: classNames, onClick: this._onClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { className: 'thumbnail' },
	          _react2['default'].createElement('img', { src: this.props.graphicsDomain + image.url }),
	          _react2['default'].createElement(_commonPlayBtn2['default'], { isPlaying: this.props.playing })
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: 'category' },
	          this.props.playlistCat.title
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: 'duration' },
	          this.props.duration
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: 'title' },
	          this.props.title
	        ),
	        _react2['default'].createElement('br', null)
	      );
	    }
	  }]);
	
	  return PlaylistItem;
	})(_react2['default'].Component);
	
	module.exports = PlaylistItem;
	
	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(176), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(61))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PlaylistItem.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		"use strict";
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(185)(content, {});
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		module.hot.accept(183, function() {
			var newContent = __webpack_require__(183);
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(184)();
	exports.push([module.id, "/* This is a copy of the play button on http://nytimes.com/video */\n/* Variables */\n/* Mixins */\n.app-container {\n  padding: 1px 30px;\n  margin: -1px 0;\n  background-color: #f5f5f5;\n}\n\n@media (max-width: 499px) {\n  .app-container {\n    padding: 1px 10px;\n  }\n}\n\n.nytd-player-container {\n  color: grey;\n}\n\n.nytd-player-container .initializing-msg {\n  display: block;\n  text-align: center;\n  color: #999;\n}\n\n.nytd-player-container .nytd-player-wrapper {\n  position: relative;\n  height: 0px;\n  padding-bottom: 56.23%;\n  overflow: hidden;\n  background-color: black;\n  cursor: pointer;\n}\n\n@media (max-width: 499px) {\n  .nytd-player-container .nytd-player-wrapper {\n    /* Make the video take the fullwidth of the viewport */\n    margin-left: -10px;\n    margin-right: -10px;\n  }\n}\n\n.nytd-player-container .nytd-player-wrapper .loading-spinner {\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster:hover .play-holder .play, .nytd-player-container .nytd-player-wrapper .nytd-player-poster:active .play-holder .play {\n  background-color: #4D7B9F;\n  border-color: #4D7B9F;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster .play-holder {\n  bottom: -5px;\n  display: block;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 16px;\n  height: 72px;\n  left: 10px;\n  position: absolute;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster .play-holder .play {\n  background-clip: border-box;\n  color: #fff;\n  display: inline-block;\n  font-weight: 600;\n  border-radius: 3px;\n  border: 2px #d8d8d8 solid;\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out;\n  -ms-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  background: #333;\n  background: rgba(0, 0, 0, 0.8);\n  width: 36px;\n  height: 36px;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster .play-holder .play .icon {\n  background-clip: border-box;\n  background-color: transparent;\n  background-image: url(http://css.nyt.com/video/4.7.12-416_1436995118_2015-07-15T21:18:38Z/static-timesvideo/img/sprite_map_retina.png);\n  background-origin: padding-box;\n  background-position: 0px -134px;\n  background-size: 500px 1000px;\n  color: white;\n  display: inline-block;\n  height: 11px;\n  line-height: 0px;\n  margin-left: 14px;\n  margin-top: 12px;\n  vertical-align: middle;\n  width: 10px;\n}\n\n.nytd-player-container .nytd-player-wrapper .nytd-player-poster img {\n  width: 100%;\n  height: auto;\n}\n\n.nytd-player-container .nytd-player-description {\n  background-color: white;\n  padding: 18px 30px 0 30px;\n  margin: 0;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-head {\n  border-bottom: 1px #e6e6e6 solid;\n  padding-bottom: 12px;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-head h4 {\n  font-size: 14px;\n  color: #d9471e;\n  font-family: Georgia,serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 10px 0;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-head h1 {\n  font-family: Georgia,serif;\n  font-size: 40px;\n  color: #333333;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-content {\n  padding: 10px 0 18px 0;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-content h5 {\n  font-size: 12px;\n  color: #888;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n\n.nytd-player-container .nytd-player-description .nytd-player-description-content p {\n  font-family: georgia,'times new roman',serif;\n  color: #444;\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.nytd-player-container .nytd-playlist-wrapper {\n  padding: 0;\n  margin: 18px 0;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: left;\n  overflow: hidden;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li {\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  /* 2 items item */\n  /* 3 items layout */\n  /* 4 items layout */\n}\n\n@media (max-width: 499px) {\n  .nytd-player-container .nytd-playlist-wrapper ul li {\n    width: 49%;\n    margin-left: 2%;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(2n+1) {\n    margin-left: 0;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(3n+0) {\n    clear: both;\n  }\n}\n\n@media (min-width: 500px) and (max-width: 649px) {\n  .nytd-player-container .nytd-playlist-wrapper ul li {\n    width: 32%;\n    margin-left: 2%;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(3n+1) {\n    margin-left: 0;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(4n+0) {\n    clear: both;\n  }\n}\n\n@media (min-width: 650px) {\n  .nytd-player-container .nytd-playlist-wrapper ul li {\n    width: 23.5%;\n    margin-left: 2%;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(4n+1) {\n    margin-left: 0;\n  }\n  .nytd-player-container .nytd-playlist-wrapper ul li:nth-child(5n+0) {\n    clear: both;\n  }\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li.playing {\n  color: #537d9d;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li.playing .thumbnail img {\n  opacity: 0.5;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail {\n  display: block;\n  position: relative;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail img {\n  width: 100%;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail:hover .play-holder .play, .nytd-player-container .nytd-playlist-wrapper ul li .thumbnail:active .play-holder .play {\n  background-color: #4D7B9F;\n  border-color: #4D7B9F;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail .play-holder {\n  bottom: -5px;\n  display: block;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 16px;\n  height: 72px;\n  left: 10px;\n  position: absolute;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail .play-holder .play {\n  background-clip: border-box;\n  color: #fff;\n  display: inline-block;\n  font-weight: 600;\n  border-radius: 3px;\n  border: 2px #d8d8d8 solid;\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out;\n  -ms-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  background: #333;\n  background: rgba(0, 0, 0, 0.8);\n  width: 36px;\n  height: 36px;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail .play-holder .play .icon {\n  background-clip: border-box;\n  background-color: transparent;\n  background-image: url(http://css.nyt.com/video/4.7.12-416_1436995118_2015-07-15T21:18:38Z/static-timesvideo/img/sprite_map_retina.png);\n  background-origin: padding-box;\n  background-position: 0px -134px;\n  background-size: 500px 1000px;\n  color: white;\n  display: inline-block;\n  height: 11px;\n  line-height: 0px;\n  margin-left: 14px;\n  margin-top: 12px;\n  vertical-align: middle;\n  width: 10px;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .thumbnail .now-playing-holder {\n  position: absolute;\n  left: 14px;\n  bottom: 14px;\n  color: white;\n  font-weight: bold;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .category {\n  font-size: 13px;\n  font-weight: 400;\n  color: #888;\n  margin: 1px 0 9px 0;\n  text-transform: capitalize;\n  line-height: 14px;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .title {\n  display: block;\n  font-family: arial,helvetica,sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 26px;\n}\n\n.nytd-player-container .nytd-playlist-wrapper ul li .duration {\n  font-size: 12px;\n  margin-left: 12px;\n  color: #aaa;\n  cursor: default;\n}\n", ""]);

/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }

});
//# sourceMappingURL=VideoPlayerApp.js.map