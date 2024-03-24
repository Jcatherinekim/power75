import React, {useState, useEffect} from 'react';

import {StatusBar,Image, TouchableWithoutFeedback, ImageBackground, StyleSheet, Text, View} from 'react-native';
import quotes from './quotes';

const WelcomeScreen = ( { navigation }) => {
    const [quote, setQuote] = useState({ text: '', author: '' });

 

  useEffect(() => {

    const randomQuote = getRandomQuote();

    setQuote(randomQuote);

  }, []);

 

  function getRandomQuote() {

    const index = Math.floor(Math.random() * quotes.length);

    return quotes[index];

  }
    const handlePress = () => {
        console.log('Button pressed!');
        navigation.navigate('ToDo');
    }

    return (
        
        <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground 
        style={styles.background}
        source={require('./welcback.png')}> 
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
        <Text style={styles.quoteText}>{`"${quote.text}" — ${quote.author}`}</Text>
        </TouchableWithoutFeedback>
<StatusBar style="auto" />


</View>
        
        <Text style = {styles.text1}> Day 1 </Text>
        
        
        </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    text1:
    {
        fontSize: 24, 
        color: '#fff',
        position: 'absolute',
        top: 80,
    },
    quoteText: {
        color: 'gray',
        top: -600, 
        fontSize: 20, 
        paddingHorizontal: 20, 
        textAlign: 'center', 
        borderRadius: 10, 
        overflow: 'hidden',
        paddingBottom: 10,
      },
   
})

export default WelcomeScreen;