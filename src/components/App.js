import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import preloadedImages from "../data/preloadedImages";

function App() {
  const [searchResults, setSearchResults] = useState(preloadedImages);
  return (
    <div className="App" data-testid="app">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        data-testid="logo"
      />
      <Search setSearchResults={setSearchResults} />
      <div className="search-results">
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
