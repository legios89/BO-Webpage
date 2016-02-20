/* global gettext */
var React = require('react');

var Home = React.createClass({
  propTypes: {
    urls: React.PropTypes.object
  },

  render: function () {
    return (
      <div>
        <div className="row welcome-image">
          <div className="pattern col-lg-12" style={{height: '600px'}}>
            <h1 style={{color: '#2C3E50'}}>
            Toborzási és Kiválasztási Tanácsadó</h1>
          </div>
        </div>
        <div className="row">
            <div className="block col-xs-6" style={{background: 'black'}}>
            </div>
            <div className="block col-xs-6" style={{background: 'red'}}>
            </div>
        </div>
        <div className="row">
            <div className="block col-xs-12" style={{background: 'yellow'}}>
            </div>
        </div>
        <div className="row">
            <div className="footer col-xs-12">
              <a target="_blank" href="https://www.facebook.com/schumacherwebdesign">
                <i className="fa fa-facebook"></i>
              </a>
              <a target="_blank" href="https://twitter.com/sch_webdesign">
                <i className="fa fa-twitter"></i>
              </a>
              <a target="_blank"
                 href="https://www.linkedin.com/pub/schumacher-zsolt/6a/56a/b53">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
