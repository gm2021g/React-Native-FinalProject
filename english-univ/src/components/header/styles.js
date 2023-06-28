import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: COLORS.secondary,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: "Inter-Bold",
  },
});
