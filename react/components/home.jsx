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
    $('.caption').height('auto');
    _.forEach($('.caption'), function (element) {
      var height = $(element).height();
      correctTitleHeight = height > correctTitleHeight ? height : correctTitleHeight;
    });
    $('.caption').height(correctTitleHeight);

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
    return (
      <div>
        <h1 className="welcome-text">{gettext('IT Recruitment Consultant')}</h1>
        <h2 className="welcome-text">{gettext('Ha új állást keresel')}</h2>
      </div>
    );
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
      <div>
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
            <img src="/static/img/profile2.jpg" className="max-width" alt="profile"/>
          </div>
          <div className="col-md-6">
            <h4 className="about-me">
              <p><b className="highlight">{gettext('Üdv!')}</b></p>
              <p>
                <span className="highlight">
                  {gettext(
                    'Birkás Orsolya vagyok, 2014 óta foglalkozom kizárólag IT Recruitment-el.'
                  )}
                </span>
              </p>
            </h4>
            <h5 className="isay">
              {gettext(
                'Bízom benne, hogy az aktuális állaslehetőségek között megtaláljuk közösen a ' +
                'megfelelőt számodra.'
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
              <a href="mailto:orsolya.birkas@budapestbank.hu" target="_blank">
                orsolya.birkas@budapestbank.hu
              </a><br/>
              <span>{gettext('Telefon') + ': 06706260140'}</span>
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
                <span href="javascript;" className="block">
                  {gettext('Webdesign & Sitebuild')} E&Bro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
