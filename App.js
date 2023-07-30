// Home.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./Style"; // style.js dosyasını burada import ediyoruz.

export default function Home() {
  const [threds, setThreds] = useState([
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
    {
      id: 1,
      name: "Lorem Insup",
      date: "20.12.2023 20:12",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.aiBar}>
        <View>
          <Text style={styles.aiBarText}>Chat AI</Text>
        </View>
        <View>
          <Text style={styles.versionText}>V1.0.0</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.headBar}>
          <TouchableOpacity style={styles.newChat}>
            <Text style={styles.newChatText}>Yeni Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chatContainer}>
          <ScrollView>
            {threds.map((thred) => {
              return (
                <View style={styles.chatItem} key={thred.id}>
                  <View>
                    <Text style={styles.chatItemTitle}>{thred.name}</Text>
                    <Text style={styles.chatItemDate}>{thred.date}</Text>
                  </View>
                  <View>
                    <Text>Delete</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.desingedBy}>
          <Text style={styles.desingedByText}>Desinged By Soulfly and Leora</Text>
        </View>
      </View>
    </View>
  );
}
