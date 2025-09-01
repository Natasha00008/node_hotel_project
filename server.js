const express = require("express");
const db = require("./StartingWithMongoDB/db");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const PersonRoutes = require("./routes/PersonRoutes")
const MenuRoutes = require("./routes/MenuRoutes");
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("welcome to node js 1st mongodb site");
});


app.use("/person", PersonRoutes);
app.use("/menu", MenuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is listenig on port 3000");
});
