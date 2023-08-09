import { AntDesign } from "@expo/vector-icons"
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"


const Login = (props) => {

    const [name, setName] = useState()

    // const name = 'Shivansh';
    const [age, setAge] = useState();
    const [email, setEmail] = useState()

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 20 }}>Login Screen</Text>
            <TextInput placeholder="enter name" style={{ fontSize: 20, margin: 10, borderWidth: 2, padding: 5, borderRadius: 5, borderColor: 'black' }} onChangeText={(text) => setName(text)} />
            <TextInput placeholder="enter age" style={{ fontSize: 20, margin: 10, borderWidth: 2, padding: 5, borderRadius: 5, borderColor: 'black' }} onChangeText={(text) => setAge(text)} />
            <TextInput placeholder="enter email" style={{ fontSize: 20, margin: 10, borderWidth: 2, padding: 5, borderRadius: 5, borderColor: 'black' }} onChangeText={(text) => setEmail(text)} />
            <Button
                title="home"
                // onPress={() => props.navigation.navigate("Home",{name:name,age:age,email:email})}
                onPress={() => props.navigation.navigate("Home", { name, age,email })} //used when variables ka naam aur props ka naam ek ho
            ></Button>
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