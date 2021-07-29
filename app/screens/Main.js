/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from '../components/Drawer';
import Home from './Home';

const screenOptions = {
  cardStyle: { backgroundColor: 'transparent' },
  headerShown: false,
};

const DrawerStack = createDrawerNavigator();

const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="Home"
      drawerStyle={{ width: '75%' }}
      drawerContent={(props) => <Drawer {...props} />}>
      <DrawerStack.Screen name="Home" component={Home} />
    </DrawerStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="Drawer" component={DrawerStackScreen} />
    </MainStack.Navigator>
  );
};

export default Main;
