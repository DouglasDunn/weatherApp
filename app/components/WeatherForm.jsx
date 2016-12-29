var React = require("react");

var WeatherForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    var update = {};

    if (location.length > 0) {
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="location" type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
