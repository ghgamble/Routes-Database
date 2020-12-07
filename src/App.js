import React, { useState } from 'react';

import { Container, Header } from 'semantic-ui-react';

import SearchBar from './components/SearchBar';
import RoutesList from './components/RoutesList';
import AddRoute from './components/AddRoute';

import firebase, { FirebaseContext } from './firebase';

const App = () => {
  const [term, setTerm] = useState('');

  const updateSearch = (searchItem) => {
    setTerm(searchItem);
  }

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Container text style={{ marginTop: "5px", marginBottom: "5px" }}>
        <Header textAlign="center">Route Database</Header>
        <SearchBar onSearchUpdate={updateSearch} />
        <RoutesList term={term} />
        <AddRoute />
        </Container>
      </FirebaseContext.Provider>
    );
}

export default App;
