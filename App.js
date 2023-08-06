import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  SectionList,
} from "react-native";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Shivansh",
      email: 'test@abc.com',
      data: ['PHP', 'React', 'Angular']
    },
    {
      id: 2,
      name: "Hannu",
      email: 'test@abc.com',
      data: ['PHP', 'Test', 'Native']
    },
    {
      id: 3,
      name: "Sample",
      email: 'test@abc.com',
      data: ['PHP', 'Python', 'CPP']
    },
    {
      id: 4,
      name: "Sample1",
      email: 'test@abc.com',
      data: ['Java', 'NODE', 'MONGO']
    }
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50, marginBottom: 20, textAlign: "center" }}>
        Section List in R-Native
      </Text>
      <SectionList
        sections={users}
        renderItem={({ item }) =>
          <Text style={styles.text}>{item}</Text>
        }
        renderSectionHeader={({ section: { name } }) =>(
          <Text style={styles.text}>{name}:-</Text>
        )
          
        }
      />

    </View>
  );
}

const UserData = (props) => {
  const vari = props.item
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{vari.name}</Text>
      <Text style={styles.text}>{vari.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: 5,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    flex: 1,
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
