import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonConfirm: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  buttonConfirmText: {
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    fontSize: 18,
  },
  input: {
    width: "50%",
    borderBottomWidth: 2,
  //  borderBottomColor: COLORS.primary,
    color: COLORS.text,
    fontFamily: "Inter-Bold",
    fontSize: 17,
  },
});
