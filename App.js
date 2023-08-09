import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Home from "./components/Home";
import Login from "./components/Login";
import HeaderRightComp from "./components/HeaderRight";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const Stack = createNativeStackNavigator()

  const leftButton = () =>{
    console.warn("left button press")
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'red',
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:30
          }
        }}>
        <Stack.Screen name="Login" component={Login}  options={{
          headerTitle:(props)=><AntDesign name="stepforward" onPress={leftButton} size={30} color="white" />,
          headerRight:(props)=><HeaderRightComp/>,
          title: "User Login",
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:30
          }
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          title: "Home",
          headerStyle:{
            backgroundColor:'blue',
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:30
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
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
