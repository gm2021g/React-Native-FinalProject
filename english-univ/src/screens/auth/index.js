import { useReducer, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { Input } from "../../components";
import { COLORS } from "../../constants";
import { signIn, signUp } from "../../store/actions";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true }, // hasError se inicializa en true porque el campo es requerido
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false, // si ambos campos (email y password) son válidos
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      // eslint-disable-next-line no-case-declarations
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  // useReducer--> gestionar de una forma óptima el dispatch de cada uno de los cambios de estados utilizando un estado general para todos los estados que contenga este componente.
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin
    ? "Don't have an account?"
    : "Already have an account?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({
            email: formState.email.value,
            password: formState.password.value,
          })
        : signUp({
            email: formState.email.value,
            password: formState.password.value,
          })
    );
  };

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={COLORS.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "email" })
          }
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <Input
          placeholder="********"
          placeholderTextColor={COLORS.darkGray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "password" })
          }
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            color={COLORS.text}
            onPress={onHandleAuth}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
