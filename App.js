import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  async function saveAPIdata() {
    if (!name ) {
      setNameError(true);
    }
    if (!age ) {
      setAgeError(true);
    }
    if (!email ) {
      setEmailError(true);
    }
    if (!name) {
      return false;
    }

    console.warn("Next");

    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result) {
      alert("data stored");
    }
    setName(" ");
    setEmail(" ");
    setAge(" ");
  }

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>SAVE FORM DATA</Text>

      <TextInput
        value={name}
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Enter Name"
      />
      {
        nameError ? <View><Text style={{color:"red",
        marginLeft:10,
        fontSize:15,
        fontWeight:500}}>Enter Name/Valid Name first</Text></View> : null
      }
      <TextInput
        value={age}
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter Age"
      />
      {
        ageError ? <View><Text style={{color:"red",
        marginLeft:10,
        fontSize:15,
        fontWeight:500}}>Enter Age/Valid Age first</Text></View> : null
      }
      <TextInput
        value={email}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
      />
      {
        emailError ? <View><Text style={{color:"red",
        marginLeft:10,
        marginBottom:10,
        fontSize:15,
        fontWeight:500}}>Enter Email/Valid Email first</Text></View> : null
      }

      <Button style={{margin:10}} title="Save data" onPress={saveAPIdata} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  input: {
    backgroundColor: "#bbb",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    margin: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  errorText:{
    color:"red",
    marginLeft:10,
    fontSize:15,
    fontWeight:500,
  },
  button: {
    backgroundColor: "#bbb",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "red",
    elevation: 10,
    shadowOpacity: 1,
  },
});
