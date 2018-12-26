//port = 3012
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const app = express();
const port = 3012;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/otherlistings/:listingId', (req, res) => {
  // const listingId = req.params;
  db.getOtherListings((err, listings) => {
    if (err) {
      res.status(500).json(err);
    } else {
      console.log(listings);
      res.status(200).json(listings);
    }
  });
});

app.get('/otherlistings/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});

module.exports = app;
