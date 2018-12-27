const connection = require('./connection.js');

const getListings = (listingId, num, callback) => {
  const query =
    listingId < 88
      ? 'SELECT * FROM otherListings WHERE listing_id > ? LIMIT ?'
      : 'SELECT * FROM otherListings WHERE listing_id < ? ORDER BY listing_id DESC LIMIT ?';

  const params = [listingId, num];
  connection.query(query, params, (err, listing) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, listing);
    }
  });
};

module.exports = {
  getListings,
};
