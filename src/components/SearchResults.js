import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
