import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ( { route , navigation }:Props ) => {

    const params = route.params

    useEffect(() => {
      navigation.setOptions({
          title: params.nombre
      })
    }, [])

    return (
        <View  style={styles.globalStyle}>
            <Text style={styles.title}>
                
                {
                    JSON.stringify( params , null, 3 )
                }
            </Text>
        </View>
    )
}
