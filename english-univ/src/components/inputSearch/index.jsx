import React from "react";
import { TextInput, Button, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Input = ({ placeholder, value, onChangeText, onHandlerButton }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />

      <TouchableOpacity style={styles.buttonConfirm} onPress={onHandlerButton}>
        <Text style={styles.buttonConfirmText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Input;
