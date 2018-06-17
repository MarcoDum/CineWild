const mongoose = require('mongoose');

const { Schema } = mongoose;

/* const FilmSchema = new Schema(
  {
    titre: { type: String, required: true, maxlength: 300 },
    date: { type: String, required: true, maxlength: 300 },
    auteur: { type: String, required: true, maxlength: 300 },
    acteur: { type: String, required: true, maxlength: 300 },
    image: { type: String, required: true },
    note: { type: String, required: true },
    description: { type: String, required: true, maxlength: 300 },
    genre: { type: String, required: true, maxlength: 300 },
  },
);
*/

// Export model
module.exports = mongoose.model('Film', {
    titre: String,
    date: String,
    auteur: String,
    acteur: String,
    image: String,
    note: String,
    description: String,
    genre: String,
});

