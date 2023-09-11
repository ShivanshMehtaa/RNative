import React, { useState } from "react";
import { View ,Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import Article from "../components/Article";
import axios from "axios";

const SearchScreen = (props) =>{
    const [searchText, setSearchText] = useState('');
    const[articles, setArticles] = useState([])

    
    const searchArticles=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1320ec8e7d91427596e366360451a53e',{
           params:{
               category: "technology",
               q: searchText
           }
       })
           .then( (response) =>{
               // handle success
               setArticles(response.data.articles);
           })
           .catch(function (error) {
               // handle error
               console.log(error);
           })
           .then(function () {
               // always executed
           });
    }
    
    return(
        <View style = {styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
            <FlatList 
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        url={item.url}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default SearchScreen