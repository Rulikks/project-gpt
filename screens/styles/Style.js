
// style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // ekranın üst kısmına kutuyu yerleştirmek için
    backgroundColor: "#1E2530",
    height: "100%",
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
  aiBarBackIcon: {
    marginRight: 10,
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
    alignItems: "center",
  },
  newChatText: {
    color: "white",
  },
  main: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: "100%",
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
    marginTop: 5,
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
    marginTop: 10,
  },
  desingedByText: {
    color: "white",
  },
  goToBottom: {
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: "#29323c",
    padding: 10,
    borderRadius: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messages: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },
  messageContainer: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: "rgba(30, 37, 48, 0.5)",
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(30, 37, 48, 0.5)",
  },
  messageInput: {
    backgroundColor: "white",
    padding: 15,
    paddingRight: 50,
    borderRadius: 50,
    width: "85%",
    marginRight: 5
  },
});

export default styles;
