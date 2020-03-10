const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
       
        required: true
    },
    
    password: {
        type: String,
        required: true,
        select:  false
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now,
    },
    friends: [{
        type: Schema.Types.ObjectId, //mongo ID
        ref: 'User' //referente a qual model
    }]

})

module.exports = model('User', UserSchema); //model nane & schema
