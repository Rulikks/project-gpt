import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Kayıt Ekranı</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
