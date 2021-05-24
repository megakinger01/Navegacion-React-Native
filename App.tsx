import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigation/MenuLateral';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
// import { StackNavigation } from './src/navigation/StackNavigation';
import { AuthProvider } from './src/context/AuthContext';




export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
        {/* <MenuLateralBasico />  */}
        {/* <StackNavigation /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
