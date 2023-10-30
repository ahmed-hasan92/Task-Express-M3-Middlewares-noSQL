const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const mongodbUri = process.env.MONGODB_URI;
  const conn = await mongoose.connect(mongodbUri);
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
