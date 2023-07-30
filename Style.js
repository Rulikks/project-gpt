// style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // ekranın üst kısmına kutuyu yerleştirmek için
    backgroundColor: '#171D26',
    padding: 10,
  },
  aiBar: {
    width: 326,
    height: 54,
    backgroundColor: '#29323c', // açık renk
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  aiBarText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  versionText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'right',
  },
});

export default styles;
