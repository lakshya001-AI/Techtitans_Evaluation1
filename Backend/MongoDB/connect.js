const mongoose = require("mongoose");

async function connectMongoose() {
  try {
    await mongoose
      .connect("mongodb+srv://makodelakshya101:BOypb5Jhs4zVemna@cluster0.ujdfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then((res) => console.log(`MongoDB Database is Connected`))
      .catch((err) => console.log(`Error connecting to Database:` + err));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectMongoose;
