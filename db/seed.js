
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'otherListings'
})

var imageUrls = {
    1: 'https://s3.us-east-2.amazonaws.com/fec20listings/house1.jpeg',
    2: 'https://s3.us-east-2.amazonaws.com/fec20listings/house2.jpeg',
    3: 'https://s3.us-east-2.amazonaws.com/fec20listings/house3.jpeg',
    4: 'https://s3.us-east-2.amazonaws.com/fec20listings/house4.jpeg',
    5: 'https://s3.us-east-2.amazonaws.com/fec20listings/house5.jpeg',
    6: 'https://s3.us-east-2.amazonaws.com/fec20listings/house6.jpeg',
    7: 'https://s3.us-east-2.amazonaws.com/fec20listings/house7.jpeg',
    8: 'https://s3.us-east-2.amazonaws.com/fec20listings/house8.jpeg',
    9: 'https://s3.us-east-2.amazonaws.com/fec20listings/house9.jpeg',
    10: 'https://s3.us-east-2.amazonaws.com/fec20listings/house10.jpeg',
    11: 'https://s3.us-east-2.amazonaws.com/fec20listings/house11.jpeg',
    12: 'https://s3.us-east-2.amazonaws.com/fec20listings/house12.jpeg',
    13: 'https://s3.us-east-2.amazonaws.com/fec20listings/house13.jpeg',
    14: 'https://s3.us-east-2.amazonaws.com/fec20listings/house14.jpeg',
    15: 'https://s3.us-east-2.amazonaws.com/fec20listings/house15.jpeg',
    16: 'https://s3.us-east-2.amazonaws.com/fec20listings/house16.jpeg',
    17: 'https://s3.us-east-2.amazonaws.com/fec20listings/house17.jpeg',
    18: 'https://s3.us-east-2.amazonaws.com/fec20listings/house18.jpeg',
    19: 'https://s3.us-east-2.amazonaws.com/fec20listings/house19.jpeg',
    20: 'https://s3.us-east-2.amazonaws.com/fec20listings/house20.jpeg'
}

var listingTypes = ['Entire apartment', 'Entire condominium', 'Entire house'];

var listingTitles = ['Great Haven in a Terrific Location', 'Sunny, Eclectic Home', 'Unbeatable Location and Price', 'Warm, Inviting Space for Your Trip', 'Cozy Space with Panoramic Views', 'Stylish Sanctuary Great Location', 'Convenient Location and Friendly Host', 'Relaxing Space for Family', 'Perfect for Family Vacation', 'Stylish, Comfortable Space for Your Stay', 'Modern Living Space Close to Downtown', 'Clean, Comfortable, and Close to Public Transit']

var randomImage = function () {
    var items = Object.keys(imageUrls).length;
    var index = Math.floor((Math.random() * items) + 1;
    return imageUrls[index];
}

var randomType = function () {
    var index = Math.floor(Math.random() * listingTypes.length);
    return listingTypes[index];
}

var randomTitle = function () {
    var index = Math.floor(Math.random() * listingTitles.length);
    return listingTitles[index];
}


var dbSeeding = function (query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

for (var i = 0; i < 100; i++) {
    var entries = entries || [];
    var query = 'INSERT INTO otherListings (listing_title, listing_type, bed, listing_price, rating, reviews, image_url) VALUES (?,?,?,?,?,?,?)';
    var params = [randomTitle(), randomType(), Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 200), Math.floor(((Math.random() * 2) + 3)), Math.floor(((Math.random() * 75) + 13)), randomImage()];

    entries.push(dbSeeding(query, params));
}


Promise.all(entries)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


