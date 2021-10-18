const mongoose = require("mongoose");
const mongoURI = require("../config/configBasic").mongoDB.mongoURI;

const connectDB = async () => {
  try {
    const conn =await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongoDB connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(error.message);
    //Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;
