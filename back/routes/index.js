var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Film */


const { ObjectID } = require('mongodb');

const Films = require('../models/films');

const handleError = err => console.error(err);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* Films */
router.get('/films', (req, res /* , next */) => {
  Films.find({})
    .sort({ name: 1 })
    .exec((err, film) => {
      if (err) return handleError(err);

      return res.json(film);
    });
});

/* Insert Film */
router.post('/films', (req, res /* , next */) => {
  const film = {
    name: req.body.name, date: req.body.date, sort: req.body.sort, description: req.body.description, img: req.body.img,
  };
  console.log(req.body);
  Films.create(film, (err, doc) => {
    if (err) {
      // res.json({ error: `Erreur à la création du pnj : ${err}` });
      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

/* Update Film */
router.put('/films/:id', (req, res) => {
  const { id } = req.params;
  const film = {
    name: req.body.name, date: req.body.date, sort: req.body.sort, description: req.body.description, img: req.body.img,
  };
  Films.update({ _id: new ObjectID(id) }, { $set: film }, { runValidators: true }, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(film);
    }
  });
});

/* Delete ~Film */
router.delete('/films/:id', (req, res) => {
  const { id } = req.params;
  Films.remove({ _id: new ObjectID(id) }).exec((err) => {
    if (err) {
      res.json({ error: `Erreur à la suppression du pnj : ${err}` });
    }
    return res.json(`Film ${id} supprimé`);
  });
});


module.exports = router;
