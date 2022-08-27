import React from "react";
import SearchMovie from "../Movies/Search/SearchMovie";
import Movies from "../Movies/Listing/MoviesListing";

const Home = () => {
  return (
    <main>
      <SearchMovie />
      <Movies />
    </main>
  );
};

export default Home;
