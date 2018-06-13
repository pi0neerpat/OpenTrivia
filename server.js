var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT;
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log(port);
});
