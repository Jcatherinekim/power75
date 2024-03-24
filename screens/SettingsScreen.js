import React from 'react';

import { Button, ImageBackground, Image, Text , StyleSheet, View} from 'react-native';

const SettingScreen = ( { navigation }) => {
    //Username 
    const username = "hoohacks"; 
    const daystreak = 1; 

    const handlePressToDo = () => {
        console.log('To Do button pressed!');
        navigation.navigate('ToDo');
    }
        
    const handlePressFeed = () => {
        console.log('Feed pressed!');
        navigation.navigate('Feed');
    }
        
    const handlePressNotes = () => {
        console.log('Notes pressed!');
        navigation.navigate('Notes');
    }
        
    const handlePressProfile = () => {
        console.log('Profile pressed!');
        navigation.navigate('Profile');
    }
        
    const handlePressSetting = () => {
        console.log('Settings pressed!');
        navigation.navigate('Settings');
    }

    return ( 
        <ImageBackground 
        style={styles.background}
        source={require('./settingsback.png')}> 

<Text style={{top:-170, fontSize:20, color: '#757575'}}> {`Username: ${username}`} </Text>
<Text style={{top:-170, fontSize:20, color: '#757575'}}> {`Current Streak: ${daystreak}`} </Text>
<Text style={{top:10, fontSize:20, color: '#757575', marginLeft:20, marginRight:10,textAlign:"center"}}> {`This application was developed by Angelica Bain, Caroline Xu, Catherine Kim, and Safaa Mahbub for the HooHacks 2024 Hackathon`} </Text>

    <View style={styles.todobutton}>
            <Button title = "" onPress={handlePressToDo} />
        </View>
        <View style={styles.feedbutton}>
            <Button title = "" onPress={handlePressFeed} />
        </View>
        <View style={styles.notesbutton}>
            <Button title = "" onPress={handlePressNotes} />
        </View>
        <View style={styles.profilebutton}>
            <Button title = "" onPress={handlePressProfile} />
        </View>
        <View style={styles.settingsbutton}>
            <Button title = "" onPress={handlePressSetting} />
        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container:
    {
        alignItems: 'center',
        backgroundColor: "pink",
        flex: 1,
    },
    image:
    {
    justifyContent: "flex-end",
    width: 100,
    height: 100,
    position: 'absolute',
    top: 230,
    },
    todobutton:
    {
        justifyContent: "center",
        width: 70,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        top: 320,
        left: -165,
        zIndex: 1,
        fontSize: 40
    },
    feedbutton:
    {
        justifyContent: "center",
        width: 70,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        top: 240,
        left: -80,
        zIndex: 2
    },
    notesbutton:
    {
        justifyContent: "center",
        width: 70,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        top: 160,
        left: 10,
        zIndex: 3
    },
    profilebutton:
    {
        justifyContent: "center",
        width: 70,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        top: 80,
        left: 80,
        zIndex: 4
    },
    settingsbutton:
    {
        justifyContent: "center",
        width: 70,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        top: 0,
        left: 160,
        zIndex: 5
    },
})

export default SettingScreen;