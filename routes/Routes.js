import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="notification" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
