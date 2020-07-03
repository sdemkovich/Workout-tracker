const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
