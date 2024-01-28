import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
function Pagination({ page, totalPages }) {
  const { dispatch } = useContext(AppContext);

  const handleNextPage = () => {
    dispatch({ type: "NEXT_PAGE", payload: 1 });
  };
  const handlePrevPage = () => {
    dispatch({ type: "PREVIOUS_PAGE", payload: 1 });
  };

  return (
    <div className="pagination">
      <button disabled={page <= 1 ? true : false} onClick={handlePrevPage}>
        Prev
      </button>
      <p>
        page {page} of {totalPages}
      </p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
