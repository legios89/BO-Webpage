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
          <div className="pattern col-xs-12 visible-xs" style={{height: '200px'}}></div>
          <div className="pattern col-sm-12 visible-sm" style={{height: '250px'}}></div>
          <div className="pattern col-md-12 visible-md" style={{height: '300px'}}></div>
          <div className="pattern col-lg-12 visible-lg" style={{height: '400px'}}></div>
            <h1 style={{color: '#2C3E50'}}>
            Toborzási és Kiválasztási Tanácsadó</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 img-responsive"
          style={{paddingTop: '60px', paddingBottom: '60px',
                  paddingLeft: '0px'}}>
            <img style={{width: '100%'}} src="/static/img/about_me.jpg">
            </img>
          </div>
          <div className="col-xs-12 col-md-6 about-description"
          style={{color: '#2C3E50', paddingTop: '60px'}}>
          <h4><br><b>ÜDVÖZLÖM!</b></br><br></br>
          <br>Birkás Orsolya vagyok,</br>
          <br>Toborzási és Kiválasztási Tanácsadó</br>
          </h4>
          <h5 className="isay">2012 óta pályáztatok és közvetítek ki, kis, közép és multinacionális
           cégeknek IT szakembereket, főkép fejlesztőket</h5>
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
