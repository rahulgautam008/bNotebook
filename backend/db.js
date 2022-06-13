const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoes succesfully congrachulations");
  });
};
module.exports = connectToMongo;
