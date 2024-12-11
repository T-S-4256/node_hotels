const mongoose = require("mongoose");
const mongooseUrl = 'mongodb://127.0.0.1:27017/hotels'

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

module.exports=db;