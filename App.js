import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import UserData from "./components/Userdata";

export default function App() {

  let data = 10;

  const fruit1 =(obj)=>{
    console.warn("this is a "+obj);
  }
  const fruit2 =()=>{
    let data =20;
    console.warn(data);
  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}} >Button and onPress Events</Text>
      <Text style={{fontSize:20}} >{data}</Text>
      <Button onPress={fruit1(24)} title="On Press Events" color={'black'} ></Button>
      <Button onPress={fruit2} title="On Press Events" color={'green'} ></Button>
      <StatusBar  style="auto"></StatusBar>
    </View>
  );
}

// const UserDatas = () => {
//   return (
//     <View>
//       <Text style={styles.text}>
//         Information - {age}, {name}
//       </Text>
//       <Text style={styles.text}>Email - {email}</Text>
//     </View>
//   );
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 20,
  },
  button: {
    color: "yellow",
    borderRadius: 30,
    border: "2pxsolid red",
  },
});
