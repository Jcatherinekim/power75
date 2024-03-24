import React, { useState } from 'react';



import { ScrollView, Button, ImageBackground, Image, Text, StyleSheet, View, FlatList } from 'react-native';

//Not fully functional yet

const FeedScreen = ({ navigation }) => {
 

  return (
    <ImageBackground
      style={styles.background}
      source={require('./feedback.png')}>

<ScrollView contentContainerStyle={styles.container2}>
      <Image source={require('./1.png')} style={styles.image} />
      <Image source={require('./2.png')} style={styles.image} />
      <Image source={require('./3.png')} style={styles.image} />
      <Image source={require('./4.png')} style={styles.image} />
    </ScrollView>

      <View style={styles.container}>
        <Button title="Upload Image" onPress={console.log("not functional yet!")} style={{marginTop:50}}/>

      </View>

      <View style={styles.buttonsContainer}>
        <Button title="" onPress={() => navigation.navigate('ToDo')} />
        <Button title="" onPress={() => navigation.navigate('Feed')} />
        <Button title="" onPress={() => navigation.navigate('Notes')} />
        <Button title="" onPress={() => navigation.navigate('Profile')} />
        <Button title="" onPress={() => navigation.navigate('Settings')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginHorizontal: 10,
        resizeMode: 'cover',
      },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  container2: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 75, // Adjust the margin bottom to create space between images
    resizeMode: 'cover',
  },
  timestamp: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default FeedScreen;


