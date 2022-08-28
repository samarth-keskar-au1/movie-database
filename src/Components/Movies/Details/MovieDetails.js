import React from "react";
import "./MovieDetails.css";
import { useParams, Link } from "react-router-dom";
import useDebouncedFetch from "../../../Hooks/useDebouncedFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useDebouncedFetch(`&i=${id}`, true);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="movie-details">
      <img src={poster} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default MovieDetails;
