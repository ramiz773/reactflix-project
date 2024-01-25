import React, { useEffect } from "react";
import { useState } from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorMess from "./ErrorMess";
import Slider from "./Slider";
import { useFetch } from "../Hooks/useFetch";
function Main() {
   const [page, setPage] = useState(1);
   const [data, loading, error] = useFetch("movie/popular", { page: page });
   const { results, total_pages } = data;
   // const [popMovies, setPopmovies] = useState([]);
   // const [totalPages, setTotalPages] = useState(null);
   // const [loading, setLoading] = useState(true);
   // const [error, setError] = useState(null);
   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          let { data } = await axios({
   //             method: "get",
   //             url: "https://api.themoviedb.org/3/movie/popular",
   //             params: {
   //                api_key: "f7083149ad71aa68e3e270bdfcaad937",
   //                page: page,
   //             },
   //          });
   //          setPopmovies(data.results);
   //          setTotalPages(data.total_pages);
   //          setTimeout(() => {
   //             setLoading(false);
   //          }, 500);
   //       } catch (error) {
   //          setError(error.message);
   //          setLoading(false);
   //       }
   //    };
   //    try {
   //    } catch (error) {}
   //    fetchData();
   // }, [page]);

   return (
      <main>
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
                  <Pagination setPage={setPage} page={page} totalPages={total_pages} />
               </>
            )}
         </Wrapper>
      </main>
   );
}

export default Main;
