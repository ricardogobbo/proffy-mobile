import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";

// Font Families imports 
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";

// App Stack
import AppStack from "./src/routes/AppStack";


export default function App() {
  // Load font families from Google Fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_400Regular,
    Archivo_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
