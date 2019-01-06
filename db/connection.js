const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root',
  password: 'password',
  database: 'otherListings',
});

module.exports = connection;
