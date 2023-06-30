import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addToCart } from "../../store/actions";

const Course = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.selected);
  const onAddToCart = () => {
    dispatch(addToCart(course));
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: course.image }}
        style={styles.image}
      />
      <Text style={styles.name}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.price}>USD {course.price}</Text>
      <Text style={styles.hours}>Hours: {course.hours}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={COLORS.text} />
    </View>
  );
};

export default Course;
