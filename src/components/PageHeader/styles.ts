import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257e5",
    padding: 40,
  },
  topBar: {
    flexDirection: 'row', 
    alignItems: "center",
    justifyContent: 'space-between'
  },
  title :{
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    maxWidth:180,
    marginVertical:40,
    color: '#fcfced'
  }
});

export default styles;
