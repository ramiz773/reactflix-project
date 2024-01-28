import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [query, setQeuey] = useState("");
  const [defferedQuerry, setDefferedQuery] = useState("");
  const [data] = useFetch("/search/movie", { query: defferedQuerry });
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      setDefferedQuery(query);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  return (
    <div className="searchBox">
      <input
        type="search"
        className="searchField"
        value={query}
        onChange={(e) => setQeuey(e.target.value)}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map((movie) => {
            const releaseDate = new Date(movie.release_date).getFullYear();
            return (
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                  alt="movie poster"
                />
                <h4 onClick={() => navigate(`movie/${movie.id}`)}>
                  {movie.title}
                </h4>
                <p>{releaseDate ? releaseDate : "N/A"}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchBox;
