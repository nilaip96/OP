import React from 'react';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>{this.props.stats.player}</div>
    );
  }
}

export default SearchItem;
