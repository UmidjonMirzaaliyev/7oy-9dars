import React from "react";

const Pagination = ({ totalResults, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="render-pag">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          className={`btn mx-auto pag-btn btn-primary mt-3 ms-2 ${
            currentPage === pageNum ? "active" : ""
          }`}
          onClick={() => handlePageClick(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
