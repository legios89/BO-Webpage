/* global gettext*/
var React = require('react');

var Job = React.createClass({
  propTypes: {
    job  : React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6 col job-block"
           style={{background: this.props.color}}>
        <div className="portlet">
          <div className="portlet-title">
            <div className="caption">
              <span className="caption-subject bold uppercase">
                {this.props.job.title}
              </span>
              <div>
                <pre className="mt-code">php</pre>
                <pre className="mt-code">nodejs</pre>
              </div>
            </div>
          </div>
          <div className="portlet-body">
            <div className="mt-element-overlay">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-overlay-4">
                    <img src="http://placehold.it/600x600" className="job-image"/>
                    <div className="mt-overlay">
                      <h2>{this.props.job.title}</h2>
                      <button className="mt-info btn btn-default">
                        {gettext('Részletek')}
                      </button>
                    </div>
                  </div>
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
