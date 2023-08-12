import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";

export default function App() {

  const [data, setData] = useState([]);

  async function getAPIdata() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url);
    result = await result.json();
   
    setData(result);
  }

  useEffect(() => {
    getAPIdata();
  }, [])

  return (
    <ScrollView style={styles.main}>
      <Text style={{ fontSize: 30 }}>API CALL</Text>
      {
        data.length ?
        data.map((item)=>(
          <View style={{margin:5, borderColor:'red', borderBottomWidth:2, borderRadius:10}}>
            <Text style={{fontSize:20, backgroundColor:"#ddd"}}>ID: {item.id}</Text>
            <Text style={{fontSize:20}}>Title: {item.title}</Text>
            <Text style={{fontSize:20}}>Body: {item.body}</Text>
          </View>
        ))
        : null
      }      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    marginTop:40,
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
