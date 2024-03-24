import React , {useState, useEffect}from 'react';
import { Button, ImageBackground, Image, Text , StyleSheet, View} from 'react-native';
import { CheckBox } from 'react-native-elements';


const ToDoScreen = ( { navigation }) => {
  
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const input = 1;
    const allChecked = isChecked && isChecked2 && isChecked3 && isChecked4;

    console.log(`${allChecked}`);

    const handleCheck = () => {
      setIsChecked(!isChecked);
    };

    const handleCheck2 = () => {
        setIsChecked2(!isChecked2);
      };

      const handleCheck3 = () => {
        setIsChecked3(!isChecked3);
      };

      const handleCheck4 = () => {
        setIsChecked4(!isChecked4);
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
        source={require('./todoback.png')}> 

        <Text style={{top:100, fontSize:20, color: '#FFFFFF'}}> {`Day ${input}`} </Text>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top:100 }}>
      <CheckBox
        title='Drink a gallon of water'
        checked={isChecked}
        onPress={handleCheck}
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: 100 }}>
      <CheckBox
        title='Read 10 pages of a book'
        checked={isChecked2}
        onPress={handleCheck2}
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , top:100}}>
      <CheckBox
        title='45 Minute Workout'
        checked={isChecked3}
        onPress={handleCheck3}
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top:100 }}>
      <CheckBox
        title='45 Minute Outdoor Workout'
        checked={isChecked4}
        onPress={handleCheck4}
      />
    </View>


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

export default ToDoScreen;