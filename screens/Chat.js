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
import styles from "./styles/Style";
import BackIcon from "../components/Back.js";
import SendIcon from "../components/Send.js";
import DownIcon from "../components/Down.js";

export default function ChatScreen({ navigation, route }) {
  let [messages, setMessages] = useState([
    // ... messages data
    {
      id: 1,
      content: "selam naber",
      type: "client",
      createdAt: "010101",
    },
    {
      id: 2,
      content: "Merhaba iyim sen nasılsın?",
      type: "system",
      createdAt: "010101",
    },
    {
      id: 3,
      content: "ben mükkemelim canım sıkıldı biraz.",
      type: "client",
      createdAt: "010101",
    },
    {
      id: 4,
      content: "senin için ne yapmamamı istersiniz?",
      type: "system",
      createdAt: "010101",
    },
    {
      id: 5,
      content: "bana bir masal anlatırmısın?",
      type: "client",
      createdAt: "010101",
    },
    {
      id: 6,
      content: "Tabiki!!",
      type: "system",
      createdAt: "010101",
    },
    {
      id: 7,
      content: "Başlıyoruz....",
      type: "system",
      createdAt: "010101",
    },
   
    {
      id: 8,
      content: "Bir okulda okuyan birbirlerini tanımayan iki masum genç varmış ve yolları bir hoca sayesinde kesişmiş ve ikisininde bilmediği şey varmış ömürlerini beraber geçirme fırsatı. bu iki genç birbirlerine aşık olurlar ve ikisininde hedefi olan şeye ulaşmak için beraber yola atırnırlar. yollarında bir sürü kavga çatışma çıksada bu iki kişinin sevgisi onun önüne geçemez.",
      type: "system",
      createdAt: "010101",
    },
    {
      id: 9,
      content: "Mükkemel.....",
      type: "client",
      createdAt: "010101",
    },
    {
      id: 10,
      content: "Bu iki genç hayla beraberliğini sürdürmekte ve ömür boyu sürdürecektir.",
      type: "system",
      createdAt: "010101",
    },
    {
      id: 11,
      content: "Bu ikisinin sevgisi bir ömür birbirlerine saklıdır.",
      type: "system",
      createdAt: "010101",
    },
  ]);
  const [message, setMessage] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const chatScroll = useRef();
  const sendMessage = () => {
    // sendMessage logic
  };

  const scrollToBottom = () => {
    chatScroll.current.scrollToEnd({ animated: true });
  };

  const backTo = () => {
    navigation.goBack();
  };

  const handleScroll = (event) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
    console.log(scrollPosition, event.nativeEvent);
  };
  const thred = route.params.thred;

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
          <Text style={styles.aiBarText}>{thred.name}</Text>
        </View>
      </View>
      <View style={styles.messages}>
        <ScrollView ref={chatScroll} onScroll={handleScroll}>
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
                  marginHorizontal: 10
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
