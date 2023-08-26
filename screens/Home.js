import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles/Style";
import PlusSVG from "../components/Plus";
import ThredItem from "../components/ThredItem";
import LoginSVG from "../components/Login";
import Ad from "../components/Ad";
import API from "../utils/API";

export default function Home({ navigation }) {
  const [threds, setThreds] = useState([
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 2,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 3,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 4,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 5,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 6,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 7,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 8,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 9,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 10,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 11,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 12,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
  ]);

  const deleteThred = (id) => {
    const deletedThred = threds.filter((thred) => thred.id !== id);
    setThreds(deletedThred);
  };

  const showThred = (thred) => {
    navigation.navigate("ChatScreen", { thred });
  };

  const leaveAccount = async () => {
    await API.leave();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.aiBar}>
        <View>
          <Text style={styles.aiBarText}>Chat AI</Text>
        </View>
        <View style={styles.box}>
          <Ad width={20} height={20} style={styles.Ad} />
        </View>
        <View style={styles.box}>
          <Text style={styles.bakiye}>Kalan Bakiyeniz...</Text>
        </View>
        <TouchableOpacity
          style={styles.thirdBoxContainer}
          onPress={leaveAccount}
        >
          <LoginSVG width={20} height={20} style={styles.svgIcon} />
          <View style={styles.thirdBox}></View>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.headBar}>
          <TouchableOpacity style={styles.newChat}>
            <Text style={styles.newChatText}>
              <PlusSVG /> Yeni Chat
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chatContainer}>
          <ScrollView>
            {threds.map((thred) => {
              return (
                <ThredItem
                  key={thred.id}
                  item={thred}
                  onDelete={deleteThred}
                  onClick={showThred}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.desingedBy}>
          <Text style={styles.desingedByText}>
            ❤️ Desinged By Soulfly and Leora
          </Text>
        </View>
      </View>
    </View>
  );
}
