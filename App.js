import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Shivansh",
    },
    {
      id: 2,
      name: "Hannu",
    },
    {
      id: 3,
      name: "Sample",
    },
    {
      id:4,
      name:'Sample1',
    },
    {
      id:5,
      name:'Sample1',
    },
    {
      id:6,
      name:'Sample1',
    },
    {
      id:7,
      name:'Sample1',
    },
    {
      id:8,
      name:'Sample1',
    },
    {
      id:9,
      name:'Sample1',
    },
    {
      id:10,
      name:'Sample1',
    },
    {
      id:11,
      name:'Sample1',
    },
    {
      id:12,
      name:'Sample1',
    },
    {
      id:13,
      name:'Sample1',
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>Grid in R-Native</Text>
      <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
        {
          users.map(
            (item)=><Text style={styles.text}>{item.name}</Text>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    backgroundColor:'red',
    color:'white',
    margin:10,
    padding:10,
    width:100,
    height:100,
    textAlignVertical:'center',
    textAlign:'center',
    borderRadius:20,
  }
});
