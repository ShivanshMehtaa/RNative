import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const Home = (props) => {
    // console.warn(props.route.params)
    const {name,age,email} =props.route.params;
    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <Button title="login" onPress={() => props.navigation.navigate("Login")} />
            <Text style={{ fontSize: 20 }}>Name:{name}</Text>
            <Text style={{ fontSize: 20 }}>Age:{age}</Text>
            <Text style={{ fontSize: 20 }}>Email:{email}</Text>

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

  export default Home;