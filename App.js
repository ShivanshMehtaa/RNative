import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {

  const [name,setName] = useState("Shivansh");
  const change =() =>{
    setName('hannu hehe');
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>State in react native</Text>
      <Text style={{fontSize:20}}>{name}</Text>
      <Button title="Update name" onPress={change}></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
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
