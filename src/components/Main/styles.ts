import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 800,
    backgroundColor: "#262626",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    borderBottomWidth: 2,
    marginTop: 16,
    paddingBottom: 12,
    marginBottom: 24,
    borderColor: "#333333",
  },
  infoCount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 32,
  },
  createText: {
    color: "#4EA8DE",
  },
  concluedText: {
    color: "#5E60CE",
  },
  listContainer: {
    minHeight: 200,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    color: "#fff",
    marginBottom: 28,
  },
  containerText: {},
  firstText: {
    fontSize: 18,
    color: "#808080",
    fontWeight: "bold",
  },
  secondText: {
    fontSize: 18,
    color: "#808080",
  },
  itemTodo: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#333333",
    marginVertical: 8,
    width: 344,
  },
  textTodo: {
    fontSize: 20,
    color: "#ADADAD",
    maxWidth: "70%",
    textAlign: "center",
  },
  todoConclued: {
    textDecorationLine: "line-through",
    fontSize: 20,
    color: "#ADADAD",
    maxWidth: "70%",
    textAlign: "center",
  },
});
