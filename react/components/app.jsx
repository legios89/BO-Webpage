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
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#navbar"
                      aria-expanded="false"
                      aria-controls="navbar">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Birkás Orsolya</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">{gettext('Home')}</a></li>
                <li><a href="#">{gettext('About me')}</a></li>
                <li><a href="#">{gettext('Jobs')}</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid" style={{marginTop: '31px'}}>
          {React.cloneElement(this.props.children, {urls: this.state.urls})}
        </div>
      </div>);
  }
});
module.exports = App;
