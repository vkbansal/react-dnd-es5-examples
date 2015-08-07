var React = require('react'),
    ItemTypes = require('./ItemTypes'),
    ReactDnD = require('react-dnd');

var style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left'
};

var boxSource = {
    beginDrag: function(props) {
        return {
            name: props.name
        };
    }
};

var Box = React.createClass({
    propTypes: {
        connectDragSource: React.PropTypes.func.isRequired,
        isDragging: React.PropTypes.bool.isRequired,
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        isDropped: React.PropTypes.bool.isRequired
    },
    render: function() {
        style.opacity = this.props.isDragging ? 0.4 : 1;

        return (
            this.props.connectDragSource(
                <div style={style}>
                {this.props.isDropped ?
                  <s>{this.props.name}</s> :
                  this.props.name
                }
                </div>
            )
        );
    }
});

module.exports = ReactDnD.DragSource(function(props) { return props.type; }, boxSource, function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
})(Box);
