import React, { useState , useEffect} from 'react';

import { Button, ImageBackground, Image, Text , StyleSheet, View, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesScreen = ( { navigation }) => {
    const [note, setNote] = useState('');
    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        // Load past journal entries from AsyncStorage
        const loadJournalEntries = async () => {
          try {
            const savedEntries = await AsyncStorage.getItem('journalEntries');
            if (savedEntries) {
              setJournalEntries(JSON.parse(savedEntries));
            }
          } catch (error) {
            console.log(error);
          }
        };
        loadJournalEntries();
  }, []);

  const handleSaveNote = async () => {
    try {
      if (note.trim() !== '') {
        const newEntry = { id: Date.now().toString(), text: note.trim(), timestamp: new Date().toISOString() };
        const updatedEntries = [...journalEntries, newEntry];
        setJournalEntries(updatedEntries);
        await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
        setNote('');
        Keyboard.dismiss();
      }
    } catch (error) {
      console.log(error);
    }
  };


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
        source={require('./notesback.png')}> 

<KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your journal entry"
          onChangeText={(text) => setNote(text)}
          value={note}
          multiline
        />
        <View style = {styles.saveEntryButton}>
        <Button title="Save Entry" onPress={handleSaveNote} />
        </View>
        {journalEntries.map((entry) => (

          <View key={entry.id} style={styles.entryContainer}>
            <Text style={styles.entryText}>{entry.text}</Text>
            <Text style={styles.timestampText}>{new Date(entry.timestamp).toLocaleString()}</Text>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>

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
    
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        top: 100,
        
      },
      scrollContainer: {
        alignItems: "center",
        flexGrow: 1,
        top: -70,
        paddingTop: 0,
        paddingLeft: 15,
        paddingRight: 15,
      },
      input: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        width: 250,
        padding: 10,
        marginTop:100,
        marginBottom: 20,
        minHeight: 100,
      },
      entryContainer: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
      },
      entryText: {
        fontSize: 16,
        marginBottom: 5,
      },
      timestampText: {
        fontSize: 12,
        color: '#666',
      },
      saveEntryButton:
      {
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 200,
        top:0,
      }
})

export default NotesScreen;