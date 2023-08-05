import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

//external styling
// import styles from "./styles.js/sampleStyle";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={{padding:10}}>
      <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>
        Handling Text Input
      </Text>
      <Text style={{ fontSize: 30, margin: 10, padding: 10 }}>
        Your Name: {name}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Clear Name" onPress={()=>setName(' ')} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: "blue",
    borderWidth: 3,
    borderColor: "red",
    margin: 10,
    padding: 10,
  },
});
