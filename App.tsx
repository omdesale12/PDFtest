import React from "react";
import "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Screens/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import HomeScreen from "./src/Screens/Home";
import BottomTabs from "./src/BottomTabs";
import Temp from "./src/Screens/Temp";

function App() {
  return (
    
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'}/>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaProvider>


  )
}
export default App;