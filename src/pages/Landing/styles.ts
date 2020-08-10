import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257e5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    color: "#ffffff",
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    lineHeight: 20,
    marginTop: 40,
    maxWidth: 160,
    color: "#d4c2ff",
  },
});

export default styles;
