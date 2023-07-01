import { FIREBASE_REALTIME_DB_URL } from "../../../constants/data/firebase";

export const getFavorites = async (email) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/favorites.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    const favorites = Object.keys(result).map((key) => ({
      ...result[key],
      id: key,
    }));

    const favFiltered = favorites.filter((e) => e.email === email);

    console.log("FAVORITES ....    ", favFiltered);

    return favFiltered;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = async (email, idCourse) => {
  try {
    const resultGet = await getFavoritesById(email, idCourse);

    console.log("resultGet   ", resultGet, resultGet[0].id);

    if (resultGet && resultGet.length > 0) {
      console.log("ENTRO ");
      const response = await fetch(
        `${FIREBASE_REALTIME_DB_URL}/favorites/${resultGet[0].id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //const result = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = async (email, courseId) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/favorites.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        courseId,
      }),
    });

    // const result = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getFavoritesById = async (email, courseId) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/favorites.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    let favorites = Object.keys(result).map((key) => ({
      ...result[key],
      id: key,
    }));

    favorites = favorites.filter(
      (e) => e.email === email && e.courseId === courseId
    );
    return favorites;
  } catch (error) {
    console.log(error);
  }
};