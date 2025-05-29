import React from "react";
import {
    StyleSheet,
    Dimensions,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import SignInScreen from './SignIn'; 

const { width } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
    },
});

export default App;