import React from 'react';

const SearchBar = ({ searchFunction}) => {
  return (
    <div>
        <input className="searchBar" type='search' onChange={searchFunction} />
    </div>
  )
};

export default SearchBar;
