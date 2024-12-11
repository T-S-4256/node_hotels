const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'bitter', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingridiant: {
        type: [String],
        default: []
    },
    no_sales:{
        type:Number,
        default:0
    }

});

const menuItem=mongoose.model('menu',menuSchema);
module.exports=menuItem;
