var http = require('http'),
    pg = require('pg');
 
var pg_url = "tcp://hosting-db@localhost/postgres";
var pg_conn = new pg.Client(pg_url);
 
var test_pg_conn = function(callback) {
  pg_conn.connect(function(err) {
    if (err) {
      console.log(err);
      if (callback) callback("NOT WORKING");
    } else {
      console.log('Connected to PostgreSQL');
      if (callback) callback("OK");
    }
  });
};
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Node.js!\n');
  test_pg_conn(function(pg_status) {
    res.write('PostgreSQL connection: ' + pg_status + '\n');
    res.end();
  });
}).listen(process.env.PORT)