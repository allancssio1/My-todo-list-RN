import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "row",
    marginTop: -32,
    justifyContent: "space-around",
  },
  textInput: {
    backgroundColor: "#333333",
    borderColor: "#5E60CE",
    color: "#F2F2F2",
    fontSize: 16,
    borderWidth: 2,
    padding: 12,
    borderRadius: 8,
    height: 64,
    width: 288,
  },
  buttonAdd: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: "#4EA8DE",
    alignItems: "center",
    justifyContent: "center",
  },
});
