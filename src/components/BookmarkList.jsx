import React from "react";

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className="bookmark">
      {bookmarks.map((bookmark) => (
        <div className="films__top-gun" key={bookmark.imdbID}>
          <img src={bookmark.Poster} alt="" width="150" height="225" />
          <h1 className="films__title">{bookmark.Title}</h1>
          <p className="films__data">{bookmark.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
