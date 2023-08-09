import { Button, TextInput, View } from "react-native"

const HeaderRightComp = () =>
{
  return(
    <View style={{flex:1, justifyContent:'flex-end',flexDirection:'row'}}>
      <Button title="btn"></Button>
      {/* <TextInput style={{margin:5,borderColor:'white', borderWidth:3}} placeholder="name"/> */}
    </View>
  )
}

export default HeaderRightComp;