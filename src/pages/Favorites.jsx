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
      <h2 className="sectionTitle">Favorites Movies</h2>
      <div className="gallery">
        {state?.favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Favorites;
