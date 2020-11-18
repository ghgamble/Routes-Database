import React from 'react';

import SearchBar from './components/SearchBar';
import List from './components/List';
import AddRoute from './components/AddRoute';

const App = () => {
      return (
            <div>
                  <div className="ui center aligned header" style={{marginTop: "20px"}}>Route Database</div>

                  <div className="ui riase container segment padded">
                        <SearchBar />
                        <List />
                        <AddRoute />
                  </div>
            </div>
      );
}

export default App;
