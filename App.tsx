import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigation/MenuLateral';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
// import { StackNavigation } from './src/navigation/StackNavigation';




export const App = () => {
  return (
    <NavigationContainer>
        <MenuLateral />
        {/* <MenuLateralBasico />  */}
       {/* <StackNavigation /> */}
    </NavigationContainer>
  )
}
