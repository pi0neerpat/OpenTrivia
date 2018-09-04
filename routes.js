//extra parentheses means this is a function
const routes = require("next-routes")();

// wildcard property designated with ':'.
// we must add a route to 'games/new' first to
// prevent the second route from overriding it.
routes
  .add("/games/new", "/games/new")
  .add("/games/:address", "/games/show")
  .add("/games/:address/play", "/games/play/index");

module.exports = routes;
