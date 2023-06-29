import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addFavorite } from "../../store/actions";

const BtnFavorites = ({ courseId }) => {
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();
  const addFav = () => {
    try {
      dispatch(addFavorite(email, courseId));
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
