import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";

export default function App() {

  const [data, setData] = useState([]);

  async function getAPIdata() {
    const url = "http://192.168.1.4:3000/users"
    let result = await fetch(url);
    result = await result.json();
   
    setData(result);
  }

  useEffect(() => {
    getAPIdata();
  }, [])

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30,marginBottom:10 }}>API CALL</Text>
      {
        data.length ?
        <FlatList
          data={data}
          renderItem={({item})=>
          <View style={{margin:3 ,padding:3, borderBottomColor:"red", borderBottomWidth:3, borderRadius:5}}>
            <Text style={{ fontSize: 25, backgroundColor:"#ddd"}}>ID: {item.id}</Text>
            <Text style={{ fontSize: 25}}>Name: {item.name}</Text>
            <Text style={{ fontSize: 25}}>Age: {item.age}</Text>
            <Text style={{ fontSize: 25}}>Email: {item.email}</Text>
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
