const mongoose = require("mongoose");

async function connectMongoose() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/udyogSetuDatabase")
      .then((res) => console.log(`MongoDB Database is Connected`))
      .catch((err) => console.log(`Error connecting to Database:` + err));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectMongoose;
