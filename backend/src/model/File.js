const { Schema, model } = require('mongoose');

const FileSchema = new Schema({
  userId: {
    type: String,
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  duration: {
    type: Date,
  },
  votes: {
    type: Array,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = model('File', FileSchema); //model nane & schema
