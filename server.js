const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT;

const app = next({
  //specifies production or dev mode
  // Checks for this variable, if true, then production mode
  dev: process.env.NODE_ENV !== "production"
});

const routes = require("./routes");

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port || 3000, err => {
    if (err) throw err;
    console.log("Ready on localhost:3000");
  });
});
