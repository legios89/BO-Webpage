/* global gettext, $ */
var React = require('react');
var _ = require('lodash');

/* Components */
var Job = require('./parts/job.jsx');

var Home = React.createClass({
  propTypes: {
    urls: React.PropTypes.object
  },

  /* *************** */
  /* REACT LIFECYCLE */
  /* *************** */
  getInitialState: function () {
    return {jobs: []};
  },

  componentWillMount: function () {
    var self = this;
    $.get(this.props.urls.job_list, function (response) {
      self.setState({jobs: response});
    });
    window.addEventListener('resize', this.jobHeightFix);
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.jobHeightFix);
  },

  componentDidUpdate: function () {
    this.jobHeightFix();
  },

  /* **************** */
  /* HELPER FUNCTIONS */
  /* **************** */

  jobHeightFix: function () {
    var correctBlockHeight = 0;
    var correctTitleHeight = 0;
    $('.caption-subject').height('auto');
    _.forEach($('.caption-subject'), function (element) {
      var height = $(element).height();
      correctTitleHeight = height > correctTitleHeight ? height : correctTitleHeight;
    });
    $('.caption-subject').height(correctTitleHeight);

    _.forEach($('.job-image'), function (element) {
      var ratio = element.width / element.attributes.width.value;
      var height = element.attributes.height.value * ratio;
      correctBlockHeight = height > correctBlockHeight ? height : correctBlockHeight;
    });
    $('.job-image').height(correctBlockHeight);
  },

  /* ************* */
  /* RENDER BLOCKS */
  /* ************* */
  renderWelcomeText: function () {
    return (<h1 className="welcome-text">{gettext('Toborzási és Kiválasztási Tanácsadó')}</h1>);
  },

  renderJobs: function () {
    var self = this;
    var colors = ['#2F353B', '#8A95A7', '#67809F', '#18305A', '#4C87B9', '#564E4E', '#4B77BE',
                  '#525E64'];
    return this.state.jobs.map(function (job, key) {
      return (
        <Job job={job}
             color={colors[key % colors.length]}
             active={job.id === parseInt(self.props.params.jobId, 10)}
             key={job.id}/>
      );
    });
  },

  /* *********** */
  /* MAIN RENDER */
  /* *********** */
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row welcome-image hidden-lg">
          <div className="pattern col-xs-12 visible-xs" style={{height: '250px'}}>
            {this.renderWelcomeText()}
          </div>
          <div className="pattern col-sm-12 visible-sm" style={{height: '300px'}}>
            {this.renderWelcomeText()}
          </div>
          <div className="pattern col-md-12 visible-md" style={{height: '400px'}}>
            {this.renderWelcomeText()}
          </div>
        </div>
        <div className="row welcome-image visible-lg fixed-image"
             style={{backgroundPosition: '0% -200px'}}>
          <div className="pattern col-lg-12 visible-lg" style={{height: '450px'}}>
            {this.renderWelcomeText()}
          </div>
        </div>
        <div className="content-space" id="about_me"></div>
         <div className="row">
          <div className="col-md-6 no-padding">
            <img src="/static/img/profile.jpg" className="max-width" alt="profile"/>
          </div>
          <div className="col-md-6">
            <h4 className="about-me">
              <p><b>{gettext('Üdvözlöm!')}</b></p>
              <p>{gettext('Birkás Orsolya vagyok.')}</p>
              <p>{gettext('Toborzási és Kiválasztási Tanácsadó.')}</p>
            </h4>
            <h5 className="isay">
              {gettext(
                '2012 óta pályáztatok és közvetítek ki, kis, közép és ' +
                'multinacionális cégeknek IT szakembereket, főképp ' +
                'fejlesztőket'
              )}
            </h5>
          </div>
        </div>
        <div className="content-space" id="jobs"></div>
        <div className="row content-space">
          {this.renderJobs()}
        </div>
        <div className="row page-footer">
          <div className="col-sm-7 contact-description">
            <div>
              <span>{gettext('E-mail') + ': '}</span>
              <a href="mailto:orsolya.birkas@adecco.com" target="_blank">
                orsolya.birkas@adecco.com
              </a><br/>
              <span>{gettext('Telefon') + ': 06308689742'}</span>
            </div>
          </div>
          <div className="col-sm-5 no-padding">
            <div className="col-xs-12 no-padding">
              <div className="col-xs-1"></div>
              <div className="no-padding col-xs-3 fb-color">
                <a href="https://www.facebook.com/orsolya.birkas" className="block">
                  <i className="fa fa-facebook social-icon"></i>
                </a>
              </div>
              <div className="no-padding col-xs-3 twitter-color">
                <a href="https://twitter.com/BirkasOrsolya" className="block">
                  <i className="fa fa-twitter social-icon"></i>
                </a>
              </div>
              <div className="no-padding col-xs-3 linkedin-color">
                <a href="https://hu.linkedin.com/in/orsolya-birkás-a552a697" className="block">
                  <i className="fa fa-linkedin social-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 no-padding">
              <div className="col-xs-1"></div>
              <div className="no-padding col-xs-9 e-bro-block">
                  <a href="https://github.com/legios89/BO-Webpage" className="block">
                    {gettext('Webdesign & Sitebuild')} E&Bro
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
