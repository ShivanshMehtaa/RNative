import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {


  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30, marginTop: 50, marginBottom: 20, textAlign: "center" }}>
        Touchable highlight in Rnative
      </Text>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      {/* <View style={styles.box1}>
        <View style = {styles.boxIn1}></View>
        <View style = {styles.boxIn1}></View>
        <View style = {styles.boxIn1}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View> */}
    </View>
  )
}



const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:10,
    // flexDirection:'row'
  },
  button:{
    backgroundColor:'#bbb',
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor:'red',
    elevation:10,
    shadowOpacity:1,
  }
  // box1:{
  //   flex:2, 
  //   backgroundColor:'red',
  //   flexDirection:'row'
  // },
  // box2:{
  //   flex:1, 
  //   backgroundColor:'blue',
  // },
  // box3:{
  //   flex:1, 
  //   backgroundColor:'green',
  // },
  // boxIn1:{
  //   flex:1,
  //   backgroundColor:'skyblue',
  //   margin:10,
  //   // flexDirection:'row'
  // }
});
