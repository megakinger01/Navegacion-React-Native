import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const AlbumScreen = () => {

    const {  logout, authState } = useContext(AuthContext)
    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Album Screen
            </Text>

            {
                authState.isLoggedIn &&
                (
                    <Button 
                        title="Logout"
                        onPress={ () => logout() }
                    />
                )

            }
   
        </View>
    )
}
