const express = require("express");
const db = require("./StartingWithMongoDB/db");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const PersonRoutes = require("./routes/PersonRoutes")
const MenuRoutes = require("./routes/MenuRoutes");

app.get("/", function (req, res) {
  res.send("welcome to node js 1st mongodb site");
});


app.use("/person", PersonRoutes);
app.use("/menu", MenuRoutes);

app.listen(3000, () => {
  console.log("server is listenig on port 3000");
});
