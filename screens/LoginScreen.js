import React, { useState } from 'react';
import { database } from '../database';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  // Password state

    const handleLogin = () => {
        database.checkUsernameExists(username, (exists, error) => {
            if (error) {
                Alert.alert("Login Error", "Error checking user existence.");
                return;
            }
            if (exists) {
                // Username exists, navigate to Home (ignoring the password for now)
                navigation.navigate('Home', { username });
            } else {
                Alert.alert("Login Error", "User does not exist. Please register.");
            }
        });
    };

    const handleRegister = () => {
        database.addUser(username, (success, userId, startDate, error) => {
            if (success) {
                Alert.alert("Registration Success", `User created with ID: ${userId} and Start Date: ${startDate}`);
                navigation.navigate('Home', { userId, startDate });
            } else {
                Alert.alert("Registration Error", "Could not create user. " + (error || ''));
            }
        });
    };

    return (
        <ImageBackground 
            style={styles.background}
            source={require('./loginback.png')}
        > 
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput  // This is the password input
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry  // This makes the text input hide the password
                    onChangeText={setPassword}  // Updating state, but not used in logic
                />
                <Button title="Log In" onPress={handleLogin} />
                <Button title="Register" onPress={handleRegister} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    }
});

export default LoginScreen;
