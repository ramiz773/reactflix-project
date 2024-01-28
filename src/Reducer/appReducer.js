export const initialState = {
  page: 1,
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
    case "NEXT_PAGE":
      return { ...state, page: state.page + payload };
    case "PREVIOUS_PAGE":
      return { ...state, page: state.page - payload };
    default:
      return state;
  }
};
