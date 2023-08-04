import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  // let name1= 'Anil';
  const [name, setName] = useState("Shivansh");
  const change = () => {
    setName("hannu hehe");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Props in react native</Text>
      <Button onPress={change} title="Change name Props"></Button>
      <User name= {name}/>
    </View>
  );
}

//component
const User = (props) => {
  // console.warn(props)
  return (
    <View style={{backgroundColor:'black'}}>
      <Text style={{ fontSize: 20, color:'white' }}>{props.name}</Text>
    </View>
  )
};

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
