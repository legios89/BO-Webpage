/* global gettext, bootbox, $ */
var React = require('react');
// var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Link = require('react-router').Link;

var Job = React.createClass({
  propTypes: {
    job   : React.PropTypes.object.isRequired,
    color : React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  /* *************** */
  /* REACT LIFECYCLE */
  /* *************** */

  componentDidMount: function () {
    if (this.props.active) {
      this.onDescriptionClick();
    }
  },

  /* *************** */
  /* CHANGE HANDLERS */
  /* *************** */

  onDescriptionClick: function () {
    var self = this;
    var buttons = {
      main: {
        label    : gettext('Bezár'),
        className: 'btn-danger mt-info close-button'
      }
    };
    var link = 'mailto:orsolya.birkas@adecco.com?subject=' + gettext('Jelentkezés') + ': ';
    link += this.props.job.title;

    // set the document title to be specific for every job (SEO)
    document.title = document.title.split('-')[0] += ' - ' + this.props.job.title;

    if (this.props.job.pdf !== null) {
      buttons.success = {
        label    : gettext('Letöltés'),
        className: 'btn-success mt-info',
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

    $($('.bootbox-body')[0]).before(
      ReactDOMServer.renderToString(
        <img src={this.props.job.image.url}
             style={{width: '100%', marginBottom: '15px'}}
             alt={this.props.job.title}/>
      )
    );

    $('.bootbox .modal-footer').append(
      ReactDOMServer.renderToString(
        <a href={link} target="_blank" className="btn btn-info mt-info">{gettext('E-mail')}</a>
      )
    );

    $('.bootbox, .close-button, .bootbox-close-button').click(function (ev) {
      if(ev.target !== this) {
        return;
      }
      $('.bootbox').modal('hide');
      self.context.router.push('/');
    });
  },

  /* ************* */
  /* RENDER BLOCKS */
  /* ************* */

  renderCategories: function () {
    return this.props.job.categories.map(function (category, key) {
      return (<pre className="mt-code" key={key}>{category.name}</pre>);
    });
  },

  renderButtonBlock: function () {
    var pdfButton;
    var buttonClass = 'mt-info btn ';
    if (this.props.job.pdf !== null) {
      pdfButton = (
        <div className="btn-group" role="group" style={{verticalAlign: 'initial'}}>
          <a href={this.props.job.pdf}
             className={buttonClass + 'btn-success'}
             target="_blank"
             ref="pdfButton">
            {gettext('Letöltés')}
          </a>
        </div>
      );
    }
    return(
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group" role="group" style={{verticalAlign: 'initial'}}>
          <Link className={buttonClass + 'btn-primary'}
                onClick={this.onDescriptionClick}
                to={'/' + this.props.job.id}>
            {gettext('Részletek')}
          </Link>
        </div>
        {pdfButton}
      </div>
    );
  },

  /* *********** */
  /* MAIN RENDER */
  /* *********** */

  render: function () {
    return (
      <div className="col-md-3 col-sm-4 col job-block"
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
                <div className="col-md-12 small-padding">
                  <div className="mt-overlay-4">
                    <img src={this.props.job.image.url}
                         alt={this.props.job.title}
                         className="job-image"
                         height={this.props.job.image.height}
                         width={this.props.job.image.width}/>
                  </div>
                  {this.renderButtonBlock()}
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
