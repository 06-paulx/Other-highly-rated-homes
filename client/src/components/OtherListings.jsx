import React from 'react';

const OtherListings = props => (
  <div className="otherListingsContainer">
    {props.listings.map((listingObj, index) => {
      console.log(props.listings, 'OTHER');
      return (
        <div key={index} className="singleListing">
          <img className="listingImage" src={listingObj.image_url} />
          <div>
            <span className="listingPlus">PLUS</span>
            <span className="listingBed"> VERIFIED . {listingObj.bed} BED</span>
          </div>
          <div className="listingTitle">{listingObj.listing_title}</div>
          <div className="listingType">{listingObj.listing_type}</div>
          <div className="listingPrice">
            ${listingObj.listing_price} per night
          </div>
          <div className="listingRating">{listingObj.rating}</div>
          <div className="listingReviews">{listingObj.reviews}</div>
        </div>
      );
    })}
  </div>
);

export default OtherListings;
