import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CourseItem } from "../../components";
import {
  filterCourses,
  selectCourse,
} from "../../store/actions/courses.action";

const Courses = ({ navigation }) => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories.selected);
  const filteredCourses = useSelector((state) => state.courses.filteredCourses);

  const onSelected = (item) => {
    dispatch(selectCourse(item.id));
    navigation.navigate("Course", {
      name: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterCourses(category.id));
  }, []);

  const renderItem = ({ item }) => (
    <CourseItem item={item} onSelected={onSelected} color={category.color} />
  );

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredCourses}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Courses;
