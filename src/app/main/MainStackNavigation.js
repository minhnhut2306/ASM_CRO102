import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Home from './tabs/Home/Home';
import Account from './tabs/Account/Account';
import Notification from './tabs/Notification/Notification';
import Search from './tabs/Search/Search';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: require('../../../assets/icons/home.png'),
  Search: require('../../../assets/icons/search.png'),
  Favorite: require('../../../assets/icons/bell.png'),
  Notification: require('../../../assets/icons/user.png'),
};

const tabScreenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    const iconSource = tabIcons[route.name];
    return (
      <Image
        source={iconSource}
        style={[styles.icon, focused && styles.focusedIcon]}
      />
    );
  },
  tabBarLabel: () => null,
  tabBarStyle: {
    backgroundColor: 'white',
  },
  headerShown: false,
});

const MainTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorite" component={Account} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
import Productdetails from './stacks/Details/Productdetails';
import Cart from './stacks/Cart/Cart';
const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
      <Stack.Screen name="Productdetails" component={Productdetails} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    tintColor: '#D17842',
  },
});
