import { AntDesign } from "@expo/vector-icons"
import { Button, StyleSheet, Text, View } from "react-native"


const Login = (props) => {
    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 20 }}>Login Screen</Text>
            <Button title="home" onPress={() => props.navigation.navigate("Home")}></Button>
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

export default Login;