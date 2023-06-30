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

export const deleteFavorite = (email, idCourse) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${FIREBASE_REALTIME_DB_URL}/favorites/${email}/${idCourse}.json`,
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
        idCourse,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFavorite = (email, course) => {
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
            courseId: course.id,
            //   name: course.name,
            //   price: course.price
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
