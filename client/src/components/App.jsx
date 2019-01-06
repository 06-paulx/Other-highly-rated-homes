import React from 'react';
import $ from 'jquery';
import OtherListings from './OtherListings.jsx';
import ShowMore from './ShowMore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherListings: [],
    };
    this.showMoreHomes = this.showMoreHomes.bind(this);
  }
  //refine db query to return current id plus 4 listings
  //
  // another ajax call for show more button to find 8 listings

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://3.17.67.124/' + this.props.id + '/otherlistings',
      data: { num: 4 },
      success: listings => {
        this.setState({
          otherListings: listings,
        });
      },
    });
  }

  showMoreHomes() {
    $.ajax({
      method: 'GET',
      url: 'http://3.17.67.124/' + this.props.id + '/otherlistings',
      data: { num: 12 },
      success: listings => {
        this.setState({
          otherListings: listings,
        });
      },
    });
  }

  render() {
    // console.log('listing', this.state.otherListings);
    return (
      <div className="overallContainerAC">
        <span className="otherListingsTitleAC">Other highly rated homes</span>
        <OtherListings listings={this.state.otherListings} />

        <ShowMore showMore={this.showMoreHomes} />
      </div>
    );
  }
}

export default App;
