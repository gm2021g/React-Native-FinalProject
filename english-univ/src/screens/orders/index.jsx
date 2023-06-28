import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, FlatList, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { OrderItem } from "../../components";
import { deleteOrder, getOrders } from "../../store/actions";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);
  const email = useSelector((state) => state.auth.email);

  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
    Alert.alert("Alert", "The Order was deleted", [
      { text: "OK", onPress: () => {} },
    ]);
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onRemove={onRemove} />
  );

  // cuando la vista de ordenes este en foco yo quiero que vuelva a despachar las ordenes
  // useFocusEffect es parte de React navigation native
  useFocusEffect(
    useCallback(() => {
      // useCallback memoriza una funcion, React almacena el resultado de una función y cuando se altera esa func. la llama para alterar el resultado en memoria
      dispatch(getOrders(email));
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Orders;
