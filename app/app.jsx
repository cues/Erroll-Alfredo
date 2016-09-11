// render and getDefaultProps method come with react and get automatically called by the library
// props = this.props
// there are two types of data in a component : props, state  -  a component isnt allowed to update its own props but is allowed to update its own state
// get initialState is a method built in react and is very similar to getDefaultprops
// State = this.state
// every react component needs to have render method
//
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Sketch = require('Sketch');
var Adobe = require('Adobe');
var Website = require('Website');
var Corel = require('Corel');


// the top line can be writter like this in es5
// var Route = require('react-router').route;
// var Router = require('react-router').router;
// var IndexRoute = require('react-router').IndexRoute;
// var hashHistory = require('react-router').hashHistory;



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();





// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
        <Route path="adobe" component={Adobe}/>
        <Route path="sketch" component={Sketch}/>
        <Route path="corel" component={Corel}/>
    </Route>

  </Router>,
  document.getElementById('app')
);
