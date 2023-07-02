import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import {
  addFavorite,
  getFavoritesById,
  removeFavorite,
} from "../../utils/dbFireBase/favorites";

const BtnFavorites = ({ course }) => {
  const email = useSelector((state) => state.auth.email);
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getFavoritesById(email, course.id);
      if (response && response.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    })();
  }, [course.id, isReload]);

  const onReload = () => setIsReload((prevState) => !prevState);

  const addFav = async () => {
    try {
      await addFavorite(email, course.id);
      onReload();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFav = async () => {
    try {
      await removeFavorite(email, course.id);
      onReload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {isFavorite !== undefined && (
        <Ionicons
          name={isFavorite ? "md-heart" : "md-heart-outline"}
          size={30}
          color={isFavorite ? COLORS.brightRed : COLORS.black}
          onPress={isFavorite ? removeFav : addFav}
        />
      )}
    </View>
  );
};

export default BtnFavorites;
