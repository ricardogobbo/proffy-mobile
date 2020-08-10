import { Archivo_700Bold } from '@expo-google-fonts/archivo';
import {
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257e5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Archivo_700Bold",
    fontSize: 32,
    lineHeight: 40,
    maxWidth: 200,
  },
  description: {
    marginTop: 30,
    color: "#ffffff",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 280
  },
  button:{
    marginVertical: 40,
    backgroundColor: "#04d361",
    height: 60,
    alignItems: "center",
    justifyContent:"center",
    borderRadius:8
  },
  buttonText:{
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 18
  }

});

export default styles;
