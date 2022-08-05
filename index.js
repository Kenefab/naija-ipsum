//require express and create an Express app instance
const express = require("express");
const app = express();

//export app variable to be used in routes.js
module.exports.app = app;
//require the express routes to be defined in routes.js
const routes = require("./router");

//directory where static files are found
app.use(express.static("public"));

//sets routes to be used in applications
app.use(routes);

//port
const PORT = process.env.PORT || 5000;
//start accepting connections to the specified port
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
