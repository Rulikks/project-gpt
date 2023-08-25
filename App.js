import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animationEnabled: false, headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ animationEnabled: false, headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ animationEnabled: false, headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ animationEnabled: false, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
