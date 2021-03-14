import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <img src="mock-image" alt="space-img" />
      </>
    );
  }
};

export default SearchResults;
