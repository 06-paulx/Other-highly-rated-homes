DROP DATABASE IF EXISTS otherListings;

CREATE DATABASE otherListings;

USE otherListings;

CREATE TABLE otherListings (
    listing_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    listing_title VARCHAR(255) NOT NULL,
    listing_type VARCHAR(255),
    bed INT,
    listing_price INT NOT NULL,
    rating INT,
    reviews INT,
    place VARCHAR(255),
    image_url VARCHAR(255)
);

