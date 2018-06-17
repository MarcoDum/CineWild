var express = require('express');
var router = express.Router();

const Film = require('../models/films');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Film */

router.get('/film', (req, res /* , next */) => {
  Film.find({}).exec((err, film) => {
    if (err) return handleError(err);

    return res.json(film);
  });
});

/* Insert Film */
router.post('/film', (req, res /* , next */) => {
  const film = {
    titre: req.body.titre, date: req.body.date, auteur: req.body.auteur, acteur: req.body.acteur, image: req.body.image, note:req.body.note, desciption: req.body.desciption, genre: req.body.genre,
  };
  console.log(req.body);
  Film.create(film, (err, doc) => {
    if (err) {
      // res.json({ error: `Erreur à la création du film : ${err}` });
      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
