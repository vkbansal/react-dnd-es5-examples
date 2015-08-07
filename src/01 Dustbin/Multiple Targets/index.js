var React = require('react'),
    Container = require('./Container');

var DustbinMultipleTargets  = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          <b><a href='https://github.com/vkbansal/react-dnd-es5-examples/tree/master/src/01%20Dustbin/Multiple%20Targets'>Browse the Source</a></b>
        </p>
        <p>
          This is a slightly more interesting example.
        </p>
        <p>
          It demonstrates how a single drop target may accept multiple types, and how those types may be derived from props.
          It also demonstrates the handling of native files and URLs (try dropping them onto the last two dustbins).
        </p>
        <Container />
      </div>
    );
  }
});

module.exports = DustbinMultipleTargets;
