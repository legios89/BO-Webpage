var React = require('react');


var Job = React.createClass({
  propTypes: {
    job: React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
           style={{background: this.props.color}}>
        <div className="portlet light portlet-fit bordered">
          <div className="portlet-title">
            <div className="caption">
              <i className=" icon-layers font-green"></i>
              <span className="caption-subject font-green bold uppercase">
                <div className="caption-desc font-grey-cascade">
                  <pre className="mt-code">{this.props.job.title}</pre></div>
              </span>
            </div>
          </div>
          <div className="portlet-body">
            <div className="mt-element-overlay">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-overlay-4">
                    <img src="/static/img/06.jpg" />
                    <div className="mt-overlay">
                      <h2>{this.props.job.title}</h2>
                      <a className="mt-info btn btn-default" href="#">
                        Learn More
                      </a>
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
