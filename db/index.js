const connection = require('./connection.js');

const getOtherListings = callback => {
  const query = 'SELECT * FROM otherListings';
  // const params = [listingId];
  connection.query(query, (err, listing) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, listing);
    }
  });
};

module.exports = {
  getOtherListings,
};
