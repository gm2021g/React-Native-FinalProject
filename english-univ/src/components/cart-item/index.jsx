import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.price}>USD {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.brightRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
