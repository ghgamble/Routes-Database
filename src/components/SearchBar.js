import React, { useState } from 'react';

const SearchBar = ({ onSearchUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearchUpdate(searchTerm);
    setSearchTerm('');
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Search routes by route name, setter, grade, type</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
