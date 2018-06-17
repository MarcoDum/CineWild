const mongoose = require('mongoose');

const { Schema } = mongoose;

const FilmSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 300 },
  },
);


// Export model
module.exports = mongoose.model('Film', FilmSchema);

