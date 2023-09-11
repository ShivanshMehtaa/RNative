import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import Article from "../components/Article";
import axios from "axios";


const HomeScreen = () => {
    const[articles, setArticles] = useState([])

    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1320ec8e7d91427596e366360451a53e',{
            params:{
                category:"technology"
            }
        })
            .then(function (response) {
                // handle success
                // console.warn(response.data.articles);
                setArticles(response.data.articles)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(()=>{
        getNews();
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={articles}
                renderItem={({item})=><Article 
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description={item.description}
                    author={item.author}
                    url={item.url}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                />}
                keyExtractor={(item)=>item.title}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {

    }
})