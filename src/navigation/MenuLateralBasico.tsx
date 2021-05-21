import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigation } from './StackNavigation';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () =>  {

  const { width } =useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent': 'front'}
    >
      <Drawer.Screen name="StackNavigation" options={{title:'Home'}} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen"  options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}