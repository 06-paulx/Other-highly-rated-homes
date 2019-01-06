//port = 3012
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const cors = require('cors');

const app = express();
const port = 6060;
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/:listingId/otherlistings', (req, res) => {
  const listingId = parseInt(req.params.listingId);
  const num = parseInt(req.query.num); //?x=f&y=t
  db.getListings(listingId, num, (err, listings) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(listings);
    }
  });
});

app.get('/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});

module.exports = app;
