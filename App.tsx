import React from "react"
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from './redux/store';
import { Provider } from "react-redux"
// import AppLoading from 'expo-app-loading';
import tw from 'twrnc'
import HomeScreen from "./screens/home";
import { MapScreen } from "./screens/MapScreen";


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen name="Home_Screen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Map_Screen" component={MapScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

