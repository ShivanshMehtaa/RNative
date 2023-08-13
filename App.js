import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";

export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  async function saveAPIdata() {
    console.warn(name, age, email)
    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      // body:JSON.stringify({name:name,age:age,email:email})
      body:JSON.stringify({name,age,email})

    });
    result = await result.json();
    if(result){
      alert("data stored")
    }
    setAge(' ')
    setEmail(" ")
    setAge(' ')
  }

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>SAVE FORM DATA</Text>

      <TextInput value={name} style={styles.input} onChangeText={(text) => setName(text)} placeholder="Enter Name" />
      <TextInput value={age} style={styles.input} onChangeText={(text) => setAge(text)} placeholder="Enter Age" />
      <TextInput value={email} style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Enter Email" />

      <Button style={styles.button} title="Save data" onPress={saveAPIdata} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  input: {
    backgroundColor: '#bbb',
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    margin: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  }
});
