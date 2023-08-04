import { StyleSheet, Text, View, Button } from "react-native";
const styles = StyleSheet.create({
    container: {
      borderColor:'red',
      borderWidth:2,
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "red",
      fontSize: 20,
    },
    button: {
      color: "yellow",
      borderRadius: 30,
      border: "2pxsolid red",
    },
  });

export default styles;