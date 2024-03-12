import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import { AppContext } from './main/AppContext'
import TabNavigation from './main/TabNavigation'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                isLogin ?
                    <AuthenStackNavigation /> :
                    <TabNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation