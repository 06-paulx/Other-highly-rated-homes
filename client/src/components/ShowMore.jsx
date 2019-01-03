import React from 'react';

// const ShowMore = props => {
//   return (
//     <div className="showMore" onClick={props.showMore}>
//       Show more homes
//     </div>
//   );
// };

class ShowMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
    this.hasSeenMore = this.hasSeenMore.bind(this);
  }

  hasSeenMore() {
    this.setState({
      expanded: true,
    });
  }
  render() {
    return this.state.expanded ? (
      <div />
    ) : (
      <div>
        <div
          className="showMoreAC"
          onClick={() => {
            this.props.showMore();
            this.hasSeenMore();
          }}
        >
          Show more homes
        </div>
      </div>
    );
  }
}

export default ShowMore;

// const MoreHomes = () => {
//   <div className="showMore" onClick={props.moreHomes} />;
// };

// <MoreHomes moreHomes={props.showMore} />;
