/* global gettext, bootbox, $ */
var React = require('react');
// var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var Job = React.createClass({
  propTypes: {
    job  : React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired
  },

  onDescriptionClick: function () {
    var self = this;
    var buttons = {
      main: {
        label    : gettext('Close'),
        className: 'btn-danger'
      }
    };

    if (this.props.job.pdf !== null) {
      buttons.success = {
        label    : gettext('Download PDF'),
        className: 'btn-success',
        callback : function () {
          $(self.refs.pdfButton)[0].click();
        }
      };
    }

    bootbox.dialog({
      message : this.props.job.description,
      title   : this.props.job.title,
      backdrop: true,
      buttons : buttons
    });

    $($('.bootbox-body')[0]).before(ReactDOMServer.renderToString(
      <img src={this.props.job.image} style={{width: '100%', marginBottom: '15px'}}/>
    ));

    $('.bootbox').click(function (ev) {
      if(ev.target !== this) {
        return;
      }
      $('.bootbox').modal('hide');
    });
  },

  renderCategories: function () {
    return this.props.job.categories.map(function (category, key) {
      return (<pre className="mt-code" key={key}>{category.name}</pre>);
    });
  },

  renderButtonBlock: function (extraDivClass, extraStyle) {
    var pdfButton;
    var buttonClass = 'mt-info btn ';
    if (this.props.job.pdf !== null) {
      pdfButton = (
        <div className="btn-group" role="group">
          <a href={this.props.job.pdf}
             className={buttonClass + 'btn-success'}
             target="_blank"
             ref="pdfButton"
             style={extraStyle}>
            {gettext('PDF')}
          </a>
        </div>
      );
    }
    return(
      <div className={'btn-group btn-group-justified ' + extraDivClass} role="group">
        <div className="btn-group" role="group">
          <button className={buttonClass + 'btn-primary'}
                  onClick={this.onDescriptionClick}
                  style={extraStyle}>
            {gettext('Részletek')}
          </button>
        </div>
        {pdfButton}
      </div>
    );
  },

  render: function () {
    var image = this.props.job.image;
    image = image === null ? 'http://placehold.it/600x600' : image;

    return (
      <div className="col-md-3 col-sm-4 col-xs-6 col job-block"
           style={{background: this.props.color}}>
        <div className="portlet">
          <div className="portlet-title">
            <div className="caption">
              <span className="caption-subject bold uppercase">
                {this.props.job.title}
              </span>
              <div style={{minHeight: '21px'}}>
                {this.renderCategories()}
              </div>
            </div>
          </div>
          <div className="portlet-body">
            <div className="mt-element-overlay">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-overlay-4">
                    <img src={image} className="job-image"/>
                    <div className="mt-overlay">
                      <h2>{this.props.job.title}</h2>
                      {this.renderButtonBlock('hidden-xs')}
                    </div>
                  </div>
                  {this.renderButtonBlock('visible-xs', {fontSize: '14px'})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Job;
