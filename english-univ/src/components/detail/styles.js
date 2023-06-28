import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: COLORS.primary,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  detail: {
    fontSize: 18,
    color: COLORS.black,
    alignContent: "center",
    marginLeft: 2,
    fontFamily: "Inter-Bold",
  },
});
