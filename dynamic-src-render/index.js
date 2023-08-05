const express = require("express");
const { create } = require("express-handlebars");

const app = express();

const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    appclient: "https://example.com/my-app.js",
    appname: "My App",
  },
});

// Set up Handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Define a route that renders the HTML template with dynamic data
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
