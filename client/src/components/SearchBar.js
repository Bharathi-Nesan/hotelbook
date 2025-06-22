import React from 'react';
import './SearchBar.css';

function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search hotels by name or location..."
      />
    </div>
  );
}

export default SearchBar;
