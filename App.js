import { StatusBar } from "expo-status-bar";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  Platform
} from "react-native";

import {WebView} from "react-native-webview";

export default function App() {


  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor="orange"
        barStyle="default" 
        hidden={true}
      />
      <Text style={{ fontSize: 30, marginTop: 50, marginBottom: 20, textAlign: "center" }}>
        Platform :{Platform.OS}
      </Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion.major)}</Text>
      {
        Platform.OS === 'android' ? 
        <Text>Hi android User, How are You</Text>
        :
        <Text>Hi IOS User, How are You</Text>
      }

      <WebView source={{uri:"https://reactnative.dev"}}></WebView>
      
      
    </View>
  )
}



const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
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

});
