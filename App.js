import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";

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
    <View style={styles.main}>
      <Text style={{ fontSize: 30 }}>API CALL</Text>
      {
        data.length ?
        <FlatList
          data={data}
          renderItem={({item})=>
          <View>
            <Text style={{ fontSize: 25}}>ID: {item.id}</Text>
          </View>  
        }
        ></FlatList>
        : null
      }      
    </View>
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
