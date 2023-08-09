import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home = (props) => {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <Button title="login" onPress={()=>props.navigation.navigate("Login")}/>
    </View>
  )
}
const Login = (props) => {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20 }}>Login Screen</Text>
      <Button title="home" onPress={()=>props.navigation.navigate("Home")}/>
    </View>
  )
}



const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
