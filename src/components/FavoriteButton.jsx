import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import HeartFilled from "../assets/heart-filled.svg";
import HeartLinned from "../assets/heart-lined.svg";
function FavoriteButton({ movie }) {
  const { state, dispatch } = useContext(AppContext);

  const favorited = state?.favorites?.some((fav) => fav.id === movie.id);
  const handleFavorites = () => {
    favorited
      ? dispatch({ type: "REMOVE_FAVORITE", payload: movie.id })
      : dispatch({ type: "ADD_FAVORITE", payload: movie });
  };
  return (
    <div className="favButton" onClick={handleFavorites}>
      {favorited ? (
        <img src={HeartFilled} alt="fav-icon" width={24} />
      ) : (
        <img src={HeartLinned} alt="fav-icon" width={24} />
      )}
    </div>
  );
}

export default FavoriteButton;
