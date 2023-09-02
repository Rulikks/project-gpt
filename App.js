import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import LoadingScreen from "./screens/Loading";

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ animationEnabled: false, headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
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
