const mongoose = require("mongoose");

// define the mongodb Url
const mongooseURL = "mongodb://localhost:27017/mydatabase";

// set up mongoDb Connection
mongoose.connect(mongooseURL); // <-- no need for options anymore

// get the default connection
const db = mongoose.connection;

// define event listeners for database connection
db.on("connected", () => {
  console.log("✅ Connected to MongoDB server");
});

db.on("disconnected", () => {
  console.log("⚠️ Disconnected from MongoDB server");
});

db.on("error", (err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});

module.exports = db;
