import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
    
      <Text style={styles.headerText}>Chat AI</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı İsmi"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre Belirle"
        secureTextEntry={true}
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,   
    fontWeight: 'bold',  
    color: 'white',
    marginBottom: 50,   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29323c'
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#404040',
    borderRadius: 5,
    color: 'white'
  },
  registerButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#4682b4', // Çelik Mavisi
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16
  }
});

export default RegisterScreen;
