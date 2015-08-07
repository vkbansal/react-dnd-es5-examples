var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Redirect = Router.Redirect,
    DustbinSingleTarget = require("./01 Dustbin/Single Target"),
    DustbinMultipleTarget = require("./01 Dustbin/Multiple Targets"),
    SortableSimple = require("./04 Sortable/Simple");

var App = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <h3>ReactDnD ES5 examples <small>For those who cannot use ES6/7 despite using jsx.</small></h3>
                <div className="col-xs-3">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to="dustbin-single-target">Dustbin Single Target</Link></li>
                    <li><Link to="dustbin-multiple-target">Dustbin Multiple Target</Link></li>
                    <li><Link to="sortable-simple">Sortable Simple</Link></li>
                </ul>
                </div>
                <div className="col-xs-9" id="main">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route name="dustbin-single-target"  path="dustbin-single-target" handler={DustbinSingleTarget}/>
        <Route name="dustbin-multiple-target"  path="dustbin-multiple-target" handler={DustbinMultipleTarget}/>
        <Route name="sortable-simple"  path="sortable-simple" handler={SortableSimple}/>
        <Redirect from="/" to="dustbin-single-target"/>
    </Route>
)

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.getElementById("main"));
});
