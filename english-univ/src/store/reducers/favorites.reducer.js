import { favoritesTypes } from "../types";

const { DELETE_FAVORITE, GET_FAVORITES, ADD_FAVORITE } = favoritesTypes;

const initialState = {
  data: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        data: action.favorites,
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        data: state.data.filter(
          (fav) =>
            fav.email !== action.email && fav.idCourse !== action.idCourse
        ),
      };

    case ADD_FAVORITE:
      let updatedFav = [];

      if (
        state.data.find(
          (fav) =>
            fav.email === action.email && fav.idCourse === action.idCourse
        )
      ) {
        updatedFav = [...state.data];
      } else {
        const result = { ...action.result };
        updatedFav = [...state.data, result];
      }

      return {
        ...state,
        data: updatedFav,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
