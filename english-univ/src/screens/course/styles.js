import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
    marginHorizontal: 15,
  },
  name: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
    paddingVertical: 10,
    paddingLeft: 1,
    textAlign: "center",
  },
  price: {
    fontSize: 25,
    fontFamily: "Inter-Bold",
    paddingVertical: 20,
  },
  hours: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: 260,
  },
});
