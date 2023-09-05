import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Message from "../components/Message";
import API from "../utils/API";
import Global from "../utils/global";

function RegisterScreen({ navigation }) {
  const [email, setMail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);
  let timeout = null;

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const goHome = () => navigation.navigate("Home");

  let timer = null;
  const startTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const register = async () => {
    if (!email && !password && !username) {
      setMessage({
        content: "Tüm gerekli yerler doldurulmalı.",
        type: "error",
      });
      return startTimer();
    }
    if (!isValidEmail(email)) {
      setMessage({
        content: "Lütfen geçerli bir e-posta adresi girin.",
        type: "error",
      });
      return startTimer();
    }
    const response = await API.register(email, username, password);
    if (response.error) {
      setMessage({
        content: response.message,
        type: "error",
      });
      return startTimer();
    }
    const token = await Global.token;
    if (token) goHome();
  };
  return (
    <View style={styles.container}>
      {message && <Message message={message.content} type={message.type} />}
      <Text style={styles.headerText}>Chat AI</Text>
      <TouchableOpacity 
    style={styles.goBackButton} 
    onPress={() => navigation.navigate("Login")}
>
    <Text style={styles.goBackButtonText}>Geri Dön</Text>
</TouchableOpacity>



      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={(t) => setMail(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı İsmi"
        placeholderTextColor="#FFF"
        value={username}
        onChangeText={(t) => setUsername(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre Belirle"
        secureTextEntry={true}
        placeholderTextColor="#FFF"
        value={password}
        onChangeText={(t) => setPassword(t)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={register}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29323c",
  },
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#404040",
    borderRadius: 5,
    color: "white",
  },
  registerButton: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4682b4", // Çelik Mavisi
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
  },
  goBackButton: {
    position: 'absolute',
    top: '5%',
    left: 10,
    padding: 10,
    backgroundColor: '#404040', // pastel mavi renk
    borderRadius: 20,  // köşeleri daha yuvarlak
    elevation: 2,     // Android için gölge efekti
    shadowColor: "#000",  // iOS için gölge efekti
    
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
},
goBackButtonText: {
    color: "white",
    fontSize: 16,      // metin boyutunu artırdık
    fontWeight: 'bold'  // metini kalınlaştırdık
}


});

export default RegisterScreen;
