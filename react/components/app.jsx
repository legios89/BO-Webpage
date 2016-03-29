/* global gettext, $ */
var React = require('react');

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    route   : React.PropTypes.object
  },

  getInitialState: function () {
    return {urls: {}, canLoad: false};
  },

  componentWillMount: function () {
    var self = this;
    var url = '/' + this.props.route.language + '/api/urls/';

    $.get(url, function (response) {
      self.setState({urls: response, canLoad: true});
    });
  },

  scrollTo: function (event) {
    var target = event.target.dataset.target;
    if (target === 'home') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(target).scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  },

  render: function () {
    if (!this.state.canLoad) {
      return (<span></span>);
    }
    return (
      <div className="site-wrapper-inner">
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid soft-white-bg">
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
                <span className="dark-orange-color">Birkás </span>
                <span className="blue-gray-color">Orsolya</span>
              </h4></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse menu-bar">
              <div className="pull-right">
                <ul className="header-navigation">
                  <li>
                    <a href="javascript:void(0);" onClick={this.scrollTo}
                       data-target="home">
                      <i className="fa fa-home" data-target="home"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" onClick={this.scrollTo}
                       data-target="about_me">
                      {gettext('Rólam')}
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" onClick={this.scrollTo}
                       data-target="jobs">
                      {gettext('Állások')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {React.cloneElement(this.props.children, {urls: this.state.urls})}
      </div>);
  }
});
module.exports = App;
