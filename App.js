import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

//external styling
// import styles from "./styles.js/sampleStyle";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [display, setDisplay] = useState(false);

  const clear =()=>{
    setDisplay(false);
    setName(" ");
    setPassword(" ");
    setEmail(" ");
    setPhone(" ");
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>
        Simple Form
      </Text>
      <TextInput
        placeholder="Enter User Name"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Enter E-Mail"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter Contact Info"
        style={styles.textInput}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      <View style={{ margin: 10 }}>
        <Button color={"green"} title="Submit" onPress={()=>setDisplay(true)} />
      </View>
      <View style={{ margin: 10 }}>
        <Button color={"red"} title="Clear" onPress={clear} />
      </View>
      <View>
        {
          display?
            <View>
              <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>UserName:{name}</Text>
              <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>Email:{email}</Text>
              <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>Contact:{phone}</Text>
              
            </View> : null
        }
      </View>
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
