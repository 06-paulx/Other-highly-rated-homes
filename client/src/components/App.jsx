import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherListings: null,
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/otherlistings/' + this.props.id,
      success: listings => {
        {
          this.setState({
            otherListings: listings,
          });
        }
      },
    });
  }

  render() {
    return (
      <div>
        <otherListings listings={this.state.otherListings} />
        <showMore />
      </div>
    );
  }
}

export default App;
