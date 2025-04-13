const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://srinisamy2005:LjNareVPG5Wd37jD@cluster0.bhdtezw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      sslValidate: false, // Try this if you're having certificate validation issues
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;