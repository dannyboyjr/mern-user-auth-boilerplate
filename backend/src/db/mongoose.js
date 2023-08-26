require("dotenv").config({ path: "backend/config.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Dan Kimball");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
