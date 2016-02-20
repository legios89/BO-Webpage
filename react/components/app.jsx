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
          <div className="container-fluid">
            <div className="navbar-header header">
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse" data-target="#navbar"
                      aria-expanded="false" aria-controls="navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <h4 style={{marginTop: '0px'}} className="logo">
                <span style={{color: '#E6400C'}}>Birkás </span>
                <span style={{color: 'rgb(95, 111, 126)'}}>Orsolya</span>
              </h4></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse menu-bar">
              <div className="pull-right">
                <ul className="header-navigation">
                  <li><a href="">Home</a></li>
                  <li><a href="">About me</a></li>
                  <li><a href="">Jobs</a></li>
                </ul>
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
