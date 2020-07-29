const mongoose = require('mongoose');

// const URI ="mongodb+srv://admin:k7503673841@mongo-proj.z7pkk.mongodb.net/mongo-proj?retryWrites=true&w=majority";
const URI ="mongodb://localhost:27017/mongo-proj";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
