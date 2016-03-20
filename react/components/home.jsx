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
    $('.job-block').height('auto');
    _.forEach($('.job-block'), function (element) {
      var image = $(element).find('.job-image')[0];
      var extraHeight = image.complete ? 0 : image.width;
      var height = $(element).height() + extraHeight;
      correctBlockHeight = height > correctBlockHeight ? height : correctBlockHeight;
    });

    $('.caption-subject').height('auto');
    _.forEach($('.caption-subject'), function (element) {
      var height = $(element).height();
      correctTitleHeight = height > correctTitleHeight ? height : correctTitleHeight;
    });
    $('.caption-subject').height(correctTitleHeight);
  },

  /* ************* */
  /* RENDER BLOCKS */
  /* ************* */
  renderWelcomeText: function () {
    return (
      <h1 style={{color: '#2C3E50', marginTop: '70px'}}>
        {gettext('Toborzási és Kiválasztási Tanácsadó')}
      </h1>
    );
  },

  renderJobs: function () {
    var colors = ['#2F353B', '#ACB5C3', '#67809F', '#E1E5EC', '#4C87B9',
                  '#E5E5E5', '#4B77BE', '#525E64'];
    return this.state.jobs.map(function (job, key) {
      return (
        <Job job={job} color={colors[key % colors.length]} key={job.id}/>
      );
    });
  },

  /* *********** */
  /* MAIN RENDER */
  /* *********** */
  render: function () {
    return (
      <div className="container-fluid" style={{marginTop: '50px'}}>
        <div className="row welcome-image">
          <div className="pattern col-xs-12 visible-xs"
               style={{height: '200px'}}>
            {this.renderWelcomeText()}
          </div>
          <div className="pattern col-sm-12 visible-sm"
               style={{height: '250px'}}>
            {this.renderWelcomeText()}
          </div>
          <div className="pattern col-md-12 visible-md"
               style={{height: '300px'}}>
            {this.renderWelcomeText()}
          </div>
          <div className="pattern col-lg-12 visible-lg"
               style={{height: '400px'}}>
            {this.renderWelcomeText()}
          </div>
        </div>
        <div className="content-space" id="about_me"></div>
         <div className="row">
          <div className="col-sm-6 no-padding">
            <img src="http://placehold.it/700x400" style={{width: '100%'}}>
            </img>
          </div>
          <div className="col-sm-6 about-description"
               style={{color: '#2C3E50'}}>
            <h4>
              <b>{gettext('Üdvözlöm!')}</b><br/>
              <span>{gettext('Birkás Orsolya vagyok.')}</span><br/>
              <span>{gettext('Toborzási és Kiválasztási Tanácsadó.')}</span><br/>
            </h4>
            <h5 className="isay">
              {gettext(
                '2012 óta pályáztatok és közvetítek ki, kis, közép és ' +
                'multinacionális cégeknek IT szakembereket, főkép ' +
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
          <div className="col-sm-7 about-description">
            <div>
              <span>E-mail: </span>
              <a href="mailto:orsolya.birkas@adecco.com" target="_blank">
                orsolya.birkas@adecco.com
              </a><br/>
              <span>Telefon: 06308689742</span>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="col-xs-12">
              <div className="col-xs-1"></div>
              <div className="block-footer col-xs-3" style={{background: '#3b5998'}}>
                <a href="https://www.facebook.com/orsolya.birkas">
                  <i className="fa fa-facebook social-icon"></i>
                </a>
              </div>
              <div className="block-footer col-xs-3" style={{background: '#4099FF'}}>
                <a href="https://twitter.com/BirkasOrsolya">
                  <i className="fa fa-twitter social-icon"></i>
                </a>
              </div>
              <div className="block-footer col-xs-3" style={{background: '#0e76A8'}}>
                <a href="https://hu.linkedin.com/in/orsolya-birkás-a552a697">
                  <i className="fa fa-linkedin social-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12">
              <span>{gettext('Webdesign & Sitebuild')} E&Bro</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
