# Video Practical

### Objective: *Create a frontend playlist video experience from a sample data feed of Travel content.*

#### Notable Technologies used:
- React
- ES6 modules & syntax
- Webpack
- Grunt
- Karma
- Jasmine

I architected the video player/playlist to be a standalone component that can be instanciate multiple times on a page. The components bundle containes the js and the css necessary to render itself. Only the vendors.js bundle is an external dependancy of the video player/playlist component. I made the assuption that these external libs would already be loaded on the page.

##### NOTE:
One area where i could of spent more time is in the Unit Tests. It's a little rudimentary but all components has at least one test, except for VideoPlayerApp.jsx which involved some time I couldn't spare at this time.


#### Instructions:

##### Running the example app in a dev environment.

```
grunt serve
```

##### Running the Unit Tests

```
grunt test
```

##### To build the Video Player App *(This will package and copy the production ready app in the dist folder)*

```
grunt build
```

##### Running the example app in a prod like environment.
```
grunt serve:dist
```
