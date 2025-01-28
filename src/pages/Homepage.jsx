import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { MovieCard } from "../component/MovieCard";
import "../css/Home.css";
import { fetchPopularMovies } from "../services/api";
import { Loader } from "../component/Spinner";

export const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};
