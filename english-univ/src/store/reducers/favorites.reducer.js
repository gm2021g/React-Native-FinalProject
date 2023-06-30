import { favoritesTypes } from "../types";

const { DELETE_FAVORITE, GET_FAVORITES, ADD_FAVORITE } = favoritesTypes;

const initialState = {
  data: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      //console.log("state ", state);
      //console.log("action.favorites  ", action.favorites);

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
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    case ADD_FAVORITE:
      let updatedFav = [];
      console.log("Encontrados ", action.course.id);
      console.log("Data ", state.data);

      if (
        state.data.find(
          (fav) =>
            fav.email === action.email && fav.idCourse === action.idCourse
        )
      ) {
        updatedFav = [...state.data];
        console.log("Encontro igual ");
      } else {
        console.log("NO Encontro igual ");
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
