import { useEffect, useState } from "react";
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

  const [show, setShow] = useState(true);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, marginTop: 50, marginBottom: 20, textAlign: "center" }}>
        Show Hide Component
      </Text>
      {
        show == true ? <Button title='Hide Component' onPress={()=>setShow(false)}></Button> 
        :      <Button title='Show Component' onPress={()=>setShow(true)}></Button>

      }
      {
        show == true ? <User/> : null
      }

      

    </View>
  );
}

const User = () =>{
  return(
    <View>
      <Text style={{fontSize:20, color:'green'}}>UserComponent</Text>
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
