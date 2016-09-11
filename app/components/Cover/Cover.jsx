var React = require('react');
var Contact = require('Contact');

var Cover = React.createClass({
  render : function() {
    return(
      <div className="cover display-flex">
        <Contact/>
        
      </div>
    );
  }
});

module.exports = Cover;
