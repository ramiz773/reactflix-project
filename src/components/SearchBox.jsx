import React, { useState } from "react";

function SearchBox() {
  const [query, setQeuey] = useState("");
  console.log(query);
  return (
    <div className="searchBox">
      <input
        type="search"
        className="searchField"
        value={query}
        onChange={(e) => setQeuey(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
