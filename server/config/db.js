const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://mohdash966:ashfaq@cluster0.bcd9qmr.mongodb.net/mgmt_db?retryWrites=true&w=majority");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;