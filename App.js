import React, { useEffect } from 'react';

import { database } from './database';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// need to npm install @react-native-async-storage/async-storage

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ToDoScreen from './screens/ToDoScreen';
import FeedScreen from './screens/FeedScreen';
import NotesScreen from './screens/NotesScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';




const Stack = createNativeStackNavigator(); 

export default function App() {
  useEffect(() => {
    database.initDB();
  }, []);
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Login' component={LoginScreen} 
      options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={WelcomeScreen} 
      options={{ headerShown: false }}/>
      <Stack.Screen name='ToDo' component={ToDoScreen}
       options={{ headerShown: false }} />
       <Stack.Screen name='Feed' component={FeedScreen}
       options={{ headerShown: false }} />
      <Stack.Screen name='Notes' component={NotesScreen}
       options={{ headerShown: false }} />
       <Stack.Screen name='Profile' component={ProfileScreen}
       options={{ headerShown: false }} />
       <Stack.Screen name='Settings' component={SettingsScreen}
       options={{ headerShown: false }} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


