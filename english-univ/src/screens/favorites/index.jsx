import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, FlatList, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { FavoriteItem } from "../../components";
import { deleteOrder, getFavorites } from "../../store/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);
  const email = useSelector((state) => state.auth.email);

  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
    Alert.alert("Alert", "The Favorite was deleted", [
      { text: "OK", onPress: () => {} },
    ]);
  };
  const renderItem = ({ item }) => (
    <FavoriteItem item={item} onRemove={onRemove} />
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
