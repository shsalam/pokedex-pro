const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Routes Requires
const pokemon = require("./routes/pokemon");

//Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// routes
app.use("/", pokemon);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
