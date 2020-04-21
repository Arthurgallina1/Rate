const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  userId: {
    type: String,
  },
  filename: {
    type: Array,
  },
  path: {
    type: Array,
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

module.exports = model('Post', PostSchema); //model nane & schema
