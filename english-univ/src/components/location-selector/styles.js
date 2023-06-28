import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 1,
    padding: 15,
  },
  preview: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    alignItems: "stretch",
  },
});
