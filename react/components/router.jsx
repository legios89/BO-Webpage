/* global gettext */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var useRouterHistory = ReactRouter.useRouterHistory;
var createBrowserHistory = require('react-router/node_modules/history/lib/createBrowserHistory');

// Components
var App = require('./app.jsx');
var Home = require('./home.jsx');

var NotFoundRoute = React.createClass({
  render: function () {
    return (<div className="not-found blue-gray-color">{gettext('Nem Található!')}</div>);
  }
});

var appHistory = useRouterHistory(createBrowserHistory)();
var mainContainer = document.getElementById('app-place');

ReactDOM.render((
  <Router history={appHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/job/:jobId" component={Home}/>
      <Route path="*" component={NotFoundRoute}/>
    </Route>
  </Router>), mainContainer);
