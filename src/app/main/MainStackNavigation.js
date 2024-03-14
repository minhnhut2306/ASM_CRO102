import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home/Home';
import Account from './tabs/Account/Account';
import Notification from './tabs/Notification/Notification';
import Search from './tabs/Search/Search';

const tabIcons = {
  Home: require('../../../assets/icons/home.png'),
  Search: require('../../../assets/icons/search.png'),
  Favorite: require('../../../assets/icons/bell.png'),
  Notification: require('../../../assets/icons/user.png'),
};

const MainTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const iconSource = tabIcons[route.name];
          return (
            <Image
              source={iconSource}
              style={[styles.icon, focused && styles.focusedIcon]}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          return null; 
        },
        tabBarStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorite" component={Account} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    tintColor: '#D17842',
  },
});
