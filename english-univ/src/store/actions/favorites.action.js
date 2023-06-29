import { FIREBASE_REALTIME_DB_URL } from "../../constants/data/firebase";
import { favoritesTypes } from "../types";

const { GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } = favoritesTypes;

export const getFavorites = (email) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${FIREBASE_REALTIME_DB_URL}/favorites.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      let favorites = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));

      favorites = favorites.filter((e) => e.email === email);
      dispatch({
        type: GET_FAVORITES,
        favorites,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorite = (email, idCurse) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${FIREBASE_REALTIME_DB_URL}/favorites/${email}/${idCurse}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      dispatch({
        type: DELETE_FAVORITE,
        email,
        idCurse,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFavorite = (email, courseId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${FIREBASE_REALTIME_DB_URL}/favorites.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            courseId,
          }),
        }
      );

      const result = await response.json();
      console.log("result", result);

      dispatch({
        type: ADD_FAVORITE,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
