import React from 'react';
import Modal from './Modal.jsx';

const heart = (
  <div className="heartContainer">
    <button
      type="button"
      className="heartButton"
      style={{ padding: '8px', margin: '-8px' }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="#484848"
        fillOpacity="0.5"
        stroke="#ffffff"
        strokeWidth="2.5"
        focusable="false"
        aria-label="Add listing to a list"
        role="img"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          height: '28px',
          width: '28px',
          display: 'block',
          overflow: 'visible',
        }}
      >
        <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
      </svg>
    </button>
  </div>
);

const defaultStarColor = 'rgb(166, 29, 85)';
const modalStarColor = 'rgb(0, 132, 137)';

const getStar = (key, color) => (
  <span className="star" key={key}>
    <svg
      viewBox="0 0 1000 1000"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1em',
        width: '1em',
        display: 'block',
        fill: color,
      }}
    >
      <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
    </svg>
  </span>
);

// const halfStar = (
//   <span className="halfStar">
//     <svg
//       viewBox="0 0 1000 1000"
//       role="presentation"
//       aria-hidden="true"
//       focusable="false"
//       style={{
//         height: '1em',
//         width: '1em',
//         display: 'block',
//         fill: 'rgb(166, 29, 85)',
//       }}
//     >
//       <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
//     </svg>
//   </span>
// );

const getGreyStar = key => (
  <span className="greyStar" key={key}>
    <svg
      viewBox="0 0 1000 1000"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: '1em',
        width: '1em',
        display: 'block',
        fill: '#D8D8D8',
      }}
    >
      <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
    </svg>
  </span>
);

const listingRating = (num, defaultStarColor) => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(getStar(i, defaultStarColor));
  }
  while (stars.length < 5) {
    stars.push(getGreyStar(stars.length));
  }
  return stars;
};

// const beds = {listingObj.bed} > 1 ? {listingObj.bed} BED : {listingObj.bed} BEDS}

class OtherListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      imageM: '',
      titleM: '',
      priceM: '',
      ratingM: '',
      reviewsM: '',
      placeM: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(target) {
    this.setState({
      modalOpen: true,
      imageM: target.image_url,
      titleM: target.listing_title,
      priceM: target.listing_price,
      ratingM: target.rating,
      reviewsM: target.reviews,
      placeM: target.place,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div className="otherListingsContainer">
        <Modal
          modalOpen={this.state.modalOpen}
          open={this.openModal}
          close={this.closeModal}
          image={this.state.imageM}
          title={this.state.titleM}
          rating={listingRating(this.state.ratingM, modalStarColor)}
          reviews={this.state.reviewsM}
          place={this.state.placeM}
        />
        {this.props.listings.map((listingObj, index) => {
          // console.log(props.listings, 'OTHER');
          const numBeds = listingObj.bed > 1 ? 'BEDS' : 'BED';
          return (
            <div key={index} className="singleListing">
              <div className="imageContainer">
                <img src={listingObj.image_url} className="listingImage" />

                <div onClick={() => this.openModal(listingObj)}>{heart}</div>
              </div>

              <div className="listingDetailsContainer">
                <div>
                  <span className="plusBackground">
                    <span className="listingPlus">PLUS</span>
                  </span>
                  <span className="listingBedContainer">
                    <span className="listingBed">
                      VERIFIED · {listingObj.bed} {numBeds}
                    </span>
                  </span>
                </div>

                <div className="listingTitle">{listingObj.listing_title}</div>

                <div className="listingPrice">
                  ${listingObj.listing_price} per night
                </div>
                <div className="reviewRatingContainer">
                  <div className="listingRating">
                    {listingRating(listingObj.rating, defaultStarColor)}
                  </div>
                  {/* {star}star{halfStar}halfstar{greyStar}greyStar */}
                  <div className="listingReviews">{listingObj.reviews}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OtherListings;
