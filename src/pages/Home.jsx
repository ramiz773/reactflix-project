import React from "react";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMess from "../components/ErrorMess";
import Slider from "../components/Slider";
import useFetch from "../Hooks/useFetch";
function Home() {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch("movie/popular", { page: page });
  const { results, total_pages } = data;
  return (
    <>
      <Slider></Slider>
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMess>Request faild with status code 404</ErrorMess>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">pupolar movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />;
              })}
            </div>
            <Pagination
              setPage={setPage}
              page={page}
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </>
  );
}

export default Home;
