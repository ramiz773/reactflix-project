export const initialState = {
  favorites: [],
};

export const reducer = (state, { type, payload }) => {
  console.log(state.favorites);
  switch (type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== payload),
      };
    default:
      return state;
  }
};
