const { Schema, model } = require('mongoose');

const FileSchema = new Schema({
    userId: {
        type: String,
        
    },
    file: {
        type: String,
           
    },
    path: {
        type: String,
       
    },
    duration: {
        type: Date
    },
    votes: {
        type: Array
    },
    title: {
        type: Array
    },
    description: { 
        type: Array 
    }
    


   

})

module.exports = model('File', FileSchema); //model nane & schema
