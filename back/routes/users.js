const express = require('express');

const router = express.Router();

const User = require('../models/users');

/* Admin */
router.get('/admin', (req, res) => {
  res.render('admin', {
    user: req.admin.email,
    password: req.admin.password,
  });
});

/* Find User */
router.post('/login', (req, res /* , next */) => {
  User.find({})
    .where('email')
    .equals(req.body.email)
    .where('password')
    .equals(req.body.password)
    .exec((err, doc) => {
      if (err) {
      // res.json({ error: `Erreur à la création du message : ${err}` });
        res.json(err);
      } else {
        res.json(doc);
      }
    });
});

module.exports = router;
