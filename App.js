import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//external styling
import styles from "./styles.js/sampleStyle";

export default function App() {
  // let name1= 'Anil';
  const [name, setName] = useState("Shivansh");
  const change = () => {
    setName("hannu hehe");
  };
  return (
/* internal style */
    <View style={styles.container}>
      {/* inline styling */}
      <Text style={{ fontSize: 20 }}>Styling in React Native</Text>
      <Text style={{ fontSize: 20 }}>Styling in React Native</Text>
      <Text style={{ fontSize: 20 }}>Styling in React Native</Text>
      <Text style={{ fontSize: 20 }}>Styling in React Native</Text>
      
    </View>
  );
}


