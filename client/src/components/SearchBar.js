import React from 'react';
import './SearchBar.css';

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search hotels or location..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
