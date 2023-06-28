import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    width: "100%",
    maxWidth: 400,
    padding: 15,
    margin: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    minHeight: 340,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
    alignItems: "stretch",
  },

  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});
