import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

function Slider() {
   const [latestMovies, setLatestMovies] = useState([]);
   useState(() => {
      const fetchData = async () => {
         let { data } = await axios({
            method: "get",
            url: "https://api.themoviedb.org/3/movie/now_playing",
            params: {
               api_key: "f7083149ad71aa68e3e270bdfcaad937",
            },
         });
         setLatestMovies(data.results);
      };
      fetchData();
   }, []);
   let splideOptions = {
      heightRatio: 0.5,
      pagination: false,
      speed: 500,
      cover: true,
      padding: "15vw",
      breakpoints: {
         640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
            padding: "0",
         },
      },
   };

   return (
      <div className="movieSlider">
         <Splide options={splideOptions}>
            {latestMovies?.map((movie) => {
               return (
                  <SplideSlide key={movie.id}>
                     <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
                     <div className="slideCaption">
                        <h1>{movie.title}</h1>
                     </div>
                  </SplideSlide>
               );
            })}
         </Splide>
      </div>
   );
}

export default Slider;
