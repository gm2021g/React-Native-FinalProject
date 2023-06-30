import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { BtnFavorites } from "../../components";

const CourseItem = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>USD {item.price}</Text>
          <Text style={styles.hours}>Hours: {item.hours}</Text>
        </View>
        <BtnFavorites course={item} />
      </TouchableOpacity>
    </View>
  );
};

export default CourseItem;
