import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addFavorite } from "../../store/actions";

const BtnFavorites = ({ course }) => {
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();
  const addFav = () => {
    try {
      console.log("Lama a addFavorite");
      dispatch(addFavorite(email, course));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="md-heart"
        size={30}
        color={COLORS.brightRed}
        onPress={addFav}
      />
    </View>
  );
};

export default BtnFavorites;
