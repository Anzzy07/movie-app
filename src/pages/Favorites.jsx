import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../context/SavedMovie.context";
import { MovieCard } from "../component/MovieCard";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites-container">
      {favorites && favorites.length > 0 ? (
        <div className="favorites">
          <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding your favorite movies :)</p>
        </div>
      )}
    </div>
  );
};
