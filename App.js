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
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  async function getAPIData() {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  }
  const deleteUser = async (id) =>{
    const url = "http://10.0.2.2:3000/users";
    // console.warn(`${url}/${id}`)

    let result = await fetch(`${url}/${id}`,{
      method:'delete'
    });
    result = await result.json();
    if(result){
      alert("User Deleted")
    }

  }

  useEffect(() => {
    getAPIData();
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dataWrapper}>
        <View style={{flex:1.4}}>
          <Text>Name</Text>
        </View>
        <View style={{flex:1.8}}>
          <Text>Age</Text>
        </View>
        <View style={{flex:1}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map((item) => (
            <View style={styles.dataWrapper}>
              <View style={styles.internal}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex:0.6}}>
                <Text>{item.age}</Text>
              </View>
              <View style={styles.internal}>
                <Button onPress={()=>deleteUser(item.id)} title="delete" />
              </View>
              <View style={styles.internal}>
                <Button title="update" />
              </View>
            </View>
          ))
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderRadius: 10,
  },
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    borderRadius:10,
    margin: 5,
    padding: 10,
  },
  internal: {
    flex: 1,
    margin:2,
  },
  button: {
    marginRight: 3,
  },
});
