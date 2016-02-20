var React = require('react');


var Job = React.createClass({
  propTypes: {
    job: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className="block-job col-lg-3 col-md-4 col-sm-6 col-xs-12"
           style={{background: '#2F353B'}}>
           {this.props.job.title}
      </div>
    );
  }
});

module.exports = Job;
