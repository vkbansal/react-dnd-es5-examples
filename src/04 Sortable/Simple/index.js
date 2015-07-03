var React = require('react'),
    Container = require('./Container');

var SortableSimple = React.createClass( {
    render: function() {
        return (
            <div>
                <p>
                    <b><a href='https://github.com/vkbansal/react-dnd-es5-examples/tree/master/src/04%20Sortable/Simple'>Browse the Source</a></b>
                </p>
                <p>
                    It is easy to implement a sortable interface with React DnD. Just make the same component both a drag source and a drop target, and reorder the data in the <code>hover</code> handler.
                </p>
                <Container />
            </div>
        );
    }
});

 module.exports = SortableSimple;
