import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any,any>{}

export const Pagina3Screen = ({ navigation }:Props) => {
    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Pagina3Screen
            </Text>

            <Button  title="ir a pagina 2" onPress={ ()=> navigation.pop()} />
            <Button  title="ir a pagina 1 Home" onPress={ ()=> navigation.popToTop()}/>
        </View>
    )
}
