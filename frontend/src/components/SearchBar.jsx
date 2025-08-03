import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or specialization"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
