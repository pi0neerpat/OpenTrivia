<<<<<<< HEAD
const {createServer} = require('http');
const next = require('next');

const app = next({
  //specifies production or dev mode
  // Checks for this variable, if true, then production mode
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if(err) throw err;
    console.log('Ready on localhost:3000');
  });
=======
var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT;
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log(8080);
>>>>>>> c263d083b976d17adf9b7745b1f575b9012ef914
});
