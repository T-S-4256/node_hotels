const mongoose = require('mongoose');


//DEFINING THE PERSON SCHEMA 

let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    designation: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        require: true
    }
})

//CREATING PERSON MODEL

const person=mongoose.model('person',personSchema);
module.exports=person;