var React = require('react'),
    update = require('react/lib/update'),
    ReactDnD = require('react-dnd'),
    HTML5Backend = require('react-dnd/modules/backends/HTML5'),
    NativeTypes = HTML5Backend.NativeTypes,
    Dustbin = require('./Dustbin'),
    Box = require('./Box'),
    ItemTypes = require('./ItemTypes');

var Container = React.createClass({
    getInitialState: function(props) {
        return {
            dustbins: [
                { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
                { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
                { accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL], lastDroppedItem: null },
                { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null }
            ],
            boxes: [
                { name: 'Bottle', type: ItemTypes.GLASS },
                { name: 'Banana', type: ItemTypes.FOOD },
                { name: 'Magazine', type: ItemTypes.PAPER }
            ],
            droppedBoxNames: []
        };
    },
    isDropped: function(boxName) {
        return this.state.droppedBoxNames.indexOf(boxName) > -1;
    },
    render: function() {
        return (
          <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {this.state.dustbins.map(function(item, index) {
                    return (
                        <Dustbin accepts={item.accepts}
                                 lastDroppedItem={item.lastDroppedItem}
                                 onDrop={function(e){this.handleDrop(index, e)}.bind(this)}
                                 key={index} />
                    );
                }.bind(this))}
            </div>

            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {this.state.boxes.map(function(item, index) {
                    return (
                        <Box name={item.name}
                             type={item.type}
                             isDropped={this.isDropped(item.name)}
                             key={index} />
                    );
                }.bind(this))}
            </div>
          </div>
        );
    },
    handleDrop: function(index, item) {
        var state = {
          dustbins: {},
          droppedBoxNames: name ? {
            $push: [item.name]
          } : {}
        };

        state.dustbins[index] = {
          lastDroppedItem: {
            $set: item
          }
        };

        this.setState(update(this.state, state));
    }
});

module.exports = ReactDnD.DragDropContext(HTML5Backend)(Container);
