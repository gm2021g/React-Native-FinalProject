import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CourseItem } from "../../components";
import { COLORS } from "../../constants";
import { selectAllCourses, selectCourse } from "../../store/actions";
import {
  getFavorites
} from "../../utils/dbFireBase/favorites";

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState(undefined);
  const email = useSelector((state) => state.auth.email);
  const allCourses = useSelector((state) => state.courses.data);
  dispatch(selectAllCourses());

  const showFav = async () => {
    const resFavorites = await getFavorites(email);

    const result = [];
    resFavorites.forEach((fav) => {
      allCourses.forEach((course) => {
        if (fav.courseId === course.id) result.push(course);
      });
    });

    setFavorites(result);
  };

  useFocusEffect(
    useCallback(() => {
      showFav();
    }, [])
  );

  const keyExtractor = (item) => item.id;

  const onSelected = (item) => {
    dispatch(selectCourse(item.id));
    navigation.navigate("Course", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <CourseItem item={item} onSelected={onSelected} color={COLORS.favorite} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favorites;
