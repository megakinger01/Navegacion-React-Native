import React from 'react'
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () =>  {

   const {top} = useSafeAreaInsets()
  return (
    <Tab.Navigator
        style={{ paddingTop: top }}
        tabBarOptions={{
            pressColor: colores.primary,
            showIcon:true,
            style:{ elevation:0, shadowColor:'transparent'},
            indicatorStyle:{
                backgroundColor:colores.primary
            },
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
    
              let iconName: string = '';
    
              switch (route.name) {
                case 'Chat':
                  iconName = 'chatbubble-outline'
                  break;
    
                case 'Albums':
                  iconName = 'briefcase-outline'
                  break;
    
                case 'Contacts':
                  iconName = 'people-outline'
                  break;
              }
    
              return  <Icon  name={ iconName } size={20} color={color} />
            }
    
          })}

    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
}