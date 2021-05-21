import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

    const navigation = useNavigation();

    // este UseEffect solo aplica  para Ios el HeaerBackTitle
    useEffect(() => {
        navigation.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'atras'
        })
    }, [])

    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>

            <Button 
                title="ia a pagina 3"
                onPress={()=> navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}
