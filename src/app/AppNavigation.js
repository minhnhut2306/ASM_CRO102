import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import { AppContext } from './main/AppContext'
import MainTabNavigation from './main/MainStackNavigation'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                <MainTabNavigation /> 
            }
        </NavigationContainer>
    )
}

export default AppNavigation