import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://benevis.com/wp-content/uploads/2019/09/default-avatar-1.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate('tabs')}
          style={{...styles.menuBtn, flexDirection:'row'}}
        >

          <Icon  name='compass-outline'  size={23} color={colores.primary} /> 
          <Text style={styles.textoMenu}> Navegacion</Text>

        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{...styles.menuBtn, flexDirection:'row'}}
        >  
          <Icon  name='cog-outline'  size={23} color={colores.primary} />  
          <Text style={styles.textoMenu}> Ajustes</Text>

        </TouchableOpacity>

      </View>

 
    </DrawerContentScrollView>
  )
}