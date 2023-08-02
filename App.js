import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./Style";
import BackIcon from "./components/Back.js";
import SendIcon from "./components/Send.js";
import DownIcon from "./components/Down.js"; 

export default function Home() {
  let [messages, setMessages] = useState([
    // ... messages data
  ]);
  const [message, setMessage] = useState("");
  const [keyboardShow, setKeyboardShow] = useState(false);
  const chatScroll = useRef();
  const sendMessage = () => {
    // sendMessage logic
  };

  const scrollToBottom = () => {
    chatScroll.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.aiBar}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.aiBarText}>Chat 1</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.main}
      >
        <View
          style={{
            ...styles.chatContainer,
          }}
        >
          <ScrollView ref={chatScroll}>
            {messages.map((message, index) => {
              const isMessageOwner = message.type == "client";
              const isSendBefore =
                messages[index - 1] && messages[index - 1].type == message.type;

              return (
                <View
                  key={message.id}
                  style={{
                    flexDirection: "row",
                    justifyContent: isMessageOwner ? "flex-end" : "flex-start",
                    marginTop: 3,
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
                        {message.createdAt}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity onPress={scrollToBottom}>
            <DownIcon
              style={{
                position: "absolute",
                bottom: keyboardShow ? 60 : 10, // Klavye açıldığında ikonun yeri değişsin
                right: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 0,
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            // onChangeText={onChangeNumber}
            value={message}
            onChangeText={setMessage}
            placeholder="useless placeholder"
            style={{
              backgroundColor: "white",
              padding: 15,
              paddingRight: 50,
              borderRadius: 50,
              width: "100%",
            }}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <SendIcon
              style={{
                position: "absolute",
                right: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
