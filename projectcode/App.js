import React from "react";
import { StyleSheet, Text, View, SafeAreaView,Provider} from 'react-native';
import Profile from "./src/screens/Profile";
import CustomButton from "./components/button";
import * as Font from "expo-font";
import Settings from "./src/screens/Settings";
import Header from "./components/header";
import Game from "./src/screens/Game";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'SignPainter-HouseScript': require('./assets/fonts/SignPainter-HouseScript.ttf'),
    'SofiaPro-Regular': require('./assets/fonts/SofiaPro-Regular.ttf'),
    'SofiaPro-SemiBold': require('./assets/fonts/SofiaPro-SemiBold.ttf'),
    'SofiaPro-Light': require('./assets/fonts/SofiaPro-Light.ttf'),
  })

  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex: 1,
    backgroundColor: '#010B1A',
  },
});



