import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createStackNavigator();

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="SignupScreen" component={SignupScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
export default SignedInStack