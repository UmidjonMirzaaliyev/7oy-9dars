import React from "react";

const MoviesList = ({ movies, onBookmarkClick }) => {
  return (
    <div className="render-films">
      {movies.Search &&
        movies.Search.map((film) => (
          <a href="./info-movies/index.html" target="_blank" key={film.imdbID}>
            <div className="films__top-gun">
              <img src={film.Poster} alt="Rasm yo'q" width="150" height="225" />
              <h1 className="films__title">{film.Title}</h1>
              <p className="films__data">{film.Year}</p>
              <button
                data-btn-id={film.imdbID}
                className="films__btn-bookmark"
                onClick={() => onBookmarkClick(film)}
              >
                Qidirish
              </button>
            </div>
          </a>
        ))}
    </div>
  );
};

export default MoviesList;
