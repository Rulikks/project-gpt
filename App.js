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
      id: 12 ,
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
