// style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // ekranın üst kısmına kutuyu yerleştirmek için
    backgroundColor: "#1E2530",
  },
  aiBar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#29323c", // açık renk
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  aiBarText: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  versionText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  headBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  newChat: {
    backgroundColor: "#29323c",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  newChatText: {
    color: "white",
  },
  main: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  chatContainer: {
    height: "80%",
    paddingTop: 5,
  },
  chatItem: {
    backgroundColor: "#29323c", // açık renk
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
  },
  chatItemTitle: {
    fontSize: 18,
    color: "white",
  },
  chatItemDate: {
    fontSize: 12,
    color: "gray",
  },
  desingedBy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    height: "5.6%",
  },
  desingedByText: {
    color: "white",
  },
});

export default styles;
