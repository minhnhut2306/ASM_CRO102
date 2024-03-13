import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import { AppContext } from './main/AppContext'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                
                    <AuthenStackNavigation /> 
            }
        </NavigationContainer>
    )
}

export default AppNavigation