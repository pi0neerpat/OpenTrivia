var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT;
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log(8080);
});
