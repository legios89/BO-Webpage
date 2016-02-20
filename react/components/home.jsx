/* global gettext */
var React = require('react');

var Home = React.createClass({
  propTypes: {
    urls: React.PropTypes.object
  },

  renderWelcomeText: function () {
    return (
      <h1 style={{color: '#2C3E50'}}>
        {gettext('Toborzási és Kiválasztási Tanácsadó')}
      </h1>
    );
  },

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
        <div className="row">
          <div className="col-xs-12 col-md-6"
          style={{paddingLeft: '0px'}}>
            <img src="/static/img/about_me.jpg" style={{width: '100%'}}>
            </img>
          </div>
          <div className="col-xs-12 col-md-6 about-description"
               style={{color: '#2C3E50', paddingTop: '60px'}}>
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
        <div className="row">
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#2F353B'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#ACB5C3'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#67809F'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#E1E5EC'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#4C87B9'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#E5E5E5'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#4B77BE'}}>
          </div>
          <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
               style={{background: '#525E64'}}>
          </div>
        </div>
        <div className="row" style={{background: '#E9EDEF'}}>
          <div className="block-footer col-xs-12 col-md-5 about-description"
               style={{color: '#2C3E50'}}>
            <span>Birkas Orsolya,<br></br>
            Toborzási és Kiválasztási Tanácsadó</span>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="row">
              <div className="block-footer col-xs-7 about-description"
                   style={{color: '#2C3E50', paddingLeft: '0px'}}>
                <span>E-mail: orsolya.birkas@adecco.com<br></br>
                Telefon: 06308689742</span>
              </div>
              <div className="block-footer col-xs-1 col-xs-offset-1"
                   style={{background: '#3b5998'}}>
                <a href="">
                  <i className="fa fa-facebook social-icon"></i>
                </a>
              </div>
              <div className="block-footer col-xs-1"
              style={{background: '#4099FF'}}>
                <a href="">
                  <i className="fa fa-twitter social-icon"></i>
                </a>
              </div>
              <div className="block-footer col-xs-1"
              style={{background: '#0e76A8'}}>
                <a href="">
                  <i className="fa fa-linkedin social-icon"></i>
                </a>
              </div>
              <div>
              <h6 style={{color: '#2C3E50'}}>Webdesign & sitebuild: E_Bro</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Home;
