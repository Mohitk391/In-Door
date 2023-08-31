import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
      flex:1,
      justifyContent:"space-evenly",
      backgroundColor: '#fff',
    },
    item: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:"flex-start",
      margin: 10,
    },
    image: {
      width:  100,
      height: 250,
      resizeMode: "contain"
    },
    text: {
      fontSize: 18,
    },
    header: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      gap: 10
    },
    title: {
     
      fontSize: 24,
      textAlign: "center"
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#000",
    },
  });
  