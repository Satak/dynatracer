const path = require("path");
const express = require("express");

const app = express();
// Body parser
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/v1/items", require("./routes/items"));
app.use("/api/v1/misc", require("./routes/misc"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
