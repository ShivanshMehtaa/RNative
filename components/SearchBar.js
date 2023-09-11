import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SearchBar = (props)=>{
    return (
        <View styles={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        color:'#000',
        borderWidth:1

    },
    container:{
        margin:10,
    }
})