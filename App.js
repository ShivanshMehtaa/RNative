import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Shivansh",
      email:'test@abc.com'
    },
    {
      id: 2,
      name: "Hannu",
      email:'test@abc.com'
    },
    {
      id: 3,
      name: "Sample",
      email:'test@abc.com'
    },
    {
      id: 4,
      name: "Sample1",
      email:'test@abc.com'
    }
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50,marginBottom:20, textAlign: "center" }}>
        Custom flat list component
      </Text>
      <FlatList
        data={users}
        renderItem={({item})=>
          <UserData item={item}/>
      }
      />
    </View>
  );
}

const UserData = (props) =>{
  const vari = props.item
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{vari.name}</Text>
      <Text style={styles.text}>{vari.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:'row',
    borderColor:'blue',
    borderWidth:5,
    marginBottom:10,
    padding:10,
  },
  text: {
    flex:1,
    fontSize: 25,
    backgroundColor: "red",
    color: "white",
    margin: 10,
    padding: 10,
    width: 100,
    height: 100,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 20,
  },
});
