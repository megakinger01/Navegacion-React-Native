import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme'


interface Props extends  DrawerScreenProps <any ,any>{};

export const Pagina1Screen = ( {navigation}:Props ) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (

                <Button
                    title="menu"
                    onPress={ ()=> navigation.toggleDrawer() }
                />
            )
        })
    }, [])


    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>
             <Button 
                title="ir a pagina 2"
                onPress={ () =>  { navigation.navigate( 'Pagina2Screen' )}}
             />

             <Text style={{marginVertical:10, fontSize:20 }} >Navegar a persona</Text>

             <View style={{flexDirection:'row'}}>

                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor:'#5856D6'}}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >                       
                    <Text style={styles.botonGrandeTexto}> Pedro </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}

                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>

             </View>



        </View>
    )
}
