import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { AntDesign } from '@expo/vector-icons';

export default function App() {


  const Tab = createBottomTabNavigator();
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="login" component ={Login} />
      <Tab.Screen name="signup" component ={SignUp} />
    </Tab.Navigator>
   </NavigationContainer>
  )
}

const Login= ()=>{
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
const SignUp= ()=>{
  return(
    <View>
      <Text>SignUp</Text>
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
