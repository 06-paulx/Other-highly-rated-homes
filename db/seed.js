const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'otherListings',
});

const imageUrls = [
  'https://s3.us-east-2.amazonaws.com/fec20listings/house1.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house2.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house3.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house4.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house5.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house6.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house7.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house8.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house9.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house10.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house11.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house12.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house13.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house14.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house15.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house16.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house17.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house18.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house19.jpeg',
  'https://s3.us-east-2.amazonaws.com/fec20listings/house20.jpeg',
];

const listingTypes = ['Entire apartment', 'Entire condominium', 'Entire house'];

const listingTitles = [
  'Great Haven in a Terrific Location',
  'Sunny, Eclectic Home',
  'Unbeatable Location and Price',
  'Warm, Inviting Space for Your Trip',
  'Cozy Space with Panoramic Views',
  'Stylish Sanctuary Great Location',
  'Convenient Location and Friendly Host',
  'Relaxing Space for Family',
  'Perfect for Family Vacation',
  'Stylish, Comfortable Space for Your Stay',
  'Modern Living Space Close to Downtown',
  'Clean, Comfortable, and Close to Public Transit',
];
const listingPlaces = [
  'San Francisco,CA,United States',
  'Boston,MA,United States',
  'Miami,FL,United States',
  'Los Angeles,CA,United States',
  'Austin,TX,United States',
  'Portland,OR,Unitred States',
  'Chicago,IL,United States',
  'Honolulu,HA,United States',
  'Seattle,WA,United States',
  'Tuson,AZ, United States',
];

const randomType = () => {
  let index = Math.floor(Math.random() * listingTypes.length);
  return listingTypes[index];
};

const randomTitle = () => {
  let index = Math.floor(Math.random() * listingTitles.length);
  return listingTitles[index];
};
const randomPlaces = () => {
  let index = Math.floor(Math.random() * listingPlaces.length);
  return listingPlaces[index];
};

let dbSeeding = function(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

let currentQuery = Promise.resolve();
for (let i = 0; i < 100; i++) {
  var entries = entries || [];
  let query =
    'INSERT INTO otherListings (listing_title, listing_type, bed, listing_price, rating, reviews, place, image_url) VALUES (?,?,?,?,?,?,?,?)';
  let params = [
    randomTitle(),
    randomType(),
    Math.floor(Math.random() * 5) + 1,
    Math.floor(Math.random() * 200),
    Math.round(Math.random() * 2 + 3),
    Math.floor(Math.random() * 75 + 13),
    randomPlaces(),
    imageUrls[i % imageUrls.length],
  ];
  currentQuery = currentQuery.then(
    () => dbSeeding(query, params),
    err => console.err(err, 'Query failed'),
  );
}

currentQuery.then(
  result => {
    console.log(result, 'Success');
    connection.end();
  },
  err => {
    console.log(err);
    connection.end();
  },
);
