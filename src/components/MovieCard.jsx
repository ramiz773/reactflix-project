import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ movie: { title, vote_average, poster_path, id } }) {
  // const { title, poster_path } = movie;
  return (
    <div className="movieCard">
      <Link to={`movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </Link>

      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <div className="favButton">#</div>
      </div>
    </div>
  );
}

export default MovieCard;
