import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/Movies/Details/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
