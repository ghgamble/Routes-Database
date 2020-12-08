import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react'

const SearchBar = ({ onSearchUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearchUpdate(searchTerm);
    setSearchTerm('');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Input
        value={searchTerm}
        label='Search routes by route name, setter, grade, type'
        type='text'
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;
