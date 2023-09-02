import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles/Style";
import BackIcon from "../components/Back.js";
import SendIcon from "../components/Send.js";
import DownIcon from "../components/Down.js";
import API from "../utils/API";
import moment from "moment";

export default function ChatScreen({ navigation, route }) {
  let [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const chatScroll = useRef();

  const thred = route.params.thred;
  const scrollToBottom = () => {
    chatScroll.current.scrollToEnd({ animated: true });
  };
  const sendMessage = () => {
    messages = [
      ...messages,
      {
        _id: Date.now(),
        content: message,
        role: "user",
        createdAt: moment().fromNow(),
      },
    ];
    setMessages(messages);
    setMessage("");
    scrollToBottom();
    API.conversation.messages.create(thred?._id, message).then((res) => {
      console.log(res)
      messages = [...messages, res];
      setMessages(messages);
      setTimeout(() => chatScroll.current.scrollToEnd({ animated: true }), 300);
    });
  };
  useEffect(() => {
    if (thred) {
      API.conversation.messages.list(thred._id).then((data) => {
        setMessages(data);
        setTimeout(
          () => chatScroll.current.scrollToEnd({ animated: true }),
          300
        );
      });
    }
  }, []);

  const backTo = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.aiBar}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={backTo}
            style={{
              width: 30,
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BackIcon style={{ marginRight: 20 }} />
          </TouchableOpacity>
          <Text style={styles.aiBarText}>
            {thred &&
              (thred.title.length >= 20
                ? thred.title.slice(0, 20) + "..."
                : thred.title)}
          </Text>
        </View>
      </View>
      <View style={styles.messages}>
        <ScrollView ref={chatScroll}>
          {messages.map((message, index) => {
            const isMessageOwner = message.role == "user";
            const isSendBefore =
              messages[index - 1] && messages[index - 1].type == message.role;

            return (
              <View
                key={message._id}
                style={{
                  flexDirection: "row",
                  justifyContent: isMessageOwner ? "flex-end" : "flex-start",
                  marginTop: 3,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#29323c",
                    padding: 20,
                    borderRadius: 20,
                    borderTopLeftRadius: 0,
                    paddingBottom: 20,
                    borderTopLeftRadius: !isSendBefore
                      ? isMessageOwner
                        ? 20
                        : 0
                      : 20,
                    borderTopRightRadius: !isSendBefore
                      ? isMessageOwner
                        ? 0
                        : 20
                      : 20,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {message.content}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 10 }}>
                      {moment(message.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity style={styles.goToBottom} onPress={scrollToBottom}>
          <DownIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.messageContainer}>
        <View style={styles.messageInputContainer}>
          <TextInput
            // onChangeText={onChangeNumber}
            value={message}
            onChangeText={setMessage}
            placeholder="useless placeholder"
            style={styles.messageInput}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              padding: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
