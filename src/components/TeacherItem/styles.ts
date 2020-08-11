import { Archivo_700Bold } from "@expo-google-fonts/archivo";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    margin: 16,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: "#eeeeee",
  },
  infos: {
    marginLeft: 16,
  },
  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
  },
  subject: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
    marginTop: 4,
  },
  bio: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
    lineHeight: 24,
    marginTop: 4,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  footer: {
    backgroundColor: "#fafafc",
    borderTopColor: "#e6e6f0",
    borderTopWidth: 1,
    padding: 24,
    alignItems: "center",
  },
  price: {
    marginBottom: 16,
    fontSize: 14,
    fontFamily: "Archivo_700Bold",
    color: "#6a6180",
  },
  priceValue: {
    marginBottom: 16,
    fontSize: 18,
    fontFamily: "Archivo_700Bold",
    color: "#8257e5",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  favoriteButton: {
    width: 60,
    marginRight: 8,
    backgroundColor: "#8257e5",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  favorite: {
    backgroundColor: '#e33d3d'
  },
  whatsappButton: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#04d361",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    marginLeft: 16,
    color: "#ffffff",
    fontFamily: "Archivo_700Bold",
    fontSize: 14,
  },
});

export default styles;
