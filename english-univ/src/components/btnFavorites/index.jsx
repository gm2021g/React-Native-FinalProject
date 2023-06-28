import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addFavorite } from "../../store/actions";

const BtnFavorites = ({ courseId }) => {
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();
  const addFavorite = () => {
    try {
      const data = {
        email,
        courseId,
      };

      //dispatch(addFavorite({ email, courseId }));
      console.log("Alta de fav realizada ", data);
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
        onPress={addFavorite}
      />
    </View>
  );
};

export default BtnFavorites;
