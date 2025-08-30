const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    
    age: {
        type: number,
        default: 20,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    adress: {
        type: String,
    },

    phone: number,

    role: {
        type: String,
        default: user,
    }

});