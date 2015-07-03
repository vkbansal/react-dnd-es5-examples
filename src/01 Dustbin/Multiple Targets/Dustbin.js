var React = require('react'),
    ItemTypes = require('./ItemTypes'),
    ReactDnD = require('react-dnd');

var style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

var dustbinTarget = {
  drop: function(props, monitor) {
    return props.onDrop(monitor.getItem());
  }
};

var Dustbin = React.createClass({
    propTypes: {
    connectDropTarget: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired,
    canDrop: React.PropTypes.bool.isRequired,
    accepts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    lastDroppedItem: React.PropTypes.object,
    onDrop: React.PropTypes.func.isRequired
    },
  render: function() {
    var isActive = this.props.isOver && this.props.canDrop;

    style.backgroundColor = '#222';

    if (isActive) {
      style.backgroundColor = 'darkgreen';
  } else if (this.props.canDrop) {
      style.backgroundColor = 'darkkhaki';
    }

    return this.props.connectDropTarget(
      <div style={style}>

        {isActive ?
          'Release to drop' :
          'This dustbin accepts: ' + this.props.accepts.join(', ')
        }

        {this.props.lastDroppedItem &&
          <p>Last dropped: {JSON.stringify(this.props.lastDroppedItem)}</p>
        }
      </div>
    );
  }
});

module.exports = ReactDnD.DropTarget(function(props){ return props.accepts; }, dustbinTarget, function(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
})(Dustbin);
