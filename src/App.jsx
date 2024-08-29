import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import BookmarkList from "./components/BookmarkList";
import Pagination from "./components/Pagination";

const API_KEY = "b1566df1";
const ITEMS_PER_PAGE = 10;

function App() {
  const [search, setSearch] = useState("home");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`
      );
      const data = await response.json();
      setMovies(data);
    };

    getMovies();
  }, [search, page]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleBookmarkClick = (film) => {
    if (!bookmark.includes(film)) {
      setBookmark([...bookmark, film]);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search movies"
      />
      <MoviesList movies={movies} onBookmarkClick={handleBookmarkClick} />
      <BookmarkList bookmarks={bookmark} />
      <Pagination
        totalResults={movies.totalResults}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
