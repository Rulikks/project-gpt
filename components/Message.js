import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Message({ message, type }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: type == "error" ? "red" : "green",
        padding: 10,
        paddingVertical: 20,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ color: "white" }}>{message}</Text>
    </View>
  );
}
