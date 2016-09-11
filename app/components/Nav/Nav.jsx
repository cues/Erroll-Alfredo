var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render : function(){
    return(
      <div className="nav">
        <div className="profile-pic ">
          <div className="logo"></div>
        </div>
        <div className="menu ">

          <div className="menu-items display-flex">
            <IndexLink to="/" activeClassName="active" activeStyle={{color:'rgba(0,0,0,1)'}}>
              <span className="icon-sketch cursor-pointer"></span>
            </IndexLink>
          </div>

          <div className="menu-items display-flex">
            <Link to="/adobe" activeClassName="active" activeStyle={{color:'rgba(0,0,0,1)'}}>
              <span className="icon-adobe"></span>
            </Link>
          </div>

          <div className="menu-items display-flex">
            <Link to="/website" activeClassName="active" activeStyle={{color:'rgba(0,0,0,1)'}}>
              <span className="icon-websites cursor-pointer"></span>
            </Link>
          </div>

          <div className="menu-items display-flex">
            <i   className=" material-icons cursor-pointer more" >more_vert</i>

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Nav;
