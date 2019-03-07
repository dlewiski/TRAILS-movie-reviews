const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  year: {
    type: Number
  },
  reviews: [
    {
      text: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now

      }
    }
  ],
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
