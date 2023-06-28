import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.lightGray,
    padding: 6,
    paddingLeft: 12,
    borderBottomLeftRadius: 20,
  },
});
