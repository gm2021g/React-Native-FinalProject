import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
});
