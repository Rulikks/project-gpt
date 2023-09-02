import React, { useState, useEffect } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import styles from "./styles/Style";
import API from "../utils/API";
import Global from "../utils/global";

export default function ChatScreen({ navigation, route }) {
  const wait = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

  const goLogin = () => navigation.navigate("Login");
  const goHome = () => navigation.navigate("Home");

  useEffect(() => {
    const checkFn = async () => {
      await wait(3);
      const token = await Global.token;
      if (!token) goLogin();
      const profile = await API.myProfile();
      if (profile.error) goLogin();
      if (token && !profile?.error) goHome();
    };
    checkFn()
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View
        style={{
          width: "60vw",
          maxWidth: "60vw",
          height: "100vh",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>{"Selamlar"}</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
