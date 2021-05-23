import React from 'react'
import { Platform, Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigation } from './StackNavigation';

import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTapNavigator';

import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIos />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {

  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colores.primary
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
              break;

            case 'Tab2Screen':
              iconName = 'star-half-outline'
              break;

            case 'StackNavigation':
              iconName = 'build-outline'
              break;
          }

          return  <Icon  name={ iconName } size={30} color="white" />
        }

      })}

    >

      <BottomTabAndroid.Screen name="Tab1Screen"      component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen"      component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigation" component={StackNavigation} />

    </BottomTabAndroid.Navigator>
  );
}




const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {


  return (
    <BottomTabIos.Navigator
      // Cambia color de fondo de App
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
              break;

            case 'Tab2Screen':
              iconName = 'star-half-outline'
              break;

            case 'StackNavigation':
              iconName = 'build-outline'
              break;
          }

          return  <Icon  name={ iconName } size={30} color="white" />
        }

      })}
    >

      <BottomTabIos.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" component={TopTapNavigator} />
      <BottomTabIos.Screen name="StackNavigation" component={StackNavigation} />

    </BottomTabIos.Navigator>
  );
}





