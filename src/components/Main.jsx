import React from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import { popularMovies } from "../utils/popularMovies";
function Main() {
   return (
      <main>
         <div className="movieSlider">
            <p style={{ textAlign: "center" }}>movie slider goes here</p>
         </div>
         <Wrapper>
            <h2 className="sectionTitle">pupolar movies</h2>
            <div className="gallery">
               {popularMovies.map((movie) => {
                  return <MovieCard movie={movie} key={movie.id} />;
               })}
            </div>
         </Wrapper>
      </main>
   );
}

export default Main;
