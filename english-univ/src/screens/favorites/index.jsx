import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, FlatList, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CourseItem } from "../../components";
import { COLORS } from "../../constants";
import { deleteOrder, getFavorites, selectCourse } from "../../store/actions";

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);
  const email = useSelector((state) => state.auth.email);

  const keyExtractor = (item) => item.id;
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
    Alert.alert("Alert", "The Favorite was deleted", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  const onSelected = (item) => {
    dispatch(selectCourse(item.courseId));
    navigation.navigate("Course", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <CourseItem item={item} onSelected={onSelected} color={COLORS.favorite} />
  );

  // cuando la vista de ordenes este en foco yo quiero que vuelva a despachar las ordenes
  // useFocusEffect es parte de React navigation native

  useFocusEffect(
    useCallback(() => {
      // useCallback memoriza una funcion, React almacena el resultado de una función y cuando se altera esa func. la llama para alterar el resultado en memoria
      dispatch(getFavorites(email));
    }, [dispatch])
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
