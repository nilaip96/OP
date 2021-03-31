import React from 'react';
import SearchItem from './SearchItem.jsx';

const SearchList = (props) => (
  <div>
    {props.results.map((item) => (<SearchItem stats={item} key={item.player} />))}
  </div>
);

export default SearchList;
