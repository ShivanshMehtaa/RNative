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
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50, textAlign: "center" }}>Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={
          ({item})=><Text>{item.id} and {item.name}</Text>
        }
        keyExtractor={item =>item.id}
      />
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
