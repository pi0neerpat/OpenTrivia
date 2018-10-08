var mongoose = require("mongoose");

//instantiate mongoose once in server.js
mongoose.promise = global.Promise;
//mongoose takes care of the order of function calls to ensure we have connection
// before the function goes

//select 1st for heroku mlabs addon, second for locahost
//"mongodb://thisguy:Sailing1@ds245901.mlab.com:45901/node-udemy-learn"
//process.env.MONGODB_URI
mongoose.connect(
  "mongodb://thisguy:Sailing1@ds245901.mlab.com:45901/node-udemy-learn"
);
// mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };
