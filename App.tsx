import { StatusBar } from "expo-status-bar";
import React from "react";
import Landing from "./src/pages/Landing";
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


export default function App() {
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
      <Landing />
      <StatusBar style="light" />
    </>
  );
}
