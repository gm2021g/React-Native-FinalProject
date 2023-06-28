import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderColor: COLORS.borders,
    borderWidth: 3,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.5,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
    color: COLORS.text,
  },
});
