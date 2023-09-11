import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#3a86ff',
      }}>
        <Tab.Screen name="TechNews" component={HomeScreen} 
        options={{
          tabBarIcon:()=><Ionicons name="ios-home-outline" size={24} color="black" />
        }}/>1
        <Tab.Screen name="Search" component={SearchScreen} 
          options={{
            tabBarIcon:()=><Feather name="search" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
