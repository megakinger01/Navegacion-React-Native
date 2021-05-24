import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext)



    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Settings Screen
            </Text>

            <Text>
                {
                    JSON.stringify( authState, null, 2)
                }
            </Text>

                {
                    authState.iconFavorite &&
                    (
                        <Icon 
                            name={authState.iconFavorite}
                            size={90} 
                            color={colores.primary} 
                        />
                    )
                }
            
        </View>
    )
}
