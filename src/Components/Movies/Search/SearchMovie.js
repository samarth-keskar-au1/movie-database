import React from "react";
import "./SearchMovie.css";
import { useGlobalContext } from "../../../Context/Context";

const SearchMovie = () => {
  const { query, setQuery, error, setIsFirstFetch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsFirstFetch(false);
        }}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchMovie;
