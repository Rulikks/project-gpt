import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import API from "../utils/API";
import Global from "../utils/global";

function LoginScreen({ navigation }) {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const loginAccount = async () => {
    const token = await API.login(email, password);
    console.log(token)
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chat AI</Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="white"
        style={styles.inputField}
        value={email}
        onChangeText={(text) => setMail(text)}
      />

      <TextInput
        placeholder="Şifre"
        placeholderTextColor="white"
        style={styles.inputField}
        secureTextEntry={true} // Bu şifre kutusu olduğu için metni gizler
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={loginAccount}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerLink}>Kayıt olmadıysan ol!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29323c",
  },
  headerText: {
    fontSize: 32, // Font boyutunu artırdık
    fontWeight: "bold", // Fontu kalınlaştırdık
    color: "white",
    marginBottom: 50, // Altındaki bileşenlerle arasına boşluk ekledik
  },
  inputField: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "transparent",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  registerLink: {
    marginTop: 20,
    color: "white",
  },
  loginButton: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4682b4", // Çelik Mavisi
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginScreen;
