import React from 'react';
import { Button, ImageBackground, Image, Text , StyleSheet, View, TouchableOpacity, Linking} from 'react-native';
import { PieChart } from 'react-native-svg-charts';



const ProfileScreen = ( { navigation}) => {
    const handlePress = () => {
        const url = 'https://prototypetraining.com/whats-the-best-plan-for-me-75-hard-nutrition-guidelines/'; 
        Linking.openURL(url);
      };

      const handlePress2 = () => {
        const url = 'https://andyfrisella.com/blogs/articles/75-hard-workout-ideas';
        Linking.openURL(url);
      };
      const handlePress3 = () => {
        const url = 'https://www.nerdfitness.com/blog/the-beginners-guide-to-building-muscle-and-strength/'; 
        Linking.openURL(url);
      };

    const input = 1; // Example integer value (can be dynamic)
    const data = [
        {
            key: '75 - input',
            value: 75 - input,
            svg: { fill: '#B751C8' },
          },
        {
          key: 'input',
          value: input,
          svg: { fill: '#DC66B1' },
        },
        
      ];

    
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
        source={require('./profileback.png')}> 
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',top:600 }}>
      <Text>Helpful Resources:</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Nutrition Guidelines</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Workout Ideas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Strength Workouts</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PieChart
        style={{ height: 200, width: 200 }}
        data={data}
        innerRadius={30}
        padAngle={0.04}
      />
      <Text>{`Day ${input} Out of 75`}</Text>
  
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
    title:
    {
        fontSize: 24,
        margin: 10,

    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    chart:
    {
        width: 200,
        height: 200,
      
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

export default ProfileScreen;