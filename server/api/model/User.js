
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required: [true, 'Please enter your full name'],
        maxlength: 100,
        minlenght: 3
    },
    phoneNumber: {
        type: String,
        required:[true, 'Please enter your phone number'],
        unique: true,
        // simple regex - no serious validators - replace it in the near future
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']

    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        unique: true,
    
    }
})

const User = mongoose.model('User', UserSchema, 'user-data'  )


