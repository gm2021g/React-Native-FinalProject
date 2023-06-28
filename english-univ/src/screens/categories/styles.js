import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
  containerProfile: {
    height: 40,
    width: 100,
    backgroundColor: COLORS.primary,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  profile: {
    fontSize: 15,
    color: COLORS.black,
    alignContent: "center",
    marginLeft: 2,
    fontFamily: "Inter-Bold",
  },
});
