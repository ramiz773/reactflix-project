// Favorites.jsx
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import Wrapper from "../components/Wrapper";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <Wrapper>
      <div className="gallery">
        <h3>Favorites</h3>
        {state?.favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Favorites;
