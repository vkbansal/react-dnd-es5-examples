var React = require('react');
var ReactDnD = require('react-dnd');

var style = {
  width: 400
};

var Container = React.createClass({
  getInitialState: function(){
    return {
      cards: [{
        id: 1,
        order: 1,
        text: 'Write a cool JS library'
      }, {
        id: 2,
        order: 2,
        text: 'Make it generic enough'
      }, {
        id: 3,
        order: 3,
        text: 'Write README'
      }, {
        id: 4,
        order: 4,
        text: 'Create some examples'
      }, {
        id: 5,
        order: 5,
        text: 'Spam in Twitter and IRC to promote it'
      }, {
        id: 6,
        order: 6,
        text: '???'
      }, {
        id: 7,
        order: 7,
        text: 'PROFIT'
      }]
    };
  },

  compareCards: function(card1, card2){
    return card1.order - card2.order;
  },

  swapCards: function(id1, id2) {
    var cards = this.state.cards;

    var card1 = cards.filter(function(c){return c.id === id1})[0];
    var card2 = cards.filter(function(c){return c.id === id2})[0];
    var card1Order = card1.order;
    card1.order = card2.order;
    card2.order = card1Order;

    cards.sort(this.compareCards);

    this.setState({
      cards: cards
    });
  },

  render: function() {
    return (
      <div style={style}>
        {this.state.cards.map(function(card) {
          return (
            <Card key={card.id}
                  id={card.id}
                  text={card.text}
                  swapCards={this.swapCards} />
          );
        }, this)}
      </div>
    );
  }
});

module.exports = ReactDnD.DragDropContext(ReactDnD.HTML5)(Container);