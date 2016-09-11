var React = require('react');

var Footer = React.createClass({
  render : function(){
    return(
      <div className="footer display-flex bt">
         <div className="footer-items cursor-default footer-item-2">Erroll Alfredo Antao&nbsp;<i className="fa fa-copyright" aria-hidden="true"></i>&nbsp;2016</div>
      </div>
    );
  }
});

module.exports = Footer;
