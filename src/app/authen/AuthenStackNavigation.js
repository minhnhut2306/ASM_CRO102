import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login/Login'
// import SplashScreen from './SplashScreen/SplashScreen'
const Stack = createNativeStackNavigator()

const AuthenStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >   
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthenStackNavigation