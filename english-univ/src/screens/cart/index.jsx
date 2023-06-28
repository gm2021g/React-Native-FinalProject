import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { confirmOrder, removeFromCart } from "../../store/actions";
import { sendEmail } from "../../utils/sendEmail/sendEmail";

const Cart = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);
  const email = useSelector((state) => state.auth.email);

  const isCartEmpty = cart.length === 0;
  const onRemove = (id) => {
    dispatch(removeFromCart(id));
    Alert.alert("Alert", "The course was removed from the cart", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  const onConfirmOrder = () => {
    dispatch(confirmOrder({ cart, total, email }));
    Alert.alert(
      "Alert",
      "The purchase was made successfully! We will send you an email to confirm the purchase.",
      [{ text: "OK", onPress: () => {} }]
    );
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={isCartEmpty}
          style={isCartEmpty ? styles.buttonDisabled : styles.buttonConfirm}
          onPress={onConfirmOrder}
        >
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>USD {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
