var React = require('react');
var Cover = require('Cover');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = React.createClass({
  render : function(){
    return (
      <div className="main">
        <Cover/>
        <Nav/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = Main;
