const mongoose = require("mongoose");
require('dotenv').config();
// const mongooseUrl = process.env.MONGODB_LOCAL_URL  
const mongooseUrl = process.env.MONGODB_URL;

mongoose.connect(mongooseUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("DATABASE CONNECTED");
})
db.on('disconnected', () => {
    console.log("DATABASE DISCONNECTED")
})
db.on('error', (err) => {
    console.log('UNABLE TO CONNECT WITH DATABASE :', err);
})

module.exports = db;