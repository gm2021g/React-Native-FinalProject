import { useState, React } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { InputSearch, CourseItem } from "../../components";
import { COLORS } from "../../constants";
import { selectCourse } from "../../store/actions/courses.action";
import { filterCoursesSearch } from "../../store/actions/searches.action";

const Searches = ({ navigation }) => {
  const dispatch = useDispatch();
  const filteredCourses = useSelector(
    (state) => state.searches.searchCoursesResult
  );
  const onSelected = (item) => {
    dispatch(selectCourse(item.id));
    navigation.navigate("Course", {
      name: item.name,
    });
  };

  const [keyWords, setkeyWords] = useState("");

  const onSearch = () => {
    if (keyWords.length === 0) return;
    dispatch(filterCoursesSearch(keyWords));

    setkeyWords("");
  };

  const renderItem = ({ item }) => (
    <CourseItem item={item} onSelected={onSelected} color={COLORS.searches} />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <>
      <View styles={styles.inputContainer}>
        <InputSearch
          buttonColor={COLORS.brightRed}
          buttonTitle="Search"
          onChangeText={(keyWords) => setkeyWords(keyWords)}
          onHandlerButton={onSearch}
          placeholder="Enter keywords"
          value={keyWords}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={filteredCourses}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
    </>
  );
};

export default Searches;
