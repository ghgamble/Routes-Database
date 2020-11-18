import React, { useState } from 'react';

const SearchBar = () => {

      const [searchTerm, setSearchTerm] = useState('');

      const onSearch = (e) => {
            e.preventDefault();
            console.log(searchTerm);
      }

      const searchTermChange = (e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
            // console.log(searchTerm);
      }

      return (
            <form className="ui form" onSubmit={onSearch}>
                  <div className="field">
                        <label>Search for a route by name, grade, setter, type</label>
                        <input type="text" value={searchTerm} onChange={searchTermChange} />
                  </div>
                  <button className="ui submit button">Search Routes</button>
            </form>
      );
}

export default SearchBar;
