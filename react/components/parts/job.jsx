var React = require('react');


var Job = React.createClass({
  propTypes: {
    job: React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
           style={{background: this.props.color}}>
           {this.props.job.title}
      </div>
    );
  }
});

module.exports = Job;
