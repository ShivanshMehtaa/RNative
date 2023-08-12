import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, } from "react-native";

export default function App() {

  const [data, setData] = useState(' ');

  async function getAPIdata() {
    //iss function ko use Effect mei call karenge
    // this is an async function
    const url = "https://jsonplaceholder.typicode.com/posts/1"
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
        data ? 
        <View>
          <Text style={{ fontSize: 25,margin:4 }}>hello</Text>
          <Text style={{ fontSize: 25,margin:4  }}>{data.id}</Text>
          <Text style={{ fontSize: 25,margin:4  }}>{data.title}</Text>
          <Text style={{ fontSize: 25,margin:4  }}>{data.body}</Text>
        </View> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    marginTop:40,
    alignItems: 'center',
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
