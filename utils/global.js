import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Global {
  constructor() {}
  static async setToken(token) {
    await AsyncStorage.setItem("token", token);
  }
  static get token() {
    return new Promise(async (resolve, reject) => {
      AsyncStorage.getItem("token").then(resolve);
    });
  }
}
