/* global gettext, $ */
var React = require('react');

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    route: React.PropTypes.object
  },

  getInitialState: function () {
    return {urls: {}};
  },

  componentWillMount: function () {
    var self = this;
    var url = '/' + this.props.route.language + '/api/urls/';
    $.get(url, function (response) {
      self.setState({urls: response});
    });
  },

  render: function () {
    return (
      <div className="site-wrapper-inner">
        <nav className="navbar navbar-fixed-top">
          <div className="header header-mobi-ext">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-2">
                  <h4 style={{marginTop: '13px'}} className="logo">
                    <span style={{color: '#E6400C'}}>Birkás </span>
                    <span style={{color: 'rgb(95, 111, 126)'}}>Orsolya</span>
                  </h4>
                </div>

                <a href="" className="mobi-toggler">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="col-md-10 pull-right">
                  <ul className="header-navigation">
                    <li className="current"><a href="#promo-block">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#services">Jobs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid" style={{marginTop: '50px'}}>
          {React.cloneElement(this.props.children, {urls: this.state.urls})}
        </div>
      </div>);
  }
});
module.exports = App;
