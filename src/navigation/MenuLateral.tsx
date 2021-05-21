import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigation } from './StackNavigation';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
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
          onPress={() => navigation.navigate('StackNavigation')}
          style={styles.menuBtn}
          >
          <Text style={styles.textoMenu}>StackNavigation</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuBtn}
          >
          <Text style={styles.textoMenu}> SettingsScreen</Text>
        </TouchableOpacity>

      </View>

 
    </DrawerContentScrollView>
  )
}