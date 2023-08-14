import { useEffect, useState,useRef } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal
} from "react-native";

export default function App() {

  const input = useRef();

  const updateButton = () =>{
    console.warn('button cllick');
    input.current.focus();
    input.current.setNativeProps({
      fontSize:24,
      color:"red"
    })
  }


  return (
    <ScrollView style={styles.container}>
      <TextInput ref={input} style={styles.inpBox} placeholder="enter name"/>
      <TextInput style={styles.inpBox}placeholder="enter password"/>
      <Button onPress={updateButton} title="Update Input"/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderRadius: 10,
    padding:10,
  },
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    borderRadius:10,
    margin: 5,
    padding: 10,
  },
  dataWrapper2: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "skyblue",
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
  modalStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:"#fff",
    padding:30,
    borderRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.80,
    elevation:5,  
  },
  inpBox:{
    margin:10,
    borderWidth:2,
    borderRadius:5,
    borderColor:'skyblue',
    padding:5,
  }
});
