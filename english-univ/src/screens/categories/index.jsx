import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { Header, Detail } from "../../components";
import CategoryItem from "../../components/category-item";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Courses", {
      name: item.name,
      color: item.color,
    });
  };

  const onHandleProfile = () => {
    navigation.navigate("Profile");
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="IT English University 📖" />
      <Detail text="Improve your English with our courses for IT" />

      <TouchableOpacity
        style={styles.containerProfile}
        onPress={onHandleProfile}
      >
        <Text style={styles.profile}> My Profile </Text>
      </TouchableOpacity>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
