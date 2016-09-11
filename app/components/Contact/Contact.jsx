var React = require('react');

var Contact = React.createClass({
  render : function(){
    return(
      <div className="contact-info">
        <div className="follow-me display-flex">
                  <div className="each-follow display-flex">
                  <a href="https://www.facebook.com/erroll1707/">
                    <i className="fa fa-facebook transition-3 follow-icon facebook-color"></i>
                  </a>
                </div>

                <div className="each-follow display-flex">
                  <a href="https://twitter.com/erroll1707">
                    <i className="fa fa-twitter  transition-3 follow-icon twitter-color "></i>
                  </a>
                </div>

                <div className="each-follow display-flex">
                  <a href="https://www.instagram.com/erroll1707/">
                    <i className="fa fa-instagram transition-3 follow-icon instagram-color"></i>
                  </a>
                </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
