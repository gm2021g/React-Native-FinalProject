import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 15,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    alignItems: "stretch",
  },
});
