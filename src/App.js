import React, { useState } from 'react';

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
                  <div>
                        <div className="ui center aligned header" style={{marginTop: "20px"}}>Route Database</div>

                        <div className="ui riase container segment padded">
                              <SearchBar onSearchUpdate={updateSearch} />
                              <RoutesList term={term} />
                              <AddRoute />
                        </div>
                  </div>
            </FirebaseContext.Provider>
      );
}

export default App;
