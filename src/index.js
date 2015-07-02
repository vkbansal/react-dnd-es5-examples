var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>React-DnD ES5 examples</h1>
                <RouteHandler/>
            </div>
        );
    }
});

var About = React.createClass({
    render: function() {
        return(
            <div>
                <h1>React-DnD ES5 examples About</h1>
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route path="about" handler={About}/>
    </Route>
)

Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root/>, document.getElementById("main"));
});
