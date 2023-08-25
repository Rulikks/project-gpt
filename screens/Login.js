import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles/Style";

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.aiBar}>
        <View>
          <Text style={styles.aiBarText}>Chat AI</Text>
        </View>
      </View>

      <View
        style={{
          ...styles.main,
          height: "90%",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#29323c",
            padding: 20,
            borderRadius: 5,
            width: "100%",
          }}
        >
        </View>
        <View style={styles.desingedBy}>
          <Text style={styles.desingedByText}>
            ❤️ Desinged By Soulfly and Leora
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
