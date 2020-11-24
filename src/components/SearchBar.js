import React, { useState } from 'react';

const SearchBar = ({ onSearchUpdate }) => {

      const [searchTerm, setSearchTerm] = useState('');

      const handleFormSubmit = (e) => {
            e.preventDefault();
            onSearchUpdate(searchTerm);
            setSearchTerm('');
      }

      return (
            <div>
                  <form className="ui form" onSubmit={handleFormSubmit}>
                        <div className="field">
                              <label>Search for a route by name, grade, setter, type</label>
                              <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        </div>
                        <button className="ui submit button">Search Routes</button>
                  </form>
            </div>
      );
}

export default SearchBar;
