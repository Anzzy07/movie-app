import React, { useState } from "react";
import { searchMovies } from "../services/api";
import { MovieCard } from "../component/MovieCard";
import "../css/Search.css";
import { Loader } from "../component/Spinner";

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      console.log(searchResults);
    } catch (error) {
      setError("Error searching movies");
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <Loader />
      ) : (
        <div className="movies-grid">
          {movies.length === 0 && !loading ? (
            searchQuery ? (
              <div>No movies found.</div>
            ) : (
              <div>Find Your Movies :)</div>
            )
          ) : (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          )}
        </div>
      )}
    </div>
  );
};
